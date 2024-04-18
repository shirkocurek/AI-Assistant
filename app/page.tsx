"use client";

import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import Messages from "@/components/Messages";
import Recorder from "@/components/Recorder";
import { useRef } from "react";

export default function Home() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  return (
    <main className="bg-black h-screen overflow-y-scroll">
      {/* Header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5">
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
      <form className="flex flex-col bg-black">
        <div className="flex-1 bg-gradient-to-b from-purple-500 to-black">
          <Messages />
        </div>
        {/*Hidden fields*/}
        <input type="file" hidden ref={fileRef} />
        <button type="submit" hidden />
        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">
          {/*recorder*/}
          <Recorder />
          <div>{/*voice synthesizer*/}</div>
        </div>
      </form>
    </main>
  );
}
