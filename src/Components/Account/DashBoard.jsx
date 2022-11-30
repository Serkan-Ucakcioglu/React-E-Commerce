import { useDispatch } from "react-redux";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { logOut } from "../../Features/userAuth";

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
            <li>
              <NavLink
                to={"/"}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Home Page</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/account/add-product"}
                className="flex items-center justify-start p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <svg
                  height="25px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="25px"
                  fill="white"
                >
                  <path d="M256,512C114.625,512,0,397.391,0,256C0,114.609,114.625,0,256,0c141.391,0,256,114.609,256,256  C512,397.391,397.391,512,256,512z M256,64C149.969,64,64,149.969,64,256s85.969,192,192,192c106.047,0,192-85.969,192-192  S362.047,64,256,64z M288,384h-64v-96h-96v-64h96v-96h64v96h96v64h-96V384z" />
                </svg>
                <span className="flex ml-3 whitespace-nowrap">Add Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/account/edit-product"}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="text-white"
                  id="_24x24_On_Light_Edit"
                  data-name="24x24/On Light/Edit"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="text-white"
                    id="view-box"
                    width="24"
                    height="24"
                    fill="none"
                  />
                  <path
                    id="Shape"
                    className="text-white"
                    d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                    transform="translate(3.25 3.25)"
                    fill="white"
                  />
                </svg>

                <span className="flex ml-3 whitespace-nowrap">Edit</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/account/delete-product"}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
              >
                <div>🗑️</div>
                <span className="flex ml-3 whitespace-nowrap">Delete</span>
              </NavLink>
            </li>
            <li className="mt-4">
              <button
                type="button"
                onClick={out}
                className="text-white  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Log Out
              </button>
            </li>
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
