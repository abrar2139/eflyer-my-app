import React from 'react'
import '../App.css'
import './products.css'
import img1 from '../images/img-1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img-5.png'
import img6 from '../images/img-6.png'
import img7 from '../images/img-7.png'
import img8 from '../images/img-8.png'
import img9 from '../images/img-9.png'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Products = () => {
  return (
   <>
        <div class="production">
         <div className="inner-production">
            <h1 className='heading-fashion'>Man &amp; Woman Fashion</h1>
            <div className="products">
               <div className="product-1 product">
                  <div className="inner-product">
                  <h1>Man T-shirt</h1>
                 <h4><span>Price</span> $ 30</h4>
                 <img src={img2} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-2 product">
                  <div className="inner-product">
                  <h1>Man T-shirt</h1>
                 <h4><span>Price</span> $ 30</h4>
                 <img src={img1} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-3 product">
                  <div className="inner-product">
                  <h1>Man T-shirt</h1>
                 <h4><span>Price</span> $ 30</h4>
                 <img src={img3} alt="scart" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
            </div>   
            <div className="icons-under-products">
               <div className="icon-left under-icons">
               <FaAngleLeft/>
               </div>
               <div className="icon-right under-icons">
               <FaAngleRight/>
               </div>
               </div>      
         </div>
        </div>
        <div class="production">
         <div className="inner-production">
            <h1 className='heading-fashion'>Electronic</h1>
            <div className="products">
               <div className="product-1 product">
                  <div className="inner-product">
                  <h1>Laptop</h1>
                 <h4><span>Start Price</span> $ 100</h4>
                 <img src={img4} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-2 product">
                  <div className="inner-product">
                  <h1>Mobile</h1>
                 <h4><span>Start Price</span> $ 100</h4>
                 <img src={img5} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-3 product">
                  <div className="inner-product">
                  <h1>Computers</h1>
                 <h4><span>Start Price</span> $ 100</h4>
                 <img src={img6} alt="scart" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
            </div>   
            <div className="icons-under-products">
               <div className="icon-left under-icons">
               <FaAngleLeft/>
               </div>
               <div className="icon-right under-icons">
               <FaAngleRight/>
               </div>
               </div>      
         </div>
        </div>
        <div class="production">
         <div className="inner-production">
            <h1 className='heading-fashion'>Jewellery Accessories</h1>
            <div className="products">
               <div className="product-1 product">
                  <div className="inner-product">
                  <h1>Jumkas</h1>
                 <h4><span>Start Price</span> $ 200</h4>
                 <img src={img7} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-2 product">
                  <div className="inner-product">
                  <h1>Necklaces</h1>
                 <h4><span>Start Price</span> $ 200</h4>
                 <img src={img8} alt="t-shirt" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
               <div className="product-3 product">
                  <div className="inner-product">
                  <h1>Kongans</h1>
                 <h4><span>Start Price</span> $ 200</h4>
                 <img src={img9} alt="scart" />
                 <h3><span className='buy'>Buy Now</span><span>See More</span></h3>
                  </div>
                </div> 
            </div>   
            <div className="icons-under-products">
               <div className="icon-left under-icons">
               <FaAngleLeft/>
               </div>
               <div className="icon-right under-icons">
               <FaAngleRight/>
               </div>
               </div>      
         </div>
        </div>
   </>
  )
}

export default Products

