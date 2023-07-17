import React, {Component} from 'react'
import Header from './Header'
import '../styles/Home.css'
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: ""
        };

        const {data} = props;
        console.log(data)
    }

    //const [url, setUrl] = useState("");

    componentDidMount() {
        this.getGameData();
      }
    async getGameData() {
            //console.log(img);
            const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=HpSRIkSD27rlQBiW0AWfNL68jgvTDAXF&s=playstation-ps5-dualsense-adaptive-triggers-dKTJvjV16COKNAhLJV', {mode: 'cors'});
            const data = await response.json(); 
            var link = encodeURI(data.data.images.original.url);
            this.setState({url: link.toString()});
            
    }
    //getGameData();
    render(){
        return(
            <>
                <Header/>
                <main id="home-container">
                    <div id="left-container">
                        {}
                    </div>
                    <div id="center-container">
                        <p>BEST ONLINE STORE FOR GAMERS</p>
                        <h2>Take your gaming to the next level</h2>
                        <img src={this.state.url} alt="Ps5 Animations" id="img"></img>
                    </div>
                    <div id="right-container">
    
                    </div>
                    Home Page
                </main>
            </>
        )
    }
}

export default Home;