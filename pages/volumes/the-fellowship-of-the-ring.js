import Link from "next/link";
import { volumes } from "../../lib/data";

export default function fellowship (){
    return (
        <div>
        <Link href="../">← All Volumes</Link>
        <div>
            {volumes?.map((volume)=> (
                <>
                <h1>{volume.title}</h1>
                <p>{volume.description}</p>
                <ul>
                    <li>
                    {volumes?.map((volume)=> volume.books.map((book)=> book.ordinal))
                    }
                    </li>
                    <li>
                    {volumes?.map((volume)=> volume.books.map((book)=> book.title))
                    }
                    </li>
                </ul>
                </>
            ))}
        </div>
        <ul>

        </ul>
    </div>
    )
}

{/* <ul>
{volumes?.map((volume)=> (      // important to use "?" / "volumes && volumes.map" bc possibly the array may not exist/have no data yet
  <li key={volume.slug}>
    <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
  </li>
))}
</ul> */}