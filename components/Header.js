import Link from 'next/link';

import  { SiBurgerking } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <div>
          <SiBurgerking />
        </div>
      </Link>
      <nav>
        <Link href="/">Домой</Link>
        <Link href="/about">О нас</Link>
        <Link href="/reviews">Отзывы</Link>
        <Link href="/burgers">Бургеры</Link>
      </nav>
    </header>
)
}

export default Header;