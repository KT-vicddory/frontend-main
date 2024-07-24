'use client';
import React, { useState, useEffect } from 'react';
import PlayerCard from '@/components/tradingCard/PlayerCard';
import dynamic from 'next/dynamic';
import PlayerData from './PlayerData';
import {
  IPlayerBack,
  TPitcherMetric,
  TCatcherMetric,
  TInfielderMetric,
  IPitcherPlayerData,
  IBatterPlayerData,
  TPitcherYearRecord,
  TBatterYearRecord,
  TPlayerMetric,
} from '@/types';
import generateStaticParams from '@/utils/generateStaticParams';
import { getDefaultMetric } from '@/utils/getDefaultMetric';
interface PlayerDetailProps {
  player: IPlayerBack | null;
  // playerData: IPitcherPlayerData | IBatterPlayerData;
  position: 'pitcher' | 'catcher' | 'infielder' | 'outfielder';
  aiMetric: TPitcherMetric | TCatcherMetric | TInfielderMetric;
  currentMetric: TPitcherMetric | TCatcherMetric | TInfielderMetric;
}

export default function PlayerDetailClient({
  player,
  position,
  aiMetric,
  currentMetric,
  // aiMetric,
}: PlayerDetailProps) {
  const [showExpectedSeries, setShowExpectedSeries] = useState(false);
  const [isSpin, setIsSpin] = useState(false);
  const [getExpectedData, setGetExpectedData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  // const playerProfile: IPlayerBack = playerData.data.gameplayer;
  /*
  if (
    playerData.data.metric2023 === undefined ||
    playerData.data.metric2023 === null
  ) {
    playerData.data.metric2023 = getDefaultMetric('pitcher') as TPitcherMetric;
  }*/
  // const currentMetric: TPitcherMetric = playerData.data.metric2023 as TPitcherMetric;

  useEffect(() => {
    console.log('PlayerDetailClient mounted');
    console.log('player', player);
    console.log('position', position);
    // console.log('playerData', playerData);
  }, []);

  useEffect(() => {
    if (isSpin) {
      const timer = setTimeout(() => setIsSpin(true), 1080); // Duration should match your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isSpin]);

  // API 호출
  {
    /*
  const playerYearRecord: TBatterYearRecord[] | TPitcherYearRecord[] =
    playerData.data.yearrecordlist;

  const apiInputData = {
    position: position,
    player_data: playerYearRecord,
  };
  const fetchPlayerData = async (
    apiInputData: any,
  ): Promise<TPlayerMetric | any> => {
    try {
      console.log('Requesting player data with input:', apiInputData);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/playerPredict`,
        {
          method: 'POST',
          // cache: 'force-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiInputData),
        },
      );
      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error('Failed to fetch player data');
      }
      const playerExpectedData = await response.json();
      console.log('Received player expected data:', playerExpectedData);

      return playerExpectedData;
    } catch (error) {
      console.error('Error fetching player data:', error);
      throw error;
    }
  };

  const getExpectedMetric = async (position: string) => {
    try {
      console.log('Calling fetchPlayerData with position:', position);
      const playerYearRecord: TBatterYearRecord[] | TPitcherYearRecord[] =
        playerData.data.yearrecordlist;

      const apiInputData = {
        position: position,
        player_data: playerYearRecord,
      };
      const result = await fetchPlayerData(apiInputData);
      console.log('Received expected data: ', result);
      setGetExpectedData(result);
    } catch (e) {
      console.log('Error:', e);
      throw e;
    }
  };
  */
  }
  //
  const handleAIButtonClick = () => {
    console.log('AI Button clicked');

    setShowExpectedSeries(true);
    setIsSpin(!isSpin);
    // getExpectedMetric(position);
  };

  const PlayerChart = dynamic(() => import('@/components/player/PlayerChart'), {
    ssr: false,
  });

  if (!player) {
    return <div>Player not found</div>;
  }
  if (!getExpectedData) {
    return null;
  }
  console.log('player', player);
  // console.log('getExpectedMetric', getExpectedMetric);
  console.log('Rendering PlayerDetailClient');

  return (
    <>
      <h1>Player Detail Client</h1>
      <div className="flex flex-col items-center bg-black/90 min-h-screen max-md:flex-wrap">
        <div className="flex w-3/4 items-center justify-center max-md:flex-wrap py-16 max-md:w-full">
          <div
            className="flex h-fit mx-6 items-center justify-self-center my-10 max-md:flex max-md:flex-col max-md:justify-items-center max-md:px-0 max-md:mx-0"
            onClick={handleAIButtonClick}
          >
            <PlayerCard player={player} size="large" checkSpin={isSpin} />
          </div>
          {/* AI 파트 */}
          <div className="flex flex-col w-1/2 px-16 pl-22 max-md:pl-0 max-md:w-full max-md:flex-wrap max-md:px-2 max-md:mx-4">
            {/*그래프*/}
            <div className="w-full max-md:px-2 max-md:items-center">
              <PlayerChart
                positionCurrentMetric={currentMetric}
                positionAIMetric={aiMetric}
                position={position}
                showExpectedSeries={showExpectedSeries}
              />
              {/*{getExpectedData && (
                <pre>{JSON.stringify(getExpectedData, null, 2)}</pre>
              )}*/}
            </div>
            <div className="h-10 flex items-center justify-center max-md:pr-6">
              <button
                className="w-1/2 h-full flex items-center justify-center font-bold text-white text-base bg-red-90 rounded-[30px]"
                onClick={handleAIButtonClick}
              >
                선수 성적 예측하기
              </button>
            </div>
            {/* 한 줄 예측 */}
            <div className="pl-6 mt-3">
              <div className="text-white pl-6 mt-3 ">AI 예측</div>
              <div className="flex items-center rounded-[5px] border-2 text-white border-white h-auto w-5/6 mx-6 p-4 max-md:w-11/12 max-md:flex max-md:justify-center">
                <div className="text-white">{aiMetric.reason}</div>
                {/* <div className="text-white">{playerData.reason}</div> */}
              </div>
            </div>
          </div>
        </div>
        <PlayerData player={player} />
      </div>
    </>
  );
}
