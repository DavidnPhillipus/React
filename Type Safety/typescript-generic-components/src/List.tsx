/**
 * A generic list component for rendering an array of items in a type-safe way.
 *
 * @template T - The type of the items in the list.
 *
 * @param items - An array of items of type `T` to be rendered in the list.
 * @param getKey - A function that receives an item and returns a unique key (string or number) for React's reconciliation.
 * @param renderItem - A function that receives an item and returns a React node to render for that item.
 *
 * ## Concepts:
 * - **Generic Components:** This component uses a generic type parameter `<T>`, allowing it to work with any data type. This provides strong type safety and reusability.
 * - **Type Safety:** By using generics, TypeScript ensures that the `items`, `getKey`, and `renderItem` props all operate on the same type, preventing type mismatches.
 * - **Reusable UI Patterns:** The component abstracts the logic for rendering lists, so you can use it for any array of data, just by providing the appropriate functions.
 */
type ListProps<T> = {
  items: T[];
  getKey: (item: T) => string | number;
  renderItem: (item: T) => React.ReactNode;
};

export function List<T>({ items, getKey, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
