import React, {useState, useEffect, useRef} from 'react'
import Header from './Header';
import '../styles/Products.css'
import { useLocation } from 'react-router-dom';

const Products = ({addCount, addGame}) =>{
    const [count, setCount] = useState(0);
    const [gameList, setGameList] = useState([]);
    const [cart, setCart] = useState([]);
    const inputRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const l = location.state.data;;
        //const count = l.data.count;
        const results = l.data.results;
        setGameList(gameList.concat(results));      
    },[]);

    const updateCount = (event) =>{
        var gameName = event.target.parentNode.children[1].textContent;
        setCart(cart.concat(gameName));
        setCount(count + 1);
        console.log(gameName);
        console.log("Input Ref below --------------")
        console.log(inputRef);
    }

    const displayCart = (event) =>{
        //const cartContainer = document.getElementById("cart-container");
        console.log(event);
        //console.log(cartContainer)
        //cartContainer.style.display = "flex";
    }
    //<div id="counter" onClick={displayCart}>Show {count} Games</div>
    return(
        <>
            <Header ref={inputRef}/>
            
            <div id="products-container">
                <div id="cart-container">{cart.map((items) => {
                                return ( 
                                    <p>{items}</p>
                                )
                            })}</div>
                <div id="card-container">
                    <div id="games">
                        {gameList.map((game) => {
                                return ( 
                                    <div key={game.id} className="game">
                                        <div id="image-container" onClick={() => {addCount()}}><img className="game-image" src={(encodeURI(game.background_image))} alt={game.name}></img></div>
                                        <p className="name">{game.name}</p>
                                        <button className="addGame" onClick={() => {addGame(game.name)}}>Add</button>
                                    </div> 
                                )
                            })}
                    </div>
                </div>
                Products Page
            </div>
        </>
    )
}

export default Products;