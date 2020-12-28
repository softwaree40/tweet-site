import React from "react"


class CommentForm extends React.Component{
          state = {
             title: "",
             comment: ""
          }
     
      onFormSubmit(event){
         event.preventdefault()
         console.log("Submit information!")

      }
      onInputAndTextAreaChange(event){
        this.setState({
            title: event.target.value,
            comment:event.target.value
            
        })
        console.log(this.state.title,this.state.comment)
      }


 render(){

 return(
    <div className="container">
      <form onSubmit={this.onFormSubmit}>
        <div className="lable">
         <label htmlFor="name">Enter Title</label>
         <input onChange={this.onInputAndTextAreaChange} type="text" id="name" value={this.state.title}/>
        </div>
         <br/>
        <div className="textarea">
        <label className="textarea">Enter Comment</label>
          <textarea onChange={this.onInputAndTextAreaChange} value={this.state.comment}></textarea>
        </div>
      </form>

    </div>
    )

 }

}
export default CommentForm