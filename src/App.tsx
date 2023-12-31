import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { useState } from "react";

import Home from "./routes/Home";
import Leaderboard from "./routes/Leaderboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Download from "./routes/Download";
import Setup from "./routes/Setup";
import Tools from "./routes/Tools";
import Community from "./routes/Community";
import Sidebar from "./components/Sidebar";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/download", element: <Download /> },
      { path: "/setup", element: <Setup /> },
      { path: "/tools", element: <Tools /> },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/community", element: <Community /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="bg-black bg-opacity-50">
      <div className="min-h-screen max-w-screen-xl mx-auto bg-rrc-blue-darkest font-robotocondensed shadow-lg shadow-black text-gray-200">
        <Sidebar
          sidebar={sidebar}
          onToggleSidebar={() => setSidebar(!sidebar)}
        />
        <Header onToggleSidebar={() => setSidebar(!sidebar)} />
        <main className="py-10 px-5 sm:px-10 overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
