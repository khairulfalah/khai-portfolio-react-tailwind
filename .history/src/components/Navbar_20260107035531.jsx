import { cn } from "@/lib/utils";


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#abaout"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    return <nav className="{cn()}"></nav>;
}