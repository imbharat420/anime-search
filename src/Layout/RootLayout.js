import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <main className="bg-gray bg-slate-50">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  );
};
export default RootLayout;
