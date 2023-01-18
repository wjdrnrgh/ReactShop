import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { data } from "./store/data";
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
  const apiUrl =
    "https://raw.githubusercontent.com/wjdrnrgh/ReactShop/main/src/data";
  const [newItem] = useState(data[Math.floor(Math.random() * data.length)]);

  const response = async () => {
    const json = await axios.get(`${apiUrl}${counter}.json`).then((res) => {
      return res.data;
    });
    setProduct(json);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/"
            element={
              <Home
                product={product}
                setProduct={setProduct}
                counter={counter}
                setCounter={setCounter}
                newItem={newItem}
                apiUrl={apiUrl}
              />
            }
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/detail/:id"
            element={<Detail product={data} />}
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/favorite"
            element={<Favorite />}
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="/cart"
            element={<Cart />}
          ></Route>
          <Route
            basename={process.env.PUBLIC_URL}
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  fontSize: "2rem",
                }}
              >
                Page Not Found.
              </div>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
