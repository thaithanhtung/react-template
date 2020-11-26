import React, { Fragment } from 'react';
import { PieChart, Pie, Cell, Label, LabelList, Text } from 'recharts';
// import userIcon from 'svg/businessman.svg';
// import homeIcon from 'svg/home.svg';
// import icloudIcon from 'svg/icloud.svg';
// import gobalIcon from 'svg/global.svg';
// import messengerIcon from 'svg/messenger.svg';
import './styles.scss';

const Chart = () => {
  const data1 = [
    { name: 'Option1', value: 200, id: 1, icon: 't', color: '#ff9f15' },
    { name: 'Option2', value: 200, id: 2, icon: 'y', color: '#6e3154' },
    { name: 'Option3', value: 200, id: 3, icon: 'u', color: '#9d3969' },
    { name: 'Option4', value: 200, id: 4, icon: 'i', color: '#de3f5a' },
    { name: 'Option5', value: 200, id: 5, icon: 'o', color: '#fe7140' },
  ];

  const data2 = [
    { name: '1', value: 200, id: 1, icon: 't', color: '#ff8009' },
    { name: '2', value: 200, id: 2, icon: 'y', color: '#481b34' },
    { name: '3', value: 200, id: 3, icon: 'u', color: '#7b2145' },
    { name: '4', value: 200, id: 4, icon: 'i', color: '#cc2339' },
    { name: '5', value: 200, id: 5, icon: 'o', color: '#fe4d25' },
  ];

  // const COLORS = ['#ff9f15', '#6e3154', '#9d3969', '#de3f5a', '#fe7140'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel1 = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      endAngle,
      startAngle,
      index,
      value,
      name,
      x,
      y,
    } = props;
    // console.log('index', index);
    // console.log('cx', cx);
    // console.log('cy', cy);
    // console.log('midAngle', midAngle);
    // console.log('innerRadius', innerRadius);
    // console.log('outerRadius', outerRadius);
    // console.log('percent', percent);
    // console.log('value', value);
    console.log('props', props);
    // const lengContent = (endAngle - startAngle) * 0.5;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    // console.log('radius', radius);
    const xx = cx + radius * Math.cos(-midAngle * RADIAN);
    const yy = cy + radius * Math.sin(-midAngle * RADIAN);
    // console.log('radius', radius);

    console.log('------');
    // console.log('xx', xx);
    // console.log('yy', yy);

    return (
      <g>
        <text
          x={xx}
          y={yy}
          fill='white'
          // textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline='central'
          textAnchor='middle'
          dominantBaseline='middle'
        >
          {name}
        </text>
      </g>
    );
  };

  const renderCustomizedLabel2 = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
      value,
      name,
      x,
      y,
    } = props;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const xx = cx - 12 + radius * Math.cos(-midAngle * RADIAN);
    const yy = cy - 12 + radius * Math.sin(-midAngle * RADIAN);

    return (
      <g>
        <svg
          textAnchor='middle'
          dominantBaseline='middle'
          x={xx}
          y={yy}
          className='icon-home'
          height='25'
          viewBox='0 0 512 512'
          width='25'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0' />
        </svg>
      </g>
    );
  };

  return (
    <div className='chart-test'>
      <PieChart width={600} height={600}>
        <Pie
          data={data1}
          cx={'50%'}
          cy={'50%'}
          innerRadius={120}
          outerRadius={200}
          labelLine={false}
          label={renderCustomizedLabel1}
          // fill='#8884d8'
          paddingAngle={3}
          startAngle={-16}
          dataKey='value'
          // legendType='diamond'
        >
          <Label value='5 Option' position='center' />
          {data1.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke={entry.color}
            />
          ))}
        </Pie>
        <Pie
          data={data2}
          cx={'50%'}
          cy={'50%'}
          innerRadius={70}
          outerRadius={120}
          labelLine={false}
          label={renderCustomizedLabel2}
          // fill='#8884d8'
          paddingAngle={3}
          startAngle={-16}
          dataKey='value'
          // legendType='diamond'
        >
          {data2.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              stroke={entry.color}
              fill={entry.color}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default React.memo(Chart);
