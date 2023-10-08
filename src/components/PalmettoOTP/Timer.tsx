import React, { useEffect } from 'react';

import { useCountDown } from '../../hooks';

interface ITimer {
  seconds: number;
  cb: () => void;
}

const Timer = (props: ITimer) => {
  const [formattedSeconds] = useCountDown(props);
  useEffect(() => {
    if (Number(formattedSeconds) === 0) {
      props.cb();
    }
  }, [formattedSeconds]);
  return <span className='timer-style'>{formattedSeconds}</span>;
};

export default Timer;
