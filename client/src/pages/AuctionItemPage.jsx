import { useParams, Link } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import AuctionItem from '../components/AuctionItem/AuctionItem';
import { useGetAuctionItemQuery } from '../reducers/auctionItemApi/auctionItemApi';
import Spinner from '../components/Spinner/Spinner';

function AuctionItemPage() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isSuccess } = useGetAuctionItemQuery(id);
  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
      <>
        <Typography
          variant="h2"
          fontSize="h4.fontSize"
        >
          Подробная информация об автомобиле
          <br />
          <b>{data?.auction.title}</b>
        </Typography>
        <Box mb={3}>
          <AuctionItem auction={data.auction} isMainPage={false} />
        </Box>

        <Button component={Link} to="/" variant="contained">
          На главную
        </Button>
      </>
      )}
    </>
  );
}
export default AuctionItemPage;
