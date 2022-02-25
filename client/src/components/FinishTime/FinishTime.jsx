import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import unixTimeToEndConverter from '../../utils/unixTimeToEndConverter';

const FinishTime = React.memo((props) => {
  const { finishTime } = props;
  const [now, setNow] = useState(new Date());

  const end = new Date(finishTime);
  const distance = end - now;
  const timeToEnd = unixTimeToEndConverter(now, end);

  useEffect(() => {
    if (distance > 0) {
      const timer = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(timer);
    }
    return null;
  }, [distance]);

  return (
    <Box sx={{ padding: 1 }}>
      {distance > 0
        ? timeToEnd
        : 'Завершен'}
    </Box>

  );
});
export default FinishTime;

FinishTime.propTypes = {
  finishTime: PropTypes.number.isRequired,
};
