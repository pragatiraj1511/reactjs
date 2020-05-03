import React,{ Component } from "react";


class SubChild extends Component{
    constructor(props) {
        super(props);
        
      }
    
      render() {
        return (
          <div>
            
            <h1> haramii, {this.props.name}</h1>
          </div>
        );
      }
}
export default SubChild;