import React,{ Component } from "react";
import Subchild from './subChild';
import SubChild from "./subChild";



class ChildComponent extends Component{
    
    
      render() {
        return (
          <div>
            
            <h1> harfami, {this.props.name}</h1>
           <SubChild name="chhunderi"></SubChild>
         
          </div>
        );
      }
}
export default ChildComponent;