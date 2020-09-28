import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_menu: false,
      loading: false,
      redirectToPhone: false,
      home: "active",
      showcart: "",
      cartItems: [],
      email:"info@meditserv.com",
      message:"",
      name: ""
    };
  }

  componentDidMount = () => {
    this.setState({ cartItems: [] });
  };

  handleMobileMenu = () => {
    this.setState((prevState) => ({ mobile_menu: !prevState.mobile_menu }));
  };

  handleInput = name => event =>{
    this.setState({[name]: event.target.value})
  }



  render() {
    return (
      <div>
        <Header />
       <Form handleInput={this.handleInput} email={this.state.email} message={this.state.message} name={this.state.name}/>

<Footer />
</div>
);
}
}