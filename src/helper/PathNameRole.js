import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function PathNameRole() {
  const [url, setUrl] = useState();
  const pathname = usePathname();

  useEffect(() => {
    setUrl(pathname.split("/").find((i) => i === "dashboard" || i === "admin"));
  }, [pathname]);

  return url;
}

export default PathNameRole;
