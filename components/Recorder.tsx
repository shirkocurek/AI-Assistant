import Image from "next/image";
import React from "react";

function Recorder({uploadAudio}: { uploadAudio: (blob: Blob) => void}) {
  return (
    <div className="flex flex-center justify-center text-white">
      <Image
        width={350}
        height={350}
        priority
        alt="siri icon"
        src="/active.gif"
      />
    </div>
  );
}

export default Recorder;
