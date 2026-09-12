import { Outlet, useNavigation } from "react-router-dom";
export function RootLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts"></Link>
          </li>
          <li>
            <Link to="/users"></Link>
          </li>
          <li>
            <Link to="/todos"></Link>
          </li>
        </ul>
      </nav>
      <ScrollRestorearion />
      {isLoading && <div className="loading-spinner"></div>}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
