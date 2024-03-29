
import React, {useState} from 'react'
import './header.css';
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxTriangleDown } from "react-icons/rx";
import flag1 from '../images/flag-uk.png'
import flag2 from '../images/flag-france.png'
import { VscThreeBars } from "react-icons/vsc";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
export function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [select, setselect] = useState(false)
  const [language, setlanguage] = useState(false)

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  const toogleOptions =() =>{
    setselect(!select)
  }
  const toggleLanguage = () =>{
    setlanguage(!language)
  }
  return (
    <div className="frontpage">

      {/* <img src="https://themewagon.github.io/eflyer/images/banner-bg.png" alt="" /> */}
    <div className='header'>
<div className='navbar' >
  <p>Best Sellers</p>
  <p>Gift Ideas</p>
  <p>New Releases</p>
  <p>Today's Deals</p>
  <p>Customer Service</p>
      </div>
      </div>
      <div className='frontpage1' >
       <h1 className='Eflyer'>Eflyer</h1>
       </div>
       <div className="linewise">
       <div>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={toggleSidebar}>&times;</button>
                <a href="#">Home</a>
                <a href="#">Fashion</a>
                <a href="#">Electronic</a>
                <a href="#">Jewellery</a>
            </div>

        </div>
        <div className='linewise-left-section'>
            <div className="openbtn" onClick={toggleSidebar}><VscThreeBars/></div>
       <div className="manu-all-category">
       <div id="all-category" onClick={toogleOptions}>
       <h3>All Category</h3>
       <RxTriangleDown className='down-first-arrow'/>
       </div>
       <div className={`options ${select ? 'category' : '' }`}>
       <p className='drops'>Action</p>
       <p className='drops'>Another action</p> 
       <p className='drops'>Something else here</p>
       </div>
       </div>
       <div className="searching">
       <input type="search" placeholder='Search this blog' />
       <div className="search-icon-parent">

       <IoMdSearch  className='serach-icon'/>
       </div>
       </div>
        </div>
        
       <div className="linewise-right-section">

<div className="language-manu">
       <div className='english' onClick={toggleLanguage}>
        <img src={flag1} alt="img" />
        <p>
           English
        </p>
        <LiaAngleDownSolid className='down-second-arrow'/>
       </div>
       <div className={`french ${language ? 'show' : ''}`}>
        <img src={flag2} alt="img" />
        <p >
          French
        </p>
       </div>
</div>
       <div className="icons">
         <div className="icon1">
         <FaShoppingCart className='icon'/>
          <p>Cart</p>
         </div>
         <div className="icon2">
          <FaUserAlt  className='icon'/>
          <p>Customer</p>
         </div>
       </div>
       </div>
      {/* <button class="btn btn-secondary dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">All Category 
   </button>
   <div>
   <p>Action</p>
   <p>Another action</p>
   <p>Something else here</p>
  </div> */}
  </div>
  <div className="frontpage-slider">
 <div className="shopping-first-icon shopping">
    <FaAngleLeft />
 </div>
           <div className="frontpage-inner-slider">
            <h1>GET START</h1>
            <h1>YOUR FAVOURIT SHOPPING</h1>
            <button>BUY NOW</button>
           </div>
          <div className="shopping-second-icon shopping">

         <FaAngleRight />
          </div>
</div>

</div>
       
   
  
  );
    }
  
