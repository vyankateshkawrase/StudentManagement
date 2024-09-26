import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-48 mr-10">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-light text-white text-lg"
      >
        <a href="/about" className="flex items-center hover:text-blue-500 transition-colors">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-light text-white text-lg"
      >
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
          Verticals
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-light text-white text-lg"
      >
        <a href="/blogs" className="flex items-center hover:text-blue-500 transition-colors">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-light text-white text-lg"
      >
        <a href="/contactus" className="flex items-center hover:text-blue-500 transition-colors">
          Contact Us
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-3xl px-6 py-3 bg-black">
      <div className="flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-2xl"
        >
        <a href="/about">
          Student Information
          </a>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}