import Github from "@/components/Avatars/Github";
import Linkedin from "@/components/Avatars/Linkedin";
import Mail from "@/components/Avatars/Mail";
import DarkMode from "@/components/Buttons/DarkMode";
import Link from "next/link";

const AvatarSocials = () => {
    return (
        <div className="flex justify-around items-center gap-3">
            <Link href="/" className="border-2 border-gray-700 p-2 rounded-md hover:bg-gray-700">
                <Mail />
            </Link>
            <Link href="/" className="border-2 border-gray-700 p-2 rounded-md hover:bg-gray-700">
                <Linkedin />
            </Link>
            <Link href="/" className="border-2 border-gray-700 p-2 rounded-md hover:bg-gray-700">
                <Github />
            </Link>
            <DarkMode />
        </div>
    );
}

export default AvatarSocials;
