import Cart from "./components/Cart";
import Store from "./components/Store";

import useAlan from "./hooks/useAlan";

function App() {
  useAlan();
  return (
    <section className="text-gray-700 body-font">
      <Store />
      <Cart />
    </section>
  );
}

export default App;
