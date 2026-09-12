import styles from "./styles.css`";
import DatePicker from "./DatePicker.jsx";

export default function App() {
  const [value, setValue] = useState(new Date());
  return <DatePicker value={value} onChange={setValue} />;
}
