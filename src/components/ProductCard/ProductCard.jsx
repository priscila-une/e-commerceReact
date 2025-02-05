import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cart';

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);


  async function getProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()

        setProducts(data.products)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-col justify-center pt-9'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
            {products.length > 0 ? (
                <>
                 {
                    products.map(product => (
                      <div key={product.id} className='bg-slate-200 shadow-md rounded-lg px-10 py-10 flex flex-col items-center'>
                        <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
                        <div className='flex flex-col items-center'>
                          <h1 className='text-lg font-bold text-slate-800'>{product.title}</h1>
                          <p className='mt-2 text-gray-600'>${product.price}</p>
                        </div>
                        <div className='mt-6 flex justify-between items-center'>
                          {product.stock > 0 ? (
                             <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                             onClick={() => addToCart(product)}
                           >Adiconar no Carrinho</button>  
                          ) : (
                            <div className='font-bold text-red-700'>Fora de Estoque</div>
                          )}
                        </div>
                      </div>
                    ))
                  }
                </>
               
            ) : (
                <div className='flex text-center'>
                    Ops.. estamos sem produto... 
                </div>
            )}
      </div>

      
    </div>
  )
}
