import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import AuctionItem from '../AuctionItem/AuctionItem';
import { useGetAuctionsListQuery } from '../../reducers/auctionsListApi/auctionsListApi';

const { POLLING_INTERVAL } = process.env.CONFIG;

const GridWrapper = React.memo(() => {
  const { data } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });
  const searchQuery = useSelector((state) => state.searchQuerySlice);
  const filteredData = data?.auctions.filter((el) => el.title
    .toLowerCase()
    .includes(searchQuery
      .toLowerCase()
      .trim()));

  return (
    <Grid container spacing={3}>
      {filteredData?.map((auction) => (
        <Grid item lg={4} key={auction.id}>
          <AuctionItem auction={auction} isMainPage />
        </Grid>
      ))}
    </Grid>
  );
});
export default GridWrapper;
