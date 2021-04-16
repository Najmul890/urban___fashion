import React from 'react';
// import Navbar from './Navbar/Navbar';
import './Header.css';
import femaleModel from '../../../assets/models_img/model1.png';
import menu_model from '../../../assets/models_img/menu_model.png';
import whiteFlower from '../../../assets/bg_img/white-flower.png';
import logo from '../../../assets/logo_img/logo.png';

import searchIcon from '../../../assets/icons/search.svg';
import cartIcon from '../../../assets/icons/shopping-bag.svg';
import profileIcon from '../../../assets/icons/profileIcon.png';


const Header = () => {
    return (
        <div>
            <div className="navbar" >
            
            <a href=""><img src={logo} className="logo"  alt="logo"/></a>
            
            <nav>
                <ul>
                    <li><a className="main-color" href="">Home</a></li>
                    <li><a className="main-color active" href="">Shop</a>
                       
                    </li>
                    <li><a className="main-color  " href="">Product</a>
                    <div className="mega-menu">
                           <div className="left" >
                               <div className="content">
                                   <h4>Man</h4>
                                   
                                   <div className="item" >Shirt</div>
                                   <div className="item" >Pant</div>
                                   <div className="item" >Fotua</div>
                                   <div className="item" ><span></span> Panjabi </div>
                                   <div className="item" >T-Shirt</div>
                                   <div className="item" >Polo</div>
                                   <div className="item" >Shoe</div>
                                   <div className="item" >Perfume</div>
                                   <div className="item" >Watch</div>
                               </div>
                               <div className="content">
                               <h4>Woman</h4>
                                  
                                       <div className="item" >Shirt</div>
                                       <div className="item" >Pant</div>
                                       <div className="item" >Fotua</div>
                                       <div className="item"> Lahenga</div>
                                       <div className="item" >T-Shirt</div>
                                       <div className="item" >Polo</div>
                                       <div className="item" >Shoe</div>
                                       <div className="item" >Perfume</div>
                                       <div className="item" >Watch</div>
                                   
                               </div>
                               <div className="content">
                                   <div>
                                       <h4 className="summer" >Summer</h4>
                                       
                                           <div className="item" >Mini shirt</div>
                                           <div className="item" >Short pant</div>
                                           <div className="item" >Cotton T-Shirt</div>
                                           <div className="item" >H&M Polo</div>
                                       
                                   </div>
                                   <div>
                                       <h4>Offer</h4>
                                       
                                           <div className="item"> Mini Shirt</div>
                                           <div className="item" >Short Pant</div>
                                           <div className="item" >Cotton T-Shirt</div>
                                           
                                       
                                   </div>
                               </div>
                               <div className="content">
                                   <h4>Gift Item</h4>
                                   
                                       <div className="item" >Mystery package</div>
                                       <div className="item" >Birthday Items</div>
                                       <div className="item" >Valentine gift</div>
                                       <div className="item" >National Day Items</div>
                                       <div className="item" >Wedding gift</div>
                                   
                               </div>
                           </div>
                           <div className="right" >
                               <img src={menu_model} alt="model"/>
                           </div>
                       </div>
                    </li>
                    <li><a className="main-color" href="">Page</a></li>
                    <li><a className="main-color" href="">Blog</a></li>
                    
                </ul>
            </nav>
            <div className="search-bar">
                <input  type="text"/>
                <img src={searchIcon} alt="search_icon"/>
            </div>
            <div>
                <img style={{marginLeft:'20px'}} src={cartIcon} alt="cartIcon"/>
            <a style={{marginRight:"30px", marginLeft:'5px',fontSize:'20px'}} className="main-color" href="">Cart</a>
            <img style={{height:'22px',width:'22px',marginLeft:'5px'}} src={profileIcon} alt="profile_icon"/>
                <a style={{marginLeft:"5px", fontSize:'20px'}} className="main-color" href="">Alex Priter</a>
            </div>
            
        
        </div>
            
            <div className="header-main">
                <div className="header-main_left" >
                    <img style={{width:"100%",height:"500px"}} src={femaleModel} alt="female_model"></img>
                </div>
                <div className="header-main_right" >
                    <div className="content">
                     <h2 className="white" >New Fashion Trends
                     for Summer</h2>
                     <p className="white" >
                     There are many variations of passages of Lorem Ipsum available, 
                     but the majority have suffered alteration in some form, by injected 
                     humour, or randomised words.
                     </p>
                     <button className="white" >Shop now</button>
                    </div>
                     <img src={whiteFlower} alt="white_flower" className="right-bg"/>
                </div>
                
            </div>
        </div>
    );
};

export default Header;