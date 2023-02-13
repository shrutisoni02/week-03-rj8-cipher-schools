import React ,{Component} from "react";
import "./test.css";
class Test extends Component{
   state = {isLoggedIn: false};
   render(){
    return(
        <div>
            {!this.state.isLoggedIn ? (<h1>You are not logged In!</h1>
            ) : (
            <h1>Congratulations, you are logged in!</h1>)}
            <button onClick={(e)=> this.setState({isLoggedIn:true})}>
                Login!
            </button>
        </div>
    );
   }
}
export default Test;