export function TeamNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/team/joe">Joe</NavLink>
        </li>
        <li>
          <NavLink to="/team/sally">Sally</NavLink>
        </li>
        <li>
          <NavLink to="..">Go up (relative to route)</NavLink>
        </li>
        <li>
          <NavLink to=".." relative="path">
            Go up (relative to path)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

/**
 * TeamNav component renders a navigation menu for team members.
 * It provides links to individual team member pages and options to navigate up one level in the route hierarchy.
 *
 * - The first two links navigate to specific team member routes ("/team/joe" and "/team/sally").
 * - The third link uses `to=".."` to navigate up one level relative to the current route.
 * - The fourth link uses `to=".."` with `relative="path"` to navigate up one level relative to the current URL path.
 *
 * @component
 *
 * @example
 * <TeamNav />
 *
 * ---
 * Route vs Path explanation:
 * - `route` refers to the logical structure of your routes as defined in your router configuration.
 * - `path` refers to the actual URL segments in the browser's address bar.
 *
 * Usage of "..":
 * - `to=".."` navigates up one level. By default, it is relative to the route hierarchy.
 * - `to=".."` with `relative="path"` navigates up one segment in the URL path, regardless of the route structure.
 *
 * Example:
 *   - If your current route is `/team/joe`:
 *     - `<Link to="..">` goes to `/team`
 *     - `<Link to=".." relative="path">` also goes to `/team`
 *   - If your route structure is nested differently than your URL path, these may behave differently.
 */
