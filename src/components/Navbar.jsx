import React from "react";
import { Button } from "./ui/button.jsx";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer.jsx";
import Layout from "./Layout.jsx"; // Import the new Layout component

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My App</div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white">EyeDrawer</Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="text-white">Action Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerClose asChild>
                <Button variant="destructive" className="mb-4">Close</Button>
              </DrawerClose>
              <Layout /> {/* Render the Layout component inside the Drawer */}
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;