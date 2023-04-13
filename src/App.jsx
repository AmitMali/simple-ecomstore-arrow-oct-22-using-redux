import Counter from "./features/counter/Counter";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainLayout/MainLayout";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1> Welcome </h1>}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
