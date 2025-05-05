import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-medium">To jest nagłówek strony</div>
        <div className="flex gap-4">
          {user ? (
            <>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <NavLink to="/products" className="hover:underline">
                Produkty
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className="hover:underline">
                Logowanie
              </NavLink>
              <NavLink to="/register" className="hover:underline">
                Rejestracja
              </NavLink>
            </>
          )}
        </div>
      </div>

      <Outlet />

      <footer className="text-center text-gray-500 text-sm p-4">
        This is the footer
      </footer>
    </>
  );
};

export default MainLayout;