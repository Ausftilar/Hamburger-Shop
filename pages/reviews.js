import Head from 'next/head'

const ReviewsPage = ({ reviews }) => {
  return (
    <>
    <Head>
      <title>Жирные бургеры | Главная</title>
      <meta name="title" content="Жирные бургеры"/>
    </Head>
    <div>
      <h1>Отзывы клиентов</h1>
      <div className="reviews">
        { !!reviews.length && reviews.map((res) => {
          return (
            <div key={res.id} className="review">
              {res.id}{' '}
              {res.body.length > 90
                ? `${res.body.slice(0, 90)}...`
                : res.body}
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
};

export async function getServerSideProps() {
  const _baseUrl = process.env.NEXT_PUBLIC_DB_ID

  const response = await fetch(`${_baseUrl}/comments`);
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20)
    }
  }
}
  
export default ReviewsPage;