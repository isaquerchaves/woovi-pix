import Image from "next/image";
import { FooterContainer } from "./Footer.style";

const Footer = () => {
    return ( 
        <FooterContainer>
            <Image 
                src="/Security.png"
                alt="Seguro"
                width={15}
                height={18}
            />
            <p>Pagamento 100% seguro via: </p>
            <Image 
                src="/Logo-footer.png"
                alt="Logo"
                width={57}
                height={17}
            />
        </FooterContainer>
     );
}
 
export default Footer;