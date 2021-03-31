import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import FormUser from './components/Form';
import ApiRequest from './components/ApiRequest';
//import axios from 'axios';
import './Style.css'
import axios from 'axios';


class LandingPage  extends React.Component{

  state = {
    images:[]
  }


  onSendImage = async (value) => {
const imageApi = await axios.get(`https://pixabay.com/api/?key=20848124-f9137528305faebc20981cf37&q=${value}&image_type=photo`)
this.setState({images:imageApi.data.hits});
}

render(){
  return(<div>
    <Navbar /> 
    <Landing className="landingCover"/>
    <FormUser onSendImage = {this.onSendImage}/>
    <ApiRequest photosApi={this.state.images}/>
    </div>)
}

}//end of class component 


ReactDOM.render(

  <LandingPage />,
  document.querySelector('#root')


)