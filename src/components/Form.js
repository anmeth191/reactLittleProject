
import React from 'react';

class FormUser extends React.Component{

  state = { value: ''}


onSubmitForm = (event) =>{
  event.preventDefault();
  this.props.onSendImage(this.state.value);
}

onChangeValue = (event) =>{
this.setState({value:event.target.value});
}

render(){

return(<div className="formUser-container">
  <form className="formUser" onSubmit={this.onSubmitForm}>
   <label className="formUser-label">Search Here
     <input type="text" className="formUser-input" onChange={this.onChangeValue}/>
   </label>
    <input className="formUser-button" type="submit" value="Submit"/> 
   </form>    
</div>)
}
}

export default FormUser;