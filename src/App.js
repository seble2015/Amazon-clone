import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useStateValue } from "./components/StateProvider";
import { useEffect } from "react";
import { auth } from "./components/Firebase";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/Orders";
// import NavBar from "./components/NavBar";
const promise = loadStripe(
  "pk_test_51Hf9EsIjq2KMm1vIrtyaI9OtGTvf45UJtZJgN3TPTmOaTQ5IAqHwTs4YIhZCQNNphj6NkIAFZN75pLloPCwMrsZz00SVhcXIq6"
);

// "pk_test_51N0pYCGAYxubv0VxuWX7Epn7L4qTKOkO8tCflLOepp44pWcYjwKzexuP3YFtwHFJMsencYgDBuIGfwz490JR2LVt00tRCejYuQ"

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/orders"
            element={
              <>
                <Header />
                {/* <NavBar /> */}
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/Payment"
            element={<Elements stripe={promise}>{<Payment />}</Elements>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// https://clone-10387.web.app
