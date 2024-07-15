import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="w-full flex border-2 border-black py-5 px-4 justify-between">
            <div>
                LOGO
            </div>
            <div className="flex justify-evenly border-2 border-black">
                <NavLink
                to="/"
                className={({isActive})=>`flex px-5 mx-2 ${isActive?"text-red-700" : "text-gray-700"}`
                }
                >
                    Home
                </NavLink>
                <NavLink
                to="/about"
                className={({isActive})=>`flex px-5 mx-2 ${isActive?"text-red-700" : "text-gray-700"}`
            }>
                    About
                </NavLink>
                <NavLink
                to="/contact"
                className={({isActive})=>`flex px-5 mx-2 ${isActive?"text-red-700" : "text-gray-700"}`}>
                    Contact
                </NavLink>
            </div>
            <div>
                LOGIN
            </div>
        </div>
    )
}
export default Header;