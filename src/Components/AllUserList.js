import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Tests from "./Tests";
// const AllUserList = ()=> {
//   const [state, setState] = useState ({
//     name: "Shruti soni",
//   })
//   let  allUsers=  [
//           {
//             name: "John",
//             email: "john@email.com",
//             phoneNumber: "+91-973654575",
//           },
//           {
//             name: "Shreyus",
//             email: "shreyus@gmail.com",
//             phoneNumber: "+91-658973421",
//           },
//           {
//             name: "Shreys",
//             email: "shreya@gmail.com",
//             phoneNumber: "+91-846573421",
//           },
//         ];
//         let setStateName = (name) => {
//           setState({...state, name});
//         };

// return (
//   <div>
//     {/* <h1>The name is (this.state.name)</h1> */}
//     <Tests name={state.name} setName={setStateName}/>
//     {allUsers.map((user, index) => {
//       <UserDetails key={index} user={user}/>
//     })}
//   </div>
// )
// }
class AllUserList extends Component {
  state = {
    name: "priyanshu saxena",
  };
  componentDidMount(){
    console.log("All user list was mounted")
  }
  setStateName = (name) => {
    this.setState({ ...this.state, name });
  };
  allUsers = [
    {
      name: "John",
      email: "john@email.com",
      phoneNumber: "+91-973654575",
    },
    {
      name: "Shreyus",
      email: "shreyus@gmail.com",
      phoneNumber: "+91-658973421",
    },
    {
      name: "Shreys",
      email: "shreya@gmail.com",
      phoneNumber: "+91-846573421",
    },
  ];
  render() {
    return (
      <div>
        <Tests name={this.state.name} setName={this.setStateName} />
        {this.props.allUsers.map((user, index) => (
          <UserDetails key={index} user={user} />
        ))}
      </div>
    );
  }
}
export default AllUserList;
