import React, { Component } from "react";
// import PropTypes from "prop-types";
import shortid from "shortid";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    // const contactItem = {
    //   id: shortid.generate(),
    //   name: this.state.name,
    //   number: this.state.number,
    // };
    // this.setState({ contact: contactItem });
    //
    this.props.addNewContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  inputNameId = shortid.generate();
  // console.log(inputNameId);
  inputNumberId = shortid.generate();

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.inputNameId}>
            Name:
            <input
              type="text"
              onChange={this.handleChange}
              value={name}
              name="name"
              id={this.inputNameId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label htmlFor={this.inputNumberId}>
            Number:
            <input
              type="tel"
              onChange={this.handleChange}
              value={number}
              name="number"
              id={this.inputNumberId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
