import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  const path = usePathname();
  return (
    <>
      <Link
        className={`p-4 ${path === href ? "text-green-600" : ""}`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
