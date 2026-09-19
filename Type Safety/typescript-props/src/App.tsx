import { Child } from "./Child";
import { Button } from "./Button";

export default function App() {
  // return <Child name={"Kyle"} children={<span>Child</span>} />;
  return (
    <Button outline disabled>
      Hi I am a button
    </Button>
  );
}
