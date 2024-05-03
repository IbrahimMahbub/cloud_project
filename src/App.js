import './App.css';
import React, { Component } from 'react'; 
import LoginForm from './Pages/CustomerLogin';
import LoginSupport from './Pages/SupportLogin';
import CustomerReviewForm from './Pages/ReviewForm'
import SupportFeedbackForm from './Pages/FeedbackForm'

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'cust',
    }
  }

  onRouteChange = (route) =>{
    this.setState({route: route})
  }


  render() {
 
  

      if (this.state.route === 'cust'){
        return (<div className='App'>
        <LoginForm onRouteChange={this.onRouteChange} />
        </div>);
      } else if (this.state.route === 'CusSup') {
        return(
          <div className='App'>
          <LoginSupport onRouteChange={this.onRouteChange} />
        </div>
        );
  
      } else if (this.state.route === 'in' ){ 
        return(
          <div className='App'>
        <CustomerReviewForm onRouteChange={this.onRouteChange} /> 
        </div>
        );
        

      } else {
        return (
          <div className='App'>
            <SupportFeedbackForm onRouteChange={this.onRouteChange} />
          </div>

        );
      }

}
}






export default App;
