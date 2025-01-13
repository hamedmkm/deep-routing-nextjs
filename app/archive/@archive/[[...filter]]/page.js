import Link from "next/link";
import NewsList from "@/component/News-List/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news/news";

export default async function FilteredNewsPage({ params }) {
  // params.filter نیاز به await ندارد، این ویژگی به طور خودکار در Next.js به صورت آسنکرون مدیریت می‌شود.
  const filter = params.filter || []; // اگر filter نبود، یک آرایه خالی به جای آن قرار می‌دهیم
  const selectedYear = filter[0]; // فیلتر اول که معمولاً سال است
  const selectedMonth = filter[1]; // فیلتر دوم که ممکن است ماه باشد

  let news;
  let links = getAvailableNewsYears(); // دریافت لیست سال‌ها

  // اگر سال انتخاب شده باشد و ماه انتخاب نشده باشد
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear); // دریافت ماه‌های موجود برای آن سال
  }

  // اگر سال و ماه انتخاب شده باشد
  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth); // دریافت اخبار برای آن سال و ماه
    links = [];
  }

  // اگر هیچ خبری پیدا نشد
  let newsContent = <p>No news found for the selected period.</p>;

  // اگر خبری پیدا شد
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("invalid filter.");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}` // لینک برای سال و ماه
                : `/archive/${link}`; // لینک فقط برای سال

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
