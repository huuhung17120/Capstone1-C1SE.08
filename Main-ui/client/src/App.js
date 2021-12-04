import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { CartProvider } from "./context/Cart";
import store from "./redux/store";
import userSlice from "./redux/user";

function App() {
  useEffect(() => {
    const userInfoInLocal = JSON.parse(localStorage.getItem("userInfo"));
    store.dispatch(userSlice.actions.setUserInfo(userInfoInLocal));
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </CartProvider>
  );
}

export default App;
