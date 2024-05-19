import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function FindUrlRole() {
  const [url, setUrl] = useState();
  const pathname = usePathname();
  useEffect(() => {
    setUrl(pathname.split("/").find((i) => i === "dashboard" || i === "admin"));
  }, [pathname]);

  return url;
}
export default FindUrlRole();
