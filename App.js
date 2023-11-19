import "./App.css";
import ActionButton from "./components/ActionButton";
import ButtonGroup from "./components/ButtonGroup";
import CurveButton from "./components/CurveButton";
import Modal from "./components/Modal";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";
import ValuedIcon from "./components/ValuedIcon";
import AllProducts from "./layout/AllProducts";
import Cart from "./layout/Cart";
import CartTest from "./layout/CartTest";
import Category from "./layout/Category";
import Checkout from "./layout/Checkout";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Login from "./layout/Login";
import Navbar from "./layout/Navbar";
import ProductOverview from "./layout/ProductOverview";
import Products from "./layout/Products";

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <div style={{marginTop:"80px"}}></div> */}
        <Hero />
        <AllProducts />
        <Category />
        <ProductOverview />
        <Products />
        <div style={{ marginTop: "60px" }}>
          <CurveButton name="LOAD MORE" />
          <ProductDetails />
          <Sidebar />
          <Cart />
          <Checkout />
          <Login />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
