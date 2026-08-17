import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import TechBackground from "@/components/features/background/TechBackground";

/**
 * Layout — the standard shell every page renders inside.
 * Pages never render Header/Footer/background themselves;
 * they just render their own Section components via <Outlet />.
 *
 * Also handles scroll behavior on route/hash change: jumps to a
 * section if the URL has a hash (e.g. coming from /about back to
 * /#projects), otherwise scrolls to top on a fresh page load.
 */
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // wait a tick so the target page's sections have mounted
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.pathname, location.hash]);

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