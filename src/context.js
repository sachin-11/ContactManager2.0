import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "sachin singh",
        email: "rajeshsachin786@gmail.com",
        phone: "9834573812",
      },
      {
        id: 2,
        name: "rahul singh",
        email: "rahulsachin786@gmail.com",
        phone: "36565725767",
      },
      {
        id: 3,
        name: "arjun singh",
        email: "arjunsachin786@gmail.com",
        phone: "61676565755",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
