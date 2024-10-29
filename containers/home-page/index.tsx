import Logo from "@/components/Logo/logo";
import AvatarSocials from "./section-avatar-social";
import About from "./section-about";
import Skills from "./section-skills";

const HomePage = () => {
    return (
        <>
            <div className="w-full flex justify-between items-center border border-gray-300 rounded-md p-4 dark:bg-background dark:border-gray-700">
                <div className="flex items-center gap-3">
                    <Logo src="https://avatars.githubusercontent.com/u/130939421?v=4" alt="Jeelsh" />
                    <div className="font-medium dark:text-white">
                        <div className="text-gray-950 font-semibold dark:text-white">Jeels</div>
                        <div className="text-sm text-gray-400 dark:text-gray-400">Desarrollador Web</div>
                    </div>
                </div>
                <AvatarSocials />
            </div>

            <About />

            <Skills />

        </>
    );
}

export default HomePage;
