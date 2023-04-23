import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../lib/data";

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes?.map((volume, index)=> (      // important to use "?" / "volumes && volumes.map" bc possibly the array may not exist/have no data yet
          <li key={index}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
        </li>
        <li>
          <Link href="./volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="./volumes/the-return-of-the-king">The Return of the King</Link>
        </li>
      </ul> */}
      
    </div>
  );
}
