import Link from "next/link";
import { volumes } from "../../lib/data";

export default function fellowship (){
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[0].title}</h1>
            <p>{volumes[0].description}</p>
            <div>
                {volumes[0].books.map((book)=> (
                    <ul>
                        <li>{book.ordinal}</li>
                        <li>{book.title}</li>   
                    </ul>                 
                ))}
                {console.log(volumes[0].books)}                           
            </div>       
        </div>
    )
}

