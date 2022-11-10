import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);  

  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такой страницы не найдено!</h2>
      <p>Перехожу на <Link href="/">главную страницу</Link> через 3 сек</p>
    </div>
  )
}

export default NotFoundPage;