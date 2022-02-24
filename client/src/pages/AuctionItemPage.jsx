import { useParams, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AuctionWrapper from '../components/AuctionWrapper/AuctionWrapper';

function AuctionItemPage() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <AuctionWrapper id={id} />
      <Button component={Link} to="/" variant="contained">
        На главную
      </Button>
    </>
  );
}
export default AuctionItemPage;
