import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <h2>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </h2>
    </div>
  );
};

export default Navbar;
