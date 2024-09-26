import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer className="flex w-full bg-black flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography className="font-semibold text-2xl text-white" >
      <a href="about">
      Student Information
      </a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          ><a href="/about">
            About Us
            </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
          <a href="/vertical">
            Vertical
            </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
          <a href="blogs">
            Blogs
            </a>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
          >
          <a href="/contactus">
            Contact Us
            </a>
          </Typography>
        </li>
      </ul>
    </footer>
  );
}