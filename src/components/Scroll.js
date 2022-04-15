import React from "react";  


class Scroll extends React.Component{
    render(props = this.props){
        return(
       <div style={{overflowY:'scroll', border: '1px solid black', height:'800px'}}>
           {props.children}
       </div>
        
        )
    }   
}



export default Scroll;