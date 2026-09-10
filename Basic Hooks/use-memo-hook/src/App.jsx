import { useState, useMemo } from "react";

const LIST = Array(1000000)
  .fill()
  .map((_, i) => i + 1);

function App() {
  const [query, setQuery] = useState("");
  cons[(isDarkMode, setIsDarkMode)] = useState(false);

  /**
   * Memoized computation of a filtered list based on the current query.
   *
   * This uses the `useMemo` hook to optimize performance by memoizing the result
   * of the filtering operation. The filtering logic is only re-executed when the
   * `query` dependency changes, avoiding unnecessary recalculations on every render.
   *
   * @constant {Array} filteredList - The filtered list of items that match the query.
   * @returns {Array} A list of items from `LIST` that include the `query` string.
   */
  const filteredList = useMemo(() => {
    console.log("Filtering list...");
    return LIST.filter((item) => item.toString().includes(query));
  }, [query]);
  console.log(filteredList.length);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "white" : "#333",
      }}
    >
      <label>
        Query:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <br />
      <label>
        Dark Mode:
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={(e) => setIsDarkMode(e.target.checked)}
        />
      </label>
    </div>
  );
}

export default App;
