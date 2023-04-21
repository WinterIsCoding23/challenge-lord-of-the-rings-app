import Link from "next/link";
import { volumes } from "../../lib/data";

export default function fellowship (){
    const towerVolume = volumes.find(({slug}) => slug === "the-two-towers")
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[1].title}</h1>
            <p>{volumes[1].description}</p>
            <ul>
                {towerVolume.books.map((book)=> (
                    <>
                    <li key={towerVolume.books.ordinal}>{book.ordinal}: {book.title}</li>                    
                    </>
                ))}
            </ul>
        </div>
    )
}

