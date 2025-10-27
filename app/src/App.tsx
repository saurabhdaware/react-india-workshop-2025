import { useState } from "react";
import { Button } from "@saurabhdaware/rids";

// create counter

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-row p-8 gap-8">
      <p className="">Count: {count}</p>
      <Button variant="default" onClick={() => setCount(count + 1)}>
        Count +
      </Button>
    </div>
  );
}

export default App;
