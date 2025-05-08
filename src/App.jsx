
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/Home";
import LoginPage from "./routes/Login";
import RegisterPage from "./routes/Register";
import ProductDetailsPage from "./routes/ProductDetails";
import MainLayout from "./layouts/mainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./routes/Cart";
import {lazy, Suspense } from 'react';

function App() {

  const ProductsPage = lazy(() => import('./routes/Products'));
  return (

    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/products"
          element={
           
            <ProtectedRoute>
               <Suspense fallback={<div>Ładowanie...</div>}><ProductsPage />
               </Suspense></ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
