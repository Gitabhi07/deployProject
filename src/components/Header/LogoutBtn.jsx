import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";
import authService from "../../appwrite/Auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout()).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <button
      onClick={logOutHandler}
      className="inline-block px-6 py-2 duration-200
    hover:bg-blue-100 rounded-full"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
