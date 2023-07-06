import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name : "Dummy Name",
        location : "Default Location"
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mahesh353");
    const json = await data.json();
    this.setState({userInfo:json});
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("component will unmount");
  }

  

  render() {
    const { name, location,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: @maheshpatil353</h4>
      </div>
    );
  }
}

export default UserClass;
