import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";
import { FaUnlink } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

import React from 'react'

const sidebar = () => {
  return (
    <div>
      
<input type="checkbox" id='check' />
<label htmlFor="check">
 <FaBars id='sbtn'/>
 <MdOutlineCancelPresentation id='scancel' />
</label>
<div className="sidebar">
   <header>
     My App
   </header>
   <ul>
     <li><a href=""><BsQrCode className='ico'/>Dashboard</a></li>
     <li><a href=""><CiStreamOn className='ico'/>Overview</a></li>
     <li><a href=""><FaUnlink className='ico'/>Shortcuts</a></li>
     <li><a href=""><FaHome className='ico'/>House</a></li>
     <li><a href=""><FaQuestion className='ico'/>About</a></li>
     <li><a href=""><BsSliders className='ico'/>Services</a></li>
     <li><a href=""><FaEnvelope className='ico'/>Contact us</a></li>
   </ul> 
          </div>
{/* <style>.sidebar{
    position: fixed;
    left: -250px;
    width: 250px;
    height: 100%;
    background: rgb(245, 193, 63);
    transition: all .5s ease;
}
.sidebar header{
    font-size: 22px;
    color: white;
    text-align: center;
    line-height: 70px;
    background:goldenrod;
    user-select: none;

}
.sidebar ul{
    display: inline;
    list-style: none; 
    display: flex;
    flex-direction: column;
       
}
.sidebar ul a{
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
    line-height: 65px;
    font-size: 20px;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid goldenrod;
    border-bottom: 1px solid rgb(163, 154, 154);
    transition: 0.3s;
}
.sidebar ul a .ico {
    margin-right: 16px;
}
#check{
    display: non;
}
label #sbtn,label #scancel{
    position: absolute;
    cursor: pointer;
    border-radius: 3px;
}
label #sbtn{
    right: 1210px;
    top: 176px;
    font-size: 50px;
    color:white;
    
    transition:all .5s  ;
}
label #scancel{
    z-index: 1;
    left: -195px;
    top: 195px;
    font-size: 40px;
    color: white;
    padding: 4px 9px;

}
#check:checked ~ .sidebar{
    left: 0;
}
#check:checked ~ label #btn{
    left:250px;
    opacity: 0;
    pointer-events: none;
}
#check:checked ~ label #scancel{
    left: 195px;
}


.sidebar ul li a:hover {
    padding-left: 50px;
}</style> */}
    </div>
  )
}

export default sidebar
