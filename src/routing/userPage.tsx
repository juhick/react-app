import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const userPage = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <UserList />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default userPage;
