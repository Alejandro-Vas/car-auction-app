import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import BidLabel from '../BidLabel/BidLabel';
import FinishTime from '../FinishTime/FinishTime';

const { IMAGES_BASEPATH } = process.env.CONFIG;

const AuctionItem = React.memo((props) => {
  const {
    auction: {
      title, id, bid, finishTime, imgUrl,
    },
    isMainPage,
  } = props;

  const renderWidth = isMainPage ? 375 : 675;
  const renderHeight = isMainPage ? 250 : 400;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: renderWidth,
      height: renderHeight,
      backgroundImage: `url(${IMAGES_BASEPATH}${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: 2,
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'auctionItem.background',
      }}
      >
        <Button
          component={Link}
          to={`${id}`}
          disabled={!isMainPage}
        >
          <Typography
            variant="h3"
            fontSize="h6.fontSize"
          >
            <Box>{title}</Box>
          </Typography>
        </Button>
        <FinishTime finishTime={finishTime} />
      </Box>
      <BidLabel bid={bid} />
    </Box>
  );
});

export default AuctionItem;

AuctionItem.propTypes = {
  auction: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    bid: PropTypes.number.isRequired,
    finishTime: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
  }).isRequired,
  isMainPage: PropTypes.bool.isRequired,
};
