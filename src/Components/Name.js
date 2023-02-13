// import React, { Component } from 'react'

// class Name extends Component {
//     state = {name: "Shruti Soni!"};

//     constructor(props) {
//         super(props);
//         this.setName = this.setName.bind(this);
//     }
//     setName(name) {
//         this.setState({...this.state, name});
//     };
    // testHandler = () =>{
    //     console.log("testHandler");
    // }
//     render() {
//         return(
//             <>
//                 <h1>The name is: {this.state.name} </h1>
//                 <button onClick={this.setName("Smriti soni"); this.testHandler();}>Click Me!</button>
//             </>
//         )
//     }
// }
import React, { useState } from 'react'
const Name = () =>{
   const [state, setState] = useState({name : "shruti soni"});
   let setName = (e) => {
    setState({...state, name: "Smriti soni"})
   }
   return (
    <>
        <h1> The name is : {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
    </>
   )
}
export default Name;