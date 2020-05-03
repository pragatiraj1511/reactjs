import React,{ Component } from "react";
import ChildComponent from "./childComponent";


class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h1> Hello, {this.props.name}</h1>
            <ChildComponent name="kamine"></ChildComponent>
          </div>
        );
      }
}
export default Login;
