import { SettingsIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>Lets build an AI Assistant!</h1>
      {/* Header */}
      <header
        className="flex justify-between fixed top-0 text-white w-full p-5"
      >
        <Image
          src="/Icon.jpeg"
          width={50}
          height={50}
          alt="user-icon"
          className="object-contain"
        />
        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black transition-all ease-in-out duration-150 hover:bg-purple-700 hover:text-white"
        />
      </header>
      {/* Form */}
    </main>
  );
}
