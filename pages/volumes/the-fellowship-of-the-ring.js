import Link from "next/link";
import { volumes } from "../../lib/data";

export default function fellowship (){
    const fellowshipVolume = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[0].title}</h1>
            <p>{volumes[0].description}</p>
            <ul>
                {fellowshipVolume.books.map((book)=> (
                    <>
                    <li key={fellowshipVolume.books.ordinal}>{book.ordinal}: {book.title}</li>                    
                    </>
                ))}
            </ul>

            {/* <div>
                {volumes[0].books.map((book)=> (
                    <ul>
                        <li key={volumes[0].books.ordinal}>{book.ordinal}</li>
                        <li key={volumes[0].books.title}>{book.title}</li>   
                    </ul>                 
                ))}
                {console.log(volumes[0].books)}                           
            </div>        */}
        </div>
    )
}

