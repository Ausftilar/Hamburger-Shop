import  { SiBurgerking } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking />
      </div>
      <nav>
        <a href="#">Домой</a>
        <a href="#">О нас</a>
        <a href="#">Отзывы</a>
        <a href="#">Бургеры</a>
      </nav>
    </header>
)
}

export default Header;