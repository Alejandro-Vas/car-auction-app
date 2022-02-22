import { useParams, Link } from 'react-router-dom';

function AuctionItemPage() {
  const params = useParams();
  const prodId = params.id;

  return (
    <>
      <div>
        Auction Item page
      </div>
      <h2>
        Лот №
        {' '}
        {prodId}
      </h2>

      <Link to="/">
        <button
          type="button"
        >
          На главную
        </button>

      </Link>

    </>
  );
}
export default AuctionItemPage;
