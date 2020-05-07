import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {scaleLinear, scaleBand} from 'd3-scale'

const BarChart = ({ width, height, padding, data }) => {
  const xFun = scaleBand()
    .domain(data.map(row => row.key))
    .range([ 0, width ])

  const yFun = scaleLinear()
    .domain([ 0, Math.max(...data.map(row => row.value))])
    .range([ 0, height ]);

  // 바 넓이
  const bw = xFun.bandwidth() - padding;

  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      {data.map((row, i) => {
        const x = xFun(row.key) + padding/2;
        const bh = yFun(row.value); // 바 높이
        const y = height - bh; // 차트 높이 - 바 높이
        return <rect width={bw} height={bh} x={x} y={y} fill="#a9a9a9"></rect>
      })}
    </svg>
  );
};

BarChart.defaultProps = {
  width: 100,
  height: 100,
  padding: 5,
  data: []
};

BarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  data: PropTypes.array
}

export default BarChart;
