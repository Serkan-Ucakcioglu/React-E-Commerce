import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { logOut } from "../../Features/userAuth";
import DashboardOperate from "./DashboardOperate";

function DashBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const out = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="flex">
      <aside className="w-64 h-screen sticky" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-slate-800 rounded dark:bg-gray-800">
          <ul className="space-y-2 h-screen flex flex-col">
            <DashboardOperate out={out} />
          </ul>
        </div>
      </aside>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default DashBoard;
