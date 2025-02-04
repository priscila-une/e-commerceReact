import { CircleUserRound, ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

export default function Header() {
  const [showModal, setShowModal ] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggle = () => {
    setShowModal(!showModal);
  }

    return (
      <>
       <header className="flex justify-between p-5 bg-slate-900 text-gray-100">
          <Link to="/home">
            <h1>LOJINHA</h1>
          </Link>

          <form action="" className="flex items-center gap-1 w-80">
              <input type="text" className="w-full"/>
              <Search />
          </form>

          <div className="flex gap-2">
              <CircleUserRound />
              <div className="flex">
              <ShoppingCart className="cursor-pointer"  onClick={() => setShowModal(!open)}/>
               <div className=" bg-red-400 rounded-lg w-4 h-4 text-xs flex justify-center text-center items-center"> {cartItems.length}</div>

              </div>
          </div>
          
          <Modal showModal={showModal} toggle={toggle} >

            <p>dfahsjdfhausdhf </p>
          </Modal >
        
        </header>
      </>
     
    )
}