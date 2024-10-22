import { LogoType } from "@/types/Logo";
import Image from "next/image";

const Logo = ({ src, alt, width = 50, height = 50, className = 'w-10 h-10 rounded-full'}: LogoType) => {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={className} />
    )
}

export default Logo;
