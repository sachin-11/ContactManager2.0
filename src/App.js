import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div class='App'>
        <Header branding='Contact Manager' />
        <Contact
          name='sachin singh'
          email='rajeshsachin786@gmail.com'
          phone='9834573812'
        />
        <Contact
          name='rahul singh'
          email='rahulsingh786@gmail.com'
          phone='77167681897'
        />
      </div>
    );
  }
}

export default App;
