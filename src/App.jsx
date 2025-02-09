import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  path="/"  element={<Home />}/>
            <Route path="/cart" element={<Cart />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
