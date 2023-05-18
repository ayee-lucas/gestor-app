import React, { useContext } from "react";
interface IProps{
  name:string;
  Icon:any;
  menu:string
  handleMenu: any;
}

const NavSideBar = ({ name, Icon=<></>, menu, handleMenu }:IProps) => {

  


  return (  
    <li className="relative px-6 py-3">
      <button 
        type="button"
        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-950 dark:hover:text-gray-400"
        onClick={handleMenu(menu)}
      >
        {Icon}
        <span className="ml-4">{name}</span>
      </button>
    </li>
  );
};

export default NavSideBar;
