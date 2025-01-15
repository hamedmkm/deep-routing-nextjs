import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';

export default async function NewsDetailPage({ params }) {
  // اطمینان از اینکه params به صورت آسنکرون مدیریت شود
  const { slug } = await Promise.resolve(params); // انتظار برای بارگذاری params
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound(); // اگر خبری پیدا نشد، به صفحه خطا می‌رود
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
