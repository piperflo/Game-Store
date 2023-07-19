import React, {Component} from 'react'
import Header from './Header'
import {  Link, Outlet } from "react-router-dom";
import '../styles/Home.css'
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: ""
        };
    }

    componentDidMount() {
        this.getGameData();
      }
    async getGameData() {
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=HpSRIkSD27rlQBiW0AWfNL68jgvTDAXF&s=playstation-ps5-dualsense-adaptive-triggers-dKTJvjV16COKNAhLJV', {mode: 'cors'});
            const data = await response.json(); 
            var link = encodeURI(data.data.images.original.url);
            this.setState({url: link.toString()});
            
    }
    //getGameData();
    render(){
        return(
            <>
                <main id="home-container">
                    <div id="left-container">
                        <div className="text"><p>BEST ONLINE STORE FOR<br/> GAMERS</p></div>
                        <div className="h-text"><h2>Take your gaming <br/> to the next <br/> level</h2></div>
                    </div>
                    <div id="right-container">
                        <img src={this.state.url} alt="Ps5 Animations" id="img"></img>
                    </div>
                </main>
            </>
        )
    }
}

export default Home;