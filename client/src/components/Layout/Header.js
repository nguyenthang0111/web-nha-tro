import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth, auth } from '../../context/auth'

function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  }

  return (
    <header className="bg-blue-950">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/#" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </Link>
          <Link to="/" className="text-white text-xl pt-1 pl-3">
               PhongTroHN
          </Link>
        </div>

        <ul className="flex pt-1">
          <li className="nav-item">
            <NavLink to="/" className="text-base px-3 font-semibold leading-6 text-white hover:text-red-500">
              Trang chủ
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/" className="text-base px-3 font-semibold leading-6 text-white hover:text-red-500">
              Tìm người ở ghép
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/" className="text-base px-3 font-semibold leading-6 text-white hover:text-red-500">
              Coming Soon ...
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!auth?.user ? (
            <>
              <div className="nav-item">
                <NavLink to="/register" className="text-base px-3 font-semibold leading-6 text-white">
                  Register
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink to="/login" className="text-base px-3 font-semibold leading-6 text-white">
                  Login
                </NavLink>
              </div>
            </>
            ) : (
              <>
                <div className="flex">
                  <NavLink
                    className="text-base px-3 font-semibold leading-6 text-white"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{ border: "none" }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu flex">
                    <li>
                      <NavLink
                        to="/#"
                          className="text-base px-3 font-semibold leading-6 text-white"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="text-base px-3 font-semibold leading-6 text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
                )}
        </div>
      </nav>
  </header>
  )
}

export default Header
