'use client';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import DarkUnica from 'highcharts/themes/dark-unica';
import year_rank from '#/data/year_rank.json';
import { getTeamRanks } from '@/utils/getTeamRanks';

DarkUnica(Highcharts);

export default function Chart({
  title,
  startDate,
  endDate,
  page,
}: {
  title: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  page: string;
}) {
  const yearRankJson = year_rank;

  const yearTeam = [
    'LG',
    'KT',
    'SSG',
    'NC',
    '두산',
    'KIA',
    '롯데',
    '삼성',
    '한화',
    '키움',
    '현대',
    '쌍방울',
  ];
  const dailyTeam = [
    'LG',
    'KT',
    'SSG',
    'NC',
    '두산',
    'KIA',
    '롯데',
    '삼성',
    '한화',
    '키움',
  ];

  const today = new Date();
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  const defaultStartDate = startDate || thirtyDaysAgo;
  const defaultEndDate = endDate || today;

  const yearArr = yearTeam.map((team) => ({
    name: team,
    data: getTeamRanks({ teamName: team, page: 'year' }),
    visible: team === 'KT',
  }));

  const dailyArr = dailyTeam.map((team) => ({
    name: team,
    data: getTeamRanks({
      teamName: team,
      page: 'daily',
      startDate: defaultStartDate,
      endDate: defaultEndDate,
    }),
    visible: team === 'KT',
  }));

  const baseSeries = page === 'year' ? yearArr : dailyArr;

  const category =
    page === 'year'
      ? yearRankJson.map((item) => item.year)
      : getDateRange(defaultStartDate, defaultEndDate).map((date) => date);

  function getDateRange(
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) {
    if (!startDate || !endDate) return [];

    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
      dates.push(currentDate.toISOString().slice(5, 10));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  const [options] = useState({
    title: {
      text: title,
      margin: 50,
    },
    subtitle: {
      text: '오른쪽 팀 명을 선택하시면 팀별로 그래프를 확인하실 수 있습니다',
    },
    series: baseSeries,
    xAxis: {
      categories: category,
      labels: {
        rotation: -90,
        align: 'right',
      },
    },
    yAxis: {
      title: {
        text: 'Ranking',
      },
      reversed: true,
      tickInterval: 1,
      min: 0,
      max: 11,
      labels: {
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject,
        ): string | number {
          if (this.value === 0 || this.value === 11) {
            return '';
          }
          return this.value;
        },
      },
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    credits: {
      enabled: false,
    },
    chart: {
      height: 560,
      backgroundColor: 'transparent',
    },
  });

  return (
    <div className="max-sm:min-w-[600px]">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'chart'}
      />
    </div>
  );
}
