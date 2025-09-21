import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}