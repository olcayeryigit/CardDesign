// src/index.js veya src/App.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Products from "./components/products/products";

// Kütüphaneye ikonu ekliyoruz
library.add(fas);

function App() {
  return (
    <div>
      <Products/>
    </div>
  );
}

export default App;
