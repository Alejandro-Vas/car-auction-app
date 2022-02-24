import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import unixTimeToEndConverter from '../../utils/unixTimeToEndConverter';

function FinishTime(props) {
  const { finishTime } = props;
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const end = new Date(finishTime);
  const distance = end - now;
  const timeToEnd = unixTimeToEndConverter(now, end);

  return (
    <Box sx={{ padding: 1 }}>
      {distance > 0
        ? timeToEnd
        : 'Завершен'}
    </Box>

  );
}
export default FinishTime;

FinishTime.propTypes = {
  finishTime: PropTypes.number.isRequired,
};
