import React, { Component, Fragment } from "react";
import Contact from "../components/Contact";
import { Consumer } from "../components/context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <Fragment>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
