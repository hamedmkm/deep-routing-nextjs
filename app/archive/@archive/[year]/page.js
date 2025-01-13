import NewsList from "@/component/News-List/news-list";
import { getNewsForYear } from "@/lib/news/news";

export default  function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}
