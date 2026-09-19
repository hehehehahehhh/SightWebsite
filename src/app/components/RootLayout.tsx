import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";

export default function RootLayout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname}>
        <Outlet />
      </div>
    </AnimatePresence>
  );
}
