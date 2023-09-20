import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Header />
        <main className="main-body">
          {/* <Route path="/" element={<Home />} />
  <Route path="/ourstory" element={<OurStory />} />
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
        </main>
        <Footer />
      </Routes>
    </>
  );
}

export default App;
