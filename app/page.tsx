import HomePage from "@/containers/home-page";
import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen">
        <main className="flex flex-col gap-8 items-center justify-center">
          <HomePage />
        </main>
        <footer className="flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/jeelsdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Jeels →
          </a>
        </footer>
      </div>
  );
}
