import { useParams, Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import AuctionItem from '../components/AuctionItem/AuctionItem';
import { useGetAuctionItemQuery } from '../reducers/auctionItemApi/auctionItemApi';
import Spinner from '../components/Spinner/Spinner';

function AuctionItemPage() {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isSuccess } = useGetAuctionItemQuery(id);
  return (
    <>
      <div>
        Подробная информация об автомобиле
      </div>
      {isLoading && <Spinner />}
      {isSuccess && !isLoading && (
      <>
        <h2>
          Лот №
          {' '}
          {id}
        </h2>
        <Box mb={3}>
          <AuctionItem auction={data.auction} isMainPage={false} />
        </Box>

        <Button component={Link} to="/" variant="contained">
          На главную
        </Button>

      </>
      ) }

    </>
  );
}
export default AuctionItemPage;
