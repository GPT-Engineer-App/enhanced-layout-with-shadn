import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My App</div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white">EyeDrawer</Button>
          <Button variant="ghost" className="text-white" onClick={() => navigate('/action-drawer')}>Action Drawer</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;