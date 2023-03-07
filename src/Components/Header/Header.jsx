import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Basket from "./Basket";
import HeaderNavigate from "./HeaderNavigate";
import HeaderTab from "./HeaderTab";

function Header() {
  const [show, setShow] = useState(false);
  let count = useSelector((state) => state.productSlice.count);
  let user = localStorage.getItem("user") == null ? false : true;

  return (
    <>
      <div className="relative bg-white b-none">
        <HeaderNavigate user={user} />
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-around">
                <NavLink to={"/"}>
                  <img
                    className="h-8 w-auto"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAACKCAMAAACTviYmAAAA7VBMVEX///9eZGL5ewCvtrTHLgDiVADd3t7Nz878wYf8ewC/wsFbZGT2wIt5fnx1eniNkZCyubeqrqydoJ/8unn8tXGipqS+vbpnbWv3+PjGyMfprJrdf2Pv8PB/hIJuc3Hh4uHxrYWIjYv6hhbwp3z7oUr/9u6UmJbV1tb+7t/6ljX7rF7+59D93r/6jiX66+fOSSHz08n9zZ791Kv6ky77qVn+48j/9Or7nED30bv76d7kXxHrhkvmbSXzt5Ppfj753c32yKzvnmznppPVXTrfiG/QTifjl4DLOxDaXDztvK3MxMHxyr7dgmbdak3fe2eKSo6rAAAHXklEQVR4nO2ae3/TNhSGZQw2OE1iG9IoRbZroDHXchkwLhsM2OhYx77/x5lvOjp2lEYJCq790/NP2yS2zmsdnfNKKSEGg8FgMBgMBoPBYDAYDAaD4Sfz/Po6bgGPuw5SD8+vbObO/a6j1MNNBa33ug5SE78qaD3oOkg93L+jkMKPuo5SDy8UpvVB10Fq4paC1ptdB6mHkwcKWgfScR7d2Sz1yUnXUepBpbs+7DpITTxU0Pqi6yD1cPLLZqlDMU0qy3UopklluQ7ENJGXCloHYppOnmyW+mAgHeeVwrQOxDSRAwWtAzFN5N5mqUMxTa8VlutQTNNjhRQeiGki1zdLHYppUlmuQzFNKscvQzFNKst1IKZJ5bR0KCdNKqelQzFNKst1KKZJ4bR0KKZJ5bR0KKaJKJyWDsU0KRy/SEzTm+OKu687CHlnFI5fVkzT23fXKt7TLkLeGYXT0rZpel8r/a1nJUvhtLT19dzvtdJrbzoKeWcUlmvDNEH6HncU8A+gsFyxafrAF2pnAf8ACstVmKbjWum7tx1GvDMKyxVM00e+UP/oMuLdeXXlBoAFildvvKw+SXn6fuoyXuYsfNv3MrbDtY8PONdvIg4QVQv9VCv9IBvf9Txv4Tq7BLAFdDGNrYp5ZOPBivFrKAlmNYwkgV0SLPIPOYsatxEn8w4Br3jn5PhuyfER8Pm0GN4No7kFAcyy/XkLN7IwsQ1DOeLVkBD+OCyHuPzXiLDlSBDATZ0penmEb0ro06ucL/kq9sZWi2ixJ6VBeyQr5bOTitHzSCcSqVPWfE7B2puOMz7gn6D07JSw6conc5Z7mdhQMtK40rqAF+YJWTOr7UhLQXQpi9+rBnwGSq9+I3RlSivSPWi1pSMVk0goaLMOi4+mk0nclrrCsrgwlb9Xaf0OSm/LH3RJcEHMu4FWYxyJ4lCOJJJwWn6WUjrdKHXOLoi/mPJvoPSvE5KgN+M0FeOX99FLCrcuiiSz+WB5xiYwcMyH9S2Z1Ek0QX9lxFv7HPIbnYqadN5Y0n6eSAw9JE+z0gyU1kUDNMyIWIVu/WmeAg2pUd4bqCtyfYHyvlDX+CtENelrfkcxRlQNIV5YapYKTzFovxKLBTer34ISgqXWMw4zOado9U+8hDIHTdWIgdQvxWVp+z7ZlKN5sTKeeWWFrcbiYztczpgXQwgZS7XrO/Fsn4meZEV14ruoBpzyPvO2KdWa2DtZNVWQE+BQHpbNf3P4W7Jmw9+FGc9EoROVRUz0mPxdST1qPr1qZqPwcF96fXikAcClLkllDnz4tMxCgJzaScwp3BMSH7etEfvK+0yB6NxCb2onRD+z1ZGAiJQ+IBWflkmNeXan/CoxUZm4FCzFKCubzdPT+hng2i2Yoks1sbYB5kzKThCjfJJJHbfEpFxzszNCBo/+KczS2Tl/A0pDi5lutyT1bzXxTlJ52rcuhQLdlkrcRjMS6O41m6XWRklZaiqk4lmFBVxJLYwSh4XIIyFEjdACrNV5Om0T1uktXIuK1Ag9PkcMBCtl5J6XZelfFAXzU4naWG8phiUUy5ZGWj0FqIcqUmPk9dC8wP5llHzmmxoMc4PppKVXrzMU7VFS33mHgBqsItVKRKEB74HGmfCNDa/BaLxcL97ShVqlMqgJsO9P+AGLiJnPjpLUgIrJma0MY4XsTOzgxGDFeU4pF/l/zYUJFhbYJagqjljIyRZSJ7hZL4vlSheieY6cI7QvF9UKmjATD0rvrKLMqmaAQpxj5GQiqi7VWjALMU4j3E1S8ozPapHCqKvWY6Atk+7NuTgZimzXtcWfHt5Q2VtIDSXnSoCDT5a+43MOK3IT5gSoNOl2TOvcSvGQxRHB3FGXOiO0ebKGKFY92psfNZ3pvFGC9Z8uyaegWp4ikDK9VKWKvWGLapGI1Xp2ytZ4JUv/pBK5D55X5w4okGAbqSSRngPygvwFpXAmt0r7OEYjsnmd8Cd6KF5ztpFK2KrlnIMlOL+KUjiTz+telK6c7s8DsGTolDb3abKtecw/CjWs7hFeS8ISmZTbQuuzxtEZJ3LJvnBDPmNx6mPvmYWcZUZc/t1M8Z1NzSHcwq4B5+tOxZFjKFYeTZLT/25zisOIZNbI93i5P6FVAFnx/dLuX4QlTlJS/yh/zbvXLJwFntMopgvfaV9MEy8Ip1E6XQa7fRn4M0l8gE+v7csPTqjnX3Y1F0GFQMG6dsFsr1//stRgIVG6fhOWrX0Klx9HovSCLKXeXg4FfwZMlr4rtQdfYPs9TWFZ+l7cMJwN719WZOm7qfAsepnC0vTd1E6o38cU9rboM4LE3tf/duyPTKJURYV7YeG6jDBZn1HJzdx19Ms0UVn6qlWcpGemSZa+qn3E7ZVpkqWv8lz1yjTJ0neLbUuffL+7qnSrupr1puMkP7BQKxynH9Mq26T2JyO3Qpa+/WqVqsjSt0/dQx1Z+valyGyJZJPax82KArL07Y8h2AaZTernwcJGkizLnBbDTF+DwWAwGAwGg8FgMBgMBoNhAPwPANWeNMr8f4wAAAAASUVORK5CYII="
                    alt="ekinoks"
                  />
                </NavLink>
                <NavLink
                  to={"/checkout"}
                  className="basket w-1/5 h-2 flex items-center justify-center"
                >
                  <img
                    className="h-9"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSScOc9jICGGssMug0jWrOgeoFX6K78kLtw&usqp=CAU"
                    alt="basket"
                  />
                  {count > 0 && (
                    <div className="w-4">
                      <strong className="bg-gray-600 rounded-full w-5 px-2 text-white">
                        {count}
                      </strong>
                    </div>
                  )}
                </NavLink>
                <div className="-mr-2">
                  {show && (
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        onClick={() => setShow(!show)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                  {!show && (
                    <button
                      type="button"
                      className="bg-black-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      aria-expanded="false"
                    >
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 100 80"
                        width="40"
                        height="40"
                        onClick={() => setShow(!show)}
                      >
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-6"></div>
            </div>
            {show === true && <HeaderTab />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
