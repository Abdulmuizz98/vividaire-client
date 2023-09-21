import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./components/pages/Homepage";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/ourstory" element={<OurStory />} />
        <Route path="/physicalclasses" element={<PhysicalClasses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/trading-sessions" element={<TradingSessions />} />
        <Route path="/types" element={<Types />} />
        <Route path="/trend" element={<Trend />} />
        <Route path="/growing-small-account" element={<GrowingAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="description/:id" element={<CartDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/newsignals" element={<NewSignals />} /> */}
      </Routes>
    </>
  );
};

export default App;
