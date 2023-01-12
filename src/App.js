import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import Favorite from "./routes/Favorite";
import store from "./store/store";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);
  const [choseItem, setChoseItem] = useState([]);
  const apiUrl =
    "https://raw.githubusercontent.com/wjdrnrgh/ReactShop/main/src/data";

  const response = async () => {
    const json = await axios.get(`${apiUrl}${counter}.json`).then((res) => {
      return res.data;
    });
    setProduct(json);
    setChoseItem(json[Math.floor(Math.random() * json.length)]);
  };
  useEffect(() => {
    response();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                product={product}
                setProduct={setProduct}
                counter={counter}
                setCounter={setCounter}
                newItem={choseItem}
                apiUrl={apiUrl}
              />
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={<Detail product={product} />}
          ></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          {/* <Route path="/admin" element={<div>ADMIN</div>}></Route> */}
          <Route path="*" element={<div>Not Found</div>}></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
