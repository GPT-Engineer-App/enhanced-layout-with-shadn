import React from "react";
import { Button } from "./ui/button.jsx";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My App</div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white">EyeDrawer</Button>
          <Button variant="ghost" className="text-white">Action Drawer</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;