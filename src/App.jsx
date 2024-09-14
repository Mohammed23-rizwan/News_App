import { useState } from "react";
import Navbar from "./Components/navbar";
import Newsmain from "./Components/newsmain";

const App = () => {
  const [category, setcategory] = useState("general");
  return (
    <div>
      <Navbar setcategory={setcategory} />
      <Newsmain category={category} />
    </div>
  );
};

export default App;
