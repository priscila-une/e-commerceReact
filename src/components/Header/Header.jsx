import { CircleUserRound, ShoppingCart, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { CartContext } from "../../context/cart";
import { useContext } from "react";

export default function Header() {
  const [ showModal, setShowModal ] = useState(false);
  const { cartItems, addToCart, removeToCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const toggle = () => {
    setShowModal(!showModal);
  }

    return (
      <>
       <header className="flex justify-between p-5 bg-slate-900 text-gray-100">
          <Link to="/">
            <h1>LOJINHA</h1>
          </Link>

          <form action="" className="flex items-center gap-1 w-80">
              <input type="text" className="w-full"/>
              <Search />
          </form>

          <div className="flex gap-2">
              <CircleUserRound />
              <div className="flex">
              <ShoppingCart className="cursor-pointer"  onClick={() => setShowModal(true)}/>
               <div className=" bg-red-400 rounded-lg w-4 h-4 text-xs flex justify-center text-center items-center"> {cartItems.length}</div>

              </div>
          </div>
          
          <Modal showModal={showModal} toggle={toggle} >
            {/* <CartItems /> */}
            <div className="text-slate-900">
              <h3 className="font-bold">Meu carrinho ({cartItems.length})</h3>
              <div className="flex flex-col gap-8 p-4 items-center">
                {cartItems && cartItems.map((item) => (
                  <div className="flex justify-between items-center gap-4" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} className="w-12"/>
                    <p className="font-bold">{item.title}</p>
                    <p className="font-semibold">{item.price}</p>

                    <div className="flex items-center justify-center gap-2">
                      <button className="border border-slate-900 w-4 items-center rounded-sm"
                        onClick={()=> addToCart(item)} 
                      > + </button>
                      <span>{item.quantity}</span>
                      <button className="border border-slate-900 w-4 items-center rounded-sm"
                        onClick={()=> removeToCart(item)}> - </button>
                    </div>
                    
                  </div>
                ))}
                {cartItems.length > 0 ? (
                  <>
                   <h3 className="font-bold">Total ${getCartTotal()} </h3>
                   <div className="flex justify-between gap-4">
                    <button className="border bg-red-300 p-2 rounded-sm font-semibold"
                      onClick={toggle}>Fechar</button>
                    <button className="border bg-green-300 p-2 rounded-sm font-semibold"
                      onClick={() => {
                        setShowModal(false);
                        navigate("/cart")
                      }}
                    >finalizar pedido</button>
                   </div>
                   
                   </>
                ) : (
                  <h3 className="font-bold"> Carrinho de compras vazio. </h3>
                )}
              </div>
            </div>
          </Modal >
        
        </header>
      </>
     
    )
}