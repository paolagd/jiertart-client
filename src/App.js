import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';  
import Footer from './components/Footer'; 
import Navbar from './components/Navbar'; 
import Artists from './pages/Artists';
import Landingpage from './pages/Landingpage';
import SingleArtist from './pages/SingleArtist';

class App extends React.Component {
    state = {
        renderResponde : ''
    }
    getResponse = async() => {
        const response = await fetch('api/artists');
        const body = await response.json();

        return body;
    } 
    componentDidMount(){
        this.getResponse().then(res => {
            const somedata = res;

            this.setState({renderResponde : somedata})
        })        
    }
    
    render(){
        
        const {renderResponde} = this.state;

        return (
     
          
            <BrowserRouter> 
                <p>
                {JSON.stringify(renderResponde)}
                </p>
                <Navbar/>
                <Route exact path="/" component={Landingpage}></Route>
                <Route exact path="/artists" component={Artists}></Route>
                <Route exact path="/artistpage" component={SingleArtist}></Route>
                <Footer/> 
            </BrowserRouter>
        ); 
    }

}

export default App;

 