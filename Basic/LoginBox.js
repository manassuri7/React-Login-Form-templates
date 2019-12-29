export default class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
         errors:[]
    };
  }

  showValidationErr(elm, msg) {
  this.setState((prevState) => ({
    errors: [
      ...prevState.errors, {
        elm,
        msg
      }
    ]
  }));
}
  
//Remove a specific element from the array 
clearValidationErr(elm) {
  this.setState((prevState) => {
    let newArr = [];
    //Add all elements from the prev array to the new one that has a different element
    for (let err of prevState.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    return {errors: newArr};
  });
}
  
  onUsernameChange(e) {
  this.setState({username: e.target.value});
  //We want to clear the error when ever the user type something new 
  this.clearValidationErr("username");
}

onPasswordChange(e) {
  this.setState({password: e.target.value});
  this.clearValidationErr("password");
}
  
  submitLogin(e) {
   //Check for all input fields and show errors if empty (you can implement other cases!)
  if (this.state.username == "") {
    this.showValidationErr("username", "Username Cannot be empty!");
  }
  if (this.state.email == "") {
    this.showValidationErr("email", "Email Cannot be empty!");
  }
  }

  render() {
    
    let usernameErr = null,
      passwordErr = null,

    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message 
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      //No (else if or else) statements cause we need to check for all possible elements
    }
    
    return (
      <div className="inner-container">
        <div className="header">
          Login
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange.bind(this)}/>
              <small className="danger-error">{usernameErr
                ? usernameErr : ""}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}/>
              <small className="danger-error">{passwordErr
                ? passwordErr : ""}
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
      </div>
    );
  }

}
