import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { volumes } from "../../lib/data";


export default function VolumeDetail () {
    const router = useRouter();
    const { volume } = router.query;
    console.log("slug: ", volume); 

    let volumeSite = volumes.find((element)=> element.slug === volume);
    //console.log("volume", volume);
    console.log("volumeSite: ", volumeSite);

    const volumeIndex = volumes.findIndex((element)=> element.slug === volume);
    console.log("volumeIndex: ", volumeIndex);
    const previousVolumeIndex = volumeIndex >= 1 ? volumeIndex -1 : "0";

    return (    
        <>
            <h1>{volumeSite.title}</h1>
            <p>{volumeSite.description}</p>
            <ul>
                <li>
                    {volumeSite.books.map((book, i)=> (
                        <li key={i}>{book.ordinal} : {book.title}</li>
                    ))}
                </li>
            </ul>
            <Image 
                src={volumeSite.cover} 
                width={140} 
                height={230}
                alt={volumeSite.slug}
            />
            <h6><Link href={`/volumes/${volumes[previousVolumeIndex].slug}`} >Previous volume</Link></h6>
        </>
    )
}



// import Link from "next/link";
// import Image from "next/image";
// import { volumes } from "../../lib/data";

// export default function fellowship (){
//     const towerVolume = volumes.find(({slug}) => slug === "the-two-towers")
//     return (
//         <div>
//             <Link href="../">← All Volumes</Link>
//             <h1>{volumes[1].title}</h1>
//             <p>{volumes[1].description}</p>
//             <ul>
//                 {towerVolume.books.map((book, i)=> (                    
//                     <li key={i}>{book.ordinal}: {book.title}</li>
//                 ))}
//             </ul>
//             <Image 
//                 src={volumes[1].cover} 
//                 width={140} 
//                 height={230}
//                 alt="the-two-towers"
//             />
//             <h6><Link href="./the-fellowship-of-the-ring">Previous Volume</Link></h6>
//             <h6><Link href="./the-return-of-the-king">Next Volume</Link></h6>
//         </div>
//     )
// }

