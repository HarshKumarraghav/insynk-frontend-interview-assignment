import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Header = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <div className="md:px-10 px-2.5">
        <div className="flex h-14 items-center justify-between border-b ">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Insynkexpns.</span>
          </Link>
          <div className="flex items-center justify-center gap-4">
            <Button>Add Expense</Button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;