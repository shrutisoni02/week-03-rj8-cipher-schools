import React, {useState} from "react";
const UserDetails = ({ user = {} }) => {
const [h1Text, setH1Text] = useState("Ths is a Demo C  omponent");
        return (
            <div>
                <h3>{user.name}</h3>
             <h5>
                 Email: {user.email}
                 <br/>
                 Phone number: {user.phoneNumber}
           </h5>
           {/* <h1>This is Demo Component</h1> */}
           <h1>{h1Text}</h1>
           <button onClick={(e)=> {
            // console.log(e);
            setH1Text("This is Cipher Schools!");
           }}>Click Me!</button>
            </div>
        )
    }

export default UserDetails;