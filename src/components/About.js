import UserClass from "./UserClass";
import User from "./User";

const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
            {/* <User name={"Mahesh Patil (Function)"}/> */}
            <UserClass name={"Mahesh Patil (Class)"} location={"Pune (Class)"}/>
        </div>
    )
}

export default About;