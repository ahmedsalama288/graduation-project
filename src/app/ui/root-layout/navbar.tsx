"use client";

import Logo from "./logo";
import MobileNavbar from "./nav-bar/mobile-navbar/mobile-navbar";
import DesktopNavbar from "./nav-bar/desktop-navbar/desktop-navbar";

export default function Navbar() {
  return (
    <nav
      className="
        z-[100000] mx-auto w-full px-8
        flex items-center gap-2
        justify-between xl:justify-center
        flex-row-reverse xl:flex-row
        max-h-[70px]
      "
    >
      <Logo />
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
}
