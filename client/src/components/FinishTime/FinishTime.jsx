import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function FinishTime(props) {
  const { finishTime } = props;
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const end = new Date(finishTime);
  const distance = now - end;

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;

  const minutes = `${Math.floor((distance % HOUR) / MINUTE)}`;
  const seconds = `${Math.floor((distance % MINUTE) / SECOND)}`;

  return (
    // <div>{distance > 0 ? `${minutes}:${seconds}` : 'Аукцион завершен'}</div>
    <div>
      {`${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`}
    </div>
  );
}
export default FinishTime;

FinishTime.propTypes = {
  finishTime: PropTypes.number.isRequired,
};
