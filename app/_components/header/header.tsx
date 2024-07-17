import Image from "next/image";
import { HeaderContent } from "./header.style";

interface HeaderProps {
    title: string;
}

const Header = ({title}:HeaderProps) => {
    return ( 
        <HeaderContent>
            <Image 
                src="/Logo.png"
                alt="logo"
                width={123}
                height={36}
            />
            <p>{title}</p>
        </HeaderContent>
     );
}
 
export default Header;