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
                {towerVolume.books.map((book, i)=> (                    
                    <li key={i}>{book.ordinal}: {book.title}</li>
                ))}
            </ul>
            <h6><Link href="./the-fellowship-of-the-ring">Previous Volume</Link></h6>
            <h6><Link href="./the-return-of-the-king">Next Volume</Link></h6>
        </div>
    )
}

