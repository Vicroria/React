import * as React from "react";
import ReactDOM from 'react-dom';

class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.signin = this.signin.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.state = {
			email: 'name@server.ua',
			password:''
		};
	}
    handleEmailChange(e){
	this.setState({email:e.target.email})}
    handlePasswordChange(e) {
	this.setState({password:e.target.value})}
    signin() {
	alert('електронна пошта '+ this.state.email + 'Password' +this.state.password);
	}
    render(){
	const {email} = this.state
	return (
          <form className="form-signin">
             <h2 className="form-signin-heading">Please sign in</h2>
	         <label className="sr-only">Email address</label>
	         <input type = "email" onChange={this.handleEmailChange} id = "inputEmail" className="form-control" value={this.state.email} placeholder="Email address" required />
		     <label className="sr-only">Password</label>
		     <input type="password" onChange={this.handlePasswordChange="form-control" } placeholder="Password" required />
		    <button className="btn btn-lg btn-primary btn-block" onClick={this.signin} type="button" Sign in> </button>
         </form>
		 
    )
	ReactDOM.render( <Signin/>, document.getElementById('root'))
  }
  
}
export default Signin;