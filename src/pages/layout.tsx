import { Outlet } from "react-router";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import TechBackground from "@/components/features/background/TechBackground";


export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <TechBackground />
      <Header />
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}