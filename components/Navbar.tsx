import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5" style={{ 
    backgroundColor:'#282828',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      
      
    }}>
      <Link href="/">
        <Image src="/hilink-logo.png" alt="logo" width={100} height={75} />
      </Link>


      <div className="lg:flexCenter hidden">
        
      </div>


    </nav>
  )
}

export default Navbar