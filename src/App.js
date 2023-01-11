import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./store/data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Favorite from "./routes/Favorite";
import store from "./store/store";

function App() {
  const [product, setProduct] = useState(data);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home product={product} newItem={product[0]} />}
          ></Route>
          <Route
            path="/detail/:id"
            element={<Detail product={product} />}
          ></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<div>ADMIN</div>}></Route>
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
