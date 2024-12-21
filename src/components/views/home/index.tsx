import ThemeMode from "@/components/constants/theme";
import { FC } from "react";
import { NavLink } from "react-router-dom";




const HomePageComponent: FC = () => {



  return (
    <div className="grid place-content-center h-screen">
      <ThemeMode className="top-4 right-4"/>
      <h1 className="bg-yellow-600">Navbar</h1>
      <NavLink to='/auth/sign-up'>Sign Up</NavLink>
      <NavLink to='/auth/sign-in'>Sign In</NavLink>
    </div>
  );
};

export default HomePageComponent;
