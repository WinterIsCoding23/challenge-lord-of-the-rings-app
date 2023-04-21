import Link from "next/link";
import { volumes } from "../../lib/data";

export default function towers (){
    return (
        <div>
            <Link href="../">← All Volumes</Link>
            <h1>{volumes[1].title}</h1>
            <p>{volumes[1].description}</p>
            <div>
                {volumes[1].books.map((book)=> (
                    <ul>
                        <li>{book.ordinal}</li>
                        <li>{book.title}</li>   
                    </ul>                 
                ))}
                {console.log(volumes[1].books)}                           
            </div>       
        </div>
    )
}

