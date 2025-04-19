import { Code, Terminal } from "lucide-react";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 relative flex items-center justify-center bg-gradient-to-br from-teal-600 to-teal-800 rounded-md overflow-hidden shadow-lg">
        <div className="absolute opacity-20 top-0 left-0 right-0 h-1/2 bg-white rounded-t-md"></div>
        <Code className="text-teal-100 absolute opacity-20 w-6 h-6" />
        <Terminal className="text-teal-100 w-5 h-5" strokeWidth={2.5} />
      </div>
      <div className="ml-3 flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-transparent tracking-wide">
          MLS
        </span>
      </div>
    </div>
  );
};

export default NavLogo;
