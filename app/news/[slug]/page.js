import { DUMMY_NEWS } from '@/dummy-news';

// استفاده از async برای دریافت داده‌ها
export async function generateMetadata({ params }) {
  // منتظر بمانید تا `params` بارگذاری شود
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    return { title: 'News not found' }; // نمایش خطا در صورت عدم پیدا کردن
  }

  return {
    title: newsItem.title,
    description: newsItem.content,
  };
}

export default async function NewsDetailPage({ params }) {
  // منتظر بمانید تا `params` بارگذاری شود
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    return <div>News not found!</div>;
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
