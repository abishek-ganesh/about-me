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
      'https://www.google.com/maps/d/u/1/embed?mid=1AAscWrtMqstqyYh8_4-nVF-cbpfYu7C9&ehbc=2E312F',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 11,
    link:
      'https://www.google.com/maps/d/u/1/embed?mid=1AAscWrtMqstqyYh8_4-nVF-cbpfYu7C9&ehbc=2E312F',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Santa Clara, CA',
    link: 'https://www.google.com/maps/d/u/1/embed?mid=1SAtwd_RebHmvpqgEZssUgpcLELCX2wyL&ehbc=2E312F',
  },
  {
    label: 'Site last updated at',
    key: 'pushed_at',
    link: 'https://github.com/abishek-ganesh/about-me/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;