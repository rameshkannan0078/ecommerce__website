import { Link } from "react-router-dom";

const NavbarOptions = [
  {
    label: "Home",
    value: "HOME",
    path: "",
  },
  {
    label: "About Us",
    value: "ABOUT_US",
    path: "about-us",
  },
  {
    label: "Contact Us",
    value: "CONTACT_US",
    path: "contact-us",
  },
];

export default function CnNavbar({ children }) {
  return (
    <div>
      <div className="w-full bg-black h-18 flex flex-row p-4 sticky  space-x-4 justify-end">
        {NavbarOptions.map((d) => {
          return (
            <Link key={d.value} to={`/${d.path}`} className="text-white">
              {d.label}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
