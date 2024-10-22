import Logo from "@/components/Logo/logo";
import AvatarSocials from "./section-avatar-social";

const HomePage = () => {
    return (
        <div className="w-full flex justify-between items-center border border-sky-500 bg-red-50">
            <div className="flex items-center gap-4">
                <Logo src="https://avatars.githubusercontent.com/u/130939421?v=4" alt="Jeelsh" />
                <div className="font-medium dark:text-white pl-4">
                    <div>Jeels</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div>
            </div>
            <AvatarSocials />
        </div>
    );
}

export default HomePage;
