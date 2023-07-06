import { useState } from "react";

const User = (props) =>{

    const [count1] = useState(1);
    const [count2] = useState(2);

    return (
        <div className="user-card">
            <h1>Count 1 : {count1}</h1>
            <h1>Count 2 : {count2}</h1>
            <h2>Name : {props.name}</h2>
            <h3>Location : Pune</h3>
            <h4>Contact: @maheshpatil353</h4>
        </div>
    )
}

export default User;