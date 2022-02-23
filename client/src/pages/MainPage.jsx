import Grid from '@mui/material/Grid';
import { useGetAuctionsListQuery } from '../reducers/auctionsListApi/auctionsListApi';
import Spinner from '../components/Spinner/Spinner';
import AuctionItem from '../components/AuctionItem/AuctionItem';

const { POLLING_INTERVAL } = process.env.CONFIG;

function MainPage() {
  const { data, isLoading, isSuccess } = useGetAuctionsListQuery('', { pollingInterval: POLLING_INTERVAL });
  return (
    <>
      <div>Main page</div>
      {isLoading && <Spinner />}
      <Grid container spacing={3}>
        {isSuccess && !isLoading && data?.auctions.map((auction) => (
          <Grid item lg={4} key={auction.id}>
            <AuctionItem auction={auction} />
          </Grid>
        ))}

      </Grid>

    </>
  );
}
export default MainPage;
