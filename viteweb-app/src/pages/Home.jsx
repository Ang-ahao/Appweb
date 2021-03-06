import React from "react";
import { useState } from "react";
import { Form, Input } from 'antd';
import { Line } from '@ant-design/charts';

function Home() {
  const [persons, setPersons] = useState(1);
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ];
  
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
    };
  return (
    <div className="container">
    <center><div className="nav">我是个nav</div></center>
    <>
    <h1>{persons}</h1>
    <button className="set" onClick={()=>setPersons(persons+1)}>+1</button></>
    <br />
    <div className="nrq">内容区</div>
    <br />
    <div className="tbq">图表区<Line {...config} /></div>
    </div>
  );
}

export default Home;
