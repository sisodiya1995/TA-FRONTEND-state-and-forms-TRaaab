import React from "react";
class Form extends React.Component{
    constructor(props){
      super(props)
      this.state ={}
    }

    render(){
        return (
            <>
            <form>
                <label htmlFor="text-1">Text input</label><br/>
                <input type='text' name ="textInput"  id="text-1"/> <br/><br/>
                <label htmlFor="text-2">Date input</label><br/>
                <input type='date' name ="dateInput"  id="text-2"/><br/><br/>
                <label htmlFor="text-3">File input</label><br/>
                <input type='file' name ="fileInput"  id="text-3"/><br/><br/>
                <label htmlFor="text-4">Read -only-input</label><br/>
                <input type='text' name ="readInput"  id="text-4"/><br/><br/>
                <label htmlFor="text-5">Diseable input</label><br/>
                <input type='text' name ="disableInput"  id="text-5" disabled/><br/><br/>
                <label htmlFor="text-6">Textarea input</label><br/>
                <textarea type='text' name ="textInput"  id="text-6"/> <br/><br/>
                <label htmlFor="text-7"> disable Textarea input</label><br/>
                <textarea type='text' name ="textInput"  id="text-7" disabled/> <br/><br/>
            </form>
            
            </>
        )
    }
}
export default Form;