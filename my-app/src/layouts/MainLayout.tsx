// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav/BottomNav";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
