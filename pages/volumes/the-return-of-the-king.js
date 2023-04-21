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
                {returnVolume.books.map((book, i)=> (                    
                    <li key={i}>{book.ordinal}: {book.title}</li>                              
                ))}
            </ul>
            <h6><Link href="./the-fellowship-of-the-ring">Previous Volume</Link></h6>
        </div>
    )
}

