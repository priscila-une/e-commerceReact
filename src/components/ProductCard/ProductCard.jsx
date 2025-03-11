import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../context/cart';
import Pagination from '../Pagination/Pagination';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading ] = useState(false);
  const { addToCart } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const nPages = Math.ceil(products.length / productsPerPage);


  async function getProducts() {
    try {
        setLoading(true)
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()

        setProducts(data.products)
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
  }

  async function getProductByCategory(category){
    try {
      setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/category/${category}`)
        const data = await response.json()

        setProducts(data.products);
        setLoading(false);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='flex flex-col justify-center pt-9'>
      <div className="flex gap-2 flex-wrap mb-5 pl-8">
        <div className="rounded-full bg-orange-800 items-center flex p-2 min-w-max cursor-pointer" onClick={() => getProducts()}>
            Todos os produtos           
        </div>
        <div className="rounded-full bg-orange-800 items-center flex p-2 min-w-max cursor-pointer" onClick={() => getProductByCategory("groceries")}>
            Alimentos            
        </div>
        <div className="rounded-full bg-orange-800 items-center flex p-2 min-w-max cursor-pointer" onClick={() => getProductByCategory("beauty")}>
            Beleza            
        </div>
        <div className="rounded-full bg-orange-800 items-center flex p-2 min-w-max cursor-pointer" onClick={() => getProductByCategory("furniture")}>
            Móveis            
        </div>
        <div className="rounded-full bg-orange-800 items-center flex p-2 min-w-max cursor-pointer" onClick={() => getProductByCategory("fragrances")}>
            Perfumes            
        </div>
      </div>
       
      <div >
            {loading ? (
              <div className='flex gap-2'>
                <Skeleton width={300} height={200} highlightColor='#747373' baseColor='#3b3b3b'/>
              </div>
               
            ) : (
              <>
                 {
                    products.length > 0 ? (
                      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
                        { currentProducts.map(product => (
                          <div key={product.id} className='bg-slate-200 shadow-md rounded-lg px-10 py-10 flex flex-col items-center'>
                            <img src={loading ? <Skeleton highlightColor='#575555' baseColor='#3b3b3b' /> : product.thumbnail } alt={product.title} className='rounded-md h-48' />
                           
                            <div className='flex flex-col items-center'>
                              <h1 className='text-lg font-bold text-slate-800'>{product.title}</h1>
                             
                              <p className='mt-2 text-gray-600'>${product.price}</p>
                            </div>
                            
                            <div className='mt-6 flex justify-between items-center'>
                              {product.stock > 0 ? (
                                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                                onClick={() => addToCart(product)}
                              >Adicionar no Carrinho</button>  
                              ) : (
                                <div className='font-bold text-red-700'>Fora de Estoque</div>
                              )}
                            </div>
                        </div>
                      ))}
                      </div>
                  ) : (
                    <div className='flex justify-center text-center'>
                      Ops.. estamos sem produto dessa categoria
                    </div>

                  )
                    
                  }  
                  
                </> 
            )}
           
      </div> 
            {products.length > 0 && (
                <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
    </div>
  )
}
