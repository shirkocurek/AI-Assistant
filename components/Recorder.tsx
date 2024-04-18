"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Recorder({ uploadAudio }: { uploadAudio: (blob: Blob) => void }) {
  
    useEffect(() => {
        getMicrophonePermission();
    }, []);

  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

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
