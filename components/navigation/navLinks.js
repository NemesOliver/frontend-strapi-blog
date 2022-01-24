import { SiHomebridge } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
/**
 * List of navigation links
 */

export const navLinks = [
  { name: "Home", to: "/", icon: <SiHomebridge size={20} color="#15803D" /> },
  { name: "About", to: "/about", icon: <FcAbout size={20} /> },
  { name: "Contact", to: "/contact", icon: <FcContacts size={20} /> },
];
