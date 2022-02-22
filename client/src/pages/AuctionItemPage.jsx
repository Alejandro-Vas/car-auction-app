import { useParams } from 'react-router-dom';

function AuctionItemPage() {
  const params = useParams();
  const prodId = params.id;

  return (
    <>
      <div>
        Auction Item page
      </div>
      <h2>
        Товар №
        {' '}
        {prodId}
      </h2>
      ;
    </>
  );
}
export default AuctionItemPage;
