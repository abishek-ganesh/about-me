import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1991-09-22T16:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'states',
    label: 'U.S. States visited',
    value: 24,
    link:
      'https://www.google.com/maps/d/u/1/edit?mid=1LxU2Vt_3DV1tFsBcOgjS_erGiyFfFJJF&usp=sharing',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 11,
    link:
      'https://www.google.com/maps/d/u/1/edit?mid=1AAscWrtMqstqyYh8_4-nVF-cbpfYu7C9&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Santa Clara, CA',
    link: 'https://www.google.com/maps/d/u/1/edit?mid=1SAtwd_RebHmvpqgEZssUgpcLELCX2wyL&usp=sharing', 
  },
];

export default data;
