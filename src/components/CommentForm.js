import React from "react"

class CommentForm extends React.Component{
          state = {
             title: "",
             comment: ""
          }
     
      onFormSubmit = (event)=> {
          
         event.preventDefault()
          this.props.newHandle(this.state)
      }
     onInputAndTextAreaChange = (event) => { 
         const {target:{name,value}}= event
         
        this.setState({
          [name]:value
        })
        
      }


 render(){

 return(
    <div className="container">
      <form onSubmit={this.onFormSubmit}>
        <div className="lable">
          <label htmlFor="name">Enter Title</label>
          <input onChange={this.onInputAndTextAreaChange} type="text" name="title" value={this.state.title}/>
        </div>
         <br/>
        <div className="textarea">
          <label className="textarea">Enter Comment</label>
          <textarea onChange={this.onInputAndTextAreaChange} value={this.state.comment} name="comment"></textarea>
        </div>
        <button>Click Submit</button>
      </form>
    </div>
    )

 }

}
export default CommentForm