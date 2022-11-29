import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 3000);
  // }, []);
  // return (
  //   <div className="not-found">
  //     <p>Invalid URL</p>
  //   </div>
  // );
  return <Navigate to={"/"}></Navigate>;
}

export default NotFound;
