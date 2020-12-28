import React from "react"
import './App.css';
import CommentForm from "./components/CommentForm"
import DisplayComment from  "./components/DisplayComment"
class App extends React.Component{

    handleFormInput = (terms) => {
     
     console.log(terms)

    }


  render(){

    return (
      <div className="App">
        <DisplayComment />
        <CommentForm newHandle={this.handleFormInput}/>
      </div>
    );

  }
}

export default App;
