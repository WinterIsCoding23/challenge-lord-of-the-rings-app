import Link from "next/link";   

export default function volumes() {
    return (
        <div>
            <h1>All volumes can be found here:</h1>
            <ul>
                <li>
                    <Link href="./the-fellowship-of-the-ring">The Fellowship of the Ring</Link>
                </li>
                <li>
                    <Link href="/the-two-towers">The Two Towers</Link>
                </li>
                <li>
                    <Link href="/the-return-of-the-king">The Return of the King</Link>
                </li>
            </ul>
        </div>
    )
}