import NewsList from '@/component/News-List/news-list';
import { getLatestNews } from '@/lib/news/news';

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}