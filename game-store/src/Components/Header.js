import React, {Component} from 'react'
import {  Link, Outlet } from "react-router-dom";
import '../styles/Header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
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
            //console.log("Game Api: " + data);
            //console.log(data);
            //console.log(this.state.data)
            
        } catch (error) {
            alert("Couldn't Find Data");
        }
    }
    render(){
        const {data} = this.state;
        //console.log("Showing Api Data ----------------------")
        //console.log(this.state.data)
        return(
            <>
                <nav>
                    <ul className="main-list">
                        <li>
                            <Link data={data} className="Home" to="/">GameStore</Link>
                        </li>
                        <li>
                            <ul className="right-side">
                                <li>
                                    <Link className="links" to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link className="links" to="/products">Products</Link>
                                </li>
                                <li>
                                    <Link className="links" to="/products">Products</Link>
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