import PropTypes from "prop-types";
import { XCircle } from "lucide-react";

Modal.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func,
    children: PropTypes.node
}


export default function Modal({ showModal, toggle, children }){
   return (
    showModal && (
      <div className="fixed inset-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-60 ">
      <div  className="relative m-4 p-5 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm">
          <XCircle className="absolute top-1 right-1 text-black cursor-pointer" onClick={toggle}/>
            {children}
      </div>
      </div>
    )
    )
        
}


