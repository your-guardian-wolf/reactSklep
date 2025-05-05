import LoginForm from "../components/forms/LoginForm";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  const fromRegister = location?.state?.fromRegister;
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    if (!loading && user) {
      navigate("/products", { state: { fromLogin: true } });
    }
  }, [user, loading]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <LoginForm fromRegister={fromRegister} />
      <div>
        <p>Nie masz konta?</p>
        <Link to="/register">Zarejestruj się</Link>
      </div>
    </>
  );
};

export default LoginPage;