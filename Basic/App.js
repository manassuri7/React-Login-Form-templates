class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
  
  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {
    <div className="box-controller">
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showLoginBox
         .bind(this)}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={this
         .showRegisterBox
         .bind(this)}>
         Register
       </div>
     </div>
     
    return (
      <div className="root-container">
          <div className="box-container">
               {this.state.isLoginOpen && <LoginBox/>}
               {this.state.isRegisterOpen && <RegisterBox/>}
         </div>
      </div>
    );
  }
}
reactDOM.render(
  <App />, document.getElementById("root"));
