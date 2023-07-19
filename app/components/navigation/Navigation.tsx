import Link from "next/link";

const Navigation = () => {


    return ( 
    <div className="sm:block hidden">
        <ul className="flex flex-row">
            <li className="mx-6">
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About me</Link>
            </li>
            <li className="mx-6">
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </div> 
    );
}
 
export default Navigation;