import React from 'react'
import BarChart from './components/BarChart'

const CHART_WIDTH = 400;
const CHART_HEIGHT = 400;
const CHART_DATA = [
    { key: '봄', value: 50 },
    { key: '여름', value: 100 },
    { key: '가을', value: 120 },
    { key: '겨울', value: 70 }
];
const BAR_PADDING = 10;

export default function App() {
    return (
        <div>
            <BarChart 
                width={CHART_WIDTH} 
                height={CHART_HEIGHT}
                padding={BAR_PADDING}
                data={CHART_DATA}
            />
        </div>
    );
}