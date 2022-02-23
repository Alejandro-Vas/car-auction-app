import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function FinishTime(props) {
  const { finishTime } = props;
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // TODO -> decompose calculating logic to utils
  const end = new Date(finishTime);
  const distance = end - now;

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;

  const minutes = `${Math.floor((distance % HOUR) / MINUTE)}`;
  const seconds = `${Math.floor((distance % MINUTE) / SECOND)}`;

  const minutesPadded = minutes.padStart(2, '0');
  const secondsPadded = seconds.padStart(2, '0');

  return (
    <Box sx={{ padding: 1 }}>
      {distance > 0
        ? `${minutesPadded}:${secondsPadded}`
        : 'Завершен'}
    </Box>

  );
}
export default FinishTime;

FinishTime.propTypes = {
  finishTime: PropTypes.number.isRequired,
};
