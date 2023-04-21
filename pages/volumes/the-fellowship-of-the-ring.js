import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../lib/data";

export default function fellowship (){
    const fellowshipVolume = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring")
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[0].title}</h1>
            <p>{volumes[0].description}</p>
            <ul>
                {fellowshipVolume.books.map((book, i)=> (                    
                    <li key={i}>{book.ordinal}: {book.title}</li>                   
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
            <Image 
                src="/public/images/the-fellowship-of-the-ring.png" 
                width={140}
                height={230}
                alt="the-fellowship-of-the-ring"
            />
            <h6><Link href="./the-two-towers">Next Volume</Link></h6>
        </div>
    )
}

