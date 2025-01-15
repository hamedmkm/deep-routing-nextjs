import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  // اطمینان از اینکه params به صورت آسنکرون مدیریت شود
  const { slug } = await Promise.resolve(params); // انتظار برای بارگذاری params
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound(); // اگر خبری پیدا نشد، به صفحه خطا می‌رود
  }

  return (
    <>
    <div>
      <h2>Interecpted!</h2>
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
    </>
  );
}
