import Logo from "@/components/Logo/logo";
import AvatarSocials from "./section-avatar-social";
import About from "./section-about";

const HomePage = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center border border-gray-600 rounded-sm p-4 dark:bg-slate-800">
                <div className="flex items-center gap-1">
                    <Logo src="https://avatars.githubusercontent.com/u/130939421?v=4" alt="Jeelsh" />
                    <div className="font-medium dark:text-white ml-4">
                        <div>Jeels</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                </div>
                <AvatarSocials />
            </div>

            <About />
            
        </>
    );
}

export default HomePage;
