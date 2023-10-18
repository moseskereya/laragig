import { Navigate, Outlet } from "react-router-dom"
import { userStateContext } from "../../context/contextProvider";

const Guest = () => {
  const {token} = userStateContext();
  if (token) {
    return <Navigate to="/"/>
  }
  return (
      <Outlet/>
  )
}

export default Guest