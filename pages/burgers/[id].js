import Image from 'next/image'

import styles from '../../styles/Burgers.module.css'

export const getStaticPaths = async () => {
  const _localDB = process.env.NEXT_PUBLIC_DB_LOCAL;
  const res = await fetch(`${_localDB}`);
  const data = await res.json();

  const paths = data.map((burger) => {
    return {
      params: {id: burger.id}
    }
  })

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const _localDB = process.env.NEXT_PUBLIC_DB_LOCAL;
  const res = await fetch(`${_localDB}/${id}`);
  const data = await res.json();

  return {
    props: {
      burger: data
    }
  }
};

const Details = ({ burger }) => {
  console.log(burger);
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          fill
        />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};

export default Details;
