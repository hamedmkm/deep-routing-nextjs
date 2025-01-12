import Link from "next/link";

export default function NewsPage (){
    return ( <div >
        
        <h1>Hello world</h1>
        
              
        <ul>

            <li>
                <Link href="/news/first-news">First news item</Link>
          
            </li>
            <li>
                <Link href="/news/second-news">second  news item </Link>
          
            </li>
            <li>
                <Link href="/news/third-news">third   news item </Link>
          
            </li>
        </ul>
        
        </div> )
}