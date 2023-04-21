import Link from "next/link";
import { volumes } from "../../lib/data";

export default function fellowship (){
    const returnVolume = volumes.find(({slug}) => slug === "the-return-of-the-king")
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[2].title}</h1>
            <p>{volumes[2].description}</p>
            <ul>
                {returnVolume.books.map((book)=> (
                    <>
                    <li key={returnVolume.books.ordinal}>{book.ordinal}: {book.title}</li>                    
                    </>
                ))}
            </ul>
        </div>
    )
}

