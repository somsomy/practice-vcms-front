import {LineChart, Line, XAxis, ResponsiveContainer} from 'recharts';

const data = [...Array(60)].map((item, idx) => {
  return {name: 'Page A', uv: Math.random() * (100 - 5) + 5}
});

function RenderLineChart() {
  return (
    <ResponsiveContainer width="99%">
      <LineChart
        data={data}
        stroke='none'
        margin={{top: 3, right: 10, left: 10, bottom: 3}}
      >
        <XAxis dataKey="name" hide={true}/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" isAnimationActive={false} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default RenderLineChart;