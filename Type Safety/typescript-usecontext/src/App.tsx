type User = {
  id: string;
  name: string;
  age: number;
};

type ContextType = {
  users: User[];
  addUser: (user: { name: string; age: number }) => void;
};

export const Context = createContext<ContextType | null>(null);

export function useUsers() {
  const usersContext = useContext(Context);
  if (usersContext == null) {
    throw new Error("useUsers must be used within a Context.Provider");
  }
  return usersContext;
}

export default function App() {
  const [users, setUsers] = useState<User[]>({});

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  function addUser({ name, age }: { name: string; age: number }) {
    setUsers((prevUsers) => {
      return [...prevUsers, { id: crypto.randomUUID(), name, age }];
    });
  }

  return (
    <Context.Provider value={({ users }, addUser)}>
      <Child />
    </Context.Provider>
  );
}

function getUsers() {
  return Promise.resolve([
    { id: crypto.randomUUID(), name: "John" },
    { id: crypto.randomUUID(), name: "Jane" },
  ]);
}
