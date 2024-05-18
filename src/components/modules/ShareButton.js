"use client";

import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <button onClick={() => toast.success("کپی شد")} className="shadow-normal active:bg-zinc-200 w-full flex items-center justify-center gap-2 p-2 rounded-md">
        <LuShare2 className="text-blue-600" />
        <span>اشتراک گذاری</span>
      </button>
    </CopyToClipboard>
  );
}

export default ShareButton;
