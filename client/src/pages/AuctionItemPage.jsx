import { useParams, Link } from 'react-router-dom';

function AuctionItemPage() {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <div>
        Подробная информация об автомобиле
      </div>
      <h2>
        Лот №
        {' '}
        {id}
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
