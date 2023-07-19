import React, {useEffect} from 'react'
import {  Link, Outlet } from "react-router-dom";
import '../styles/Header.css'

const Header = ({cartItems, count}) =>{
    
    useEffect(() => {
        const button = document.getElementById("open-cart");
        const cartContainer = document.getElementById("cart-container");
        const closeForm = document.getElementById("close-form");
        const updateCount = () =>{
            cartContainer.style.display = "flex";
        }
        const close = () =>{
            cartContainer.style.display = "none";
        }
        button.addEventListener("click", updateCount);
        closeForm.addEventListener("click", close);

    },[count, cartItems]);
    
        return(
            <>
                <nav>
                    <ul className="main-list">
                        <li>
                            <Link className="Home" to="/">GameStore</Link>
                        </li>
                        <li>
                            <ul className="right-side">
                                <li>
                                    <Link className="links" to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className="links" to="/games" >Games</Link>
                                </li>
                                <li>
                                    <Link className="links" to="/about">About</Link>
                                </li>                         
                                    <button id="open-cart">Items: {count}</button>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="cart-container">
                    <div id="cart">
                        <div id="form-container">
                            <h2 id="cart-header">Cart</h2> 
                            <div id="close-form" >X</div>
                        </div>{cartItems.map((items) => {
                            return (
                                //Make sure to use index for unique keys 
                                <div><p key={items} className="game-name">{items}</p></div>                             
                            )
                        })}</div>
                </div>
                <Outlet />
            </>
        )
    
}

export default Header;