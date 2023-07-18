import React, {Component} from 'react'
import {  Link, Outlet } from "react-router-dom";
import '../styles/Header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{},
            count: 0
        }
    }

    handleCountChange = count => {
        this.setState({count : this.state.count + 1});
    }
    componentDidMount() {
        this.getGameData();
      }

    async getGameData() {
        try {
            const response = await fetch('https://api.rawg.io/api/games?key=ddcd3b9514ba4f1286e15eec3f9a3e65&dates=2023-01-01,2023-07-16', {mode: 'cors'});
            const data = await response.json(); 
            this.setState({
                data: data
            });
        } catch (error) {
            alert("Couldn't Find Data");
        }
    }
    render(){
        const {data, count} = this.state;
        //console.log("Showing Api Data ----------------------")
        //console.log(this.state.data)
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
                                    <Link className="links" to="/games" state={{data: {data}, count:{count} }}>Games</Link>
                                </li>
                                <li>
                                    <Link className="links" to="/about">About</Link>
                                </li>
                                
                                <li>
                                    <button id="counter">{count}</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Header;