import Github from "@/components/Avatars/Github";
import Mail from "@/components/Avatars/Mail";

const AvatarSocials = () => {
    return (
        <div className="flex justify-around items-center gap-3">
            <Github />
            <Mail />
        </div>
    );
}

export default AvatarSocials;
