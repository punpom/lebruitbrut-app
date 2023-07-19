import { useRouter } from "next/navigation";

const Logo = () => {

    const router = useRouter()
    return ( 
        <div className="text-lg cursor-pointer" onClick={() => router.push("/")}>Le Bruit Brut</div>
     );
}
 
export default Logo;