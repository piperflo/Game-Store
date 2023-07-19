import React, {useState, useEffect} from 'react'
import '../styles/Products.css'

const Products = ({addCount, addGame}) =>{
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        async function getGameData() {
            try {
                const response = await fetch('https://api.rawg.io/api/games?key=ddcd3b9514ba4f1286e15eec3f9a3e65&dates=2023-01-01,2023-07-16', {mode: 'cors'});
                const data = await response.json(); 
                setGameList(data.results);
            } catch (error) {
                alert("Couldn't Find Data");
            }
        }
        getGameData();    
    },[]);

    return(
        <>
            
            <div className="products-container">
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
            </div>
        </>
    )
}

export default Products;