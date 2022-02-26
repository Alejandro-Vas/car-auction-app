import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const BidLabel = React.memo((props) => {
  const { bid } = props;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-end',

    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        height: 40,
        backgroundColor: 'label.background',
        color: 'label.main',
        borderRadius: 2,
      }}
      >
        <Box p={1}>
          Ставка:
          {' '}
          {bid}
          {' '}
          р.
        </Box>
      </Box>
    </Box>

  );
});
export default BidLabel;

BidLabel.propTypes = {
  bid: PropTypes.number.isRequired,
};
