import NewsList from "@/component/News-List/news-list";
import { getNewsForYear } from "@/lib/news/news";

export default async function FilteredNewsPage({ params }) {
  // مطمئن شوید params به درستی await شده است
  const { year } = await params;

  // دریافت داده‌ها برای سال مشخص‌شده
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
