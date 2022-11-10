import Link from 'next/link';
import Image from 'next/image'

import styles from '../../styles/Burgers.module.css'

export const getStaticProps = async () => {
  const _localDB = process.env.NEXT_PUBLIC_DB_LOCAL;
  const res = await fetch(`${_localDB}`);
  const data = await res.json();

  return {
    props: { burgers: data}
  }
}

const Burgers = ({ burgers }) => {
  return (
    <div>
      <h1>Наши Бургеры</h1>
      {burgers.map((burger) => {
        return (
          <Link
            href={`/burgers/${burger.id}`}
            key={burger.id}
            className={styles.burgerCard}
          >
            <div className={styles.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width={150}
                height={141}
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Burgers;