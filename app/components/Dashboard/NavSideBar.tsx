import React, { useContext } from "react";
interface IProps{
  name:string;
  Icon:any;
  fn?:any;
}
import { NavigationContext, NavigationContextType } from "./Navigation";

const NavSideBar = ({ name='', Icon=<></>, fn={}}:IProps) => {

  const { setMenu }:NavigationContextType = useContext(NavigationContext);

  const handleMenu = (param:string) => {
    setMenu(param)
    console.log(param)
  } 

  return (  
    <li className="relative px-6 py-3">
      <button 
        type="button"
        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-950 dark:hover:text-gray-400"
        onClick={()=> handleMenu(`${name}`)}
      >
        {Icon}
        <span className="ml-4">{name}</span>
      </button>
    </li>
  );
};

export default NavSideBar;
