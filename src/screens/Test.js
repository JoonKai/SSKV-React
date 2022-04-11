import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import BarChart from '../components/Charts/BarChart';

const Test = (props) => {
  return (
    <div style={{ display:'inline-block', width:600, height: 300}}>
        <BarChart data={props.data}></BarChart>
    </div>
  )
}

export default Test