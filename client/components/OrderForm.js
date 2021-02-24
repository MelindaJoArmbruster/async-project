import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrder } from '../redux/orderReducer';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_name: 'melinda',
      to_address_line1: '142 Lions Ct',
      to_address_line2: '',
      to_address_city: 'Lake Zurich',
      to_address_state: 'IL',
      to_address_zip: '60047',
      from_name: 'chris',
      from_address_line1: '157 Lions Ct',
      from_address_line2: '',
      from_address_city: 'Lake Zurich',
      from_address_state: 'IL',
      from_address_zip: '60047',
      merge_variables_greeting: 'Hi',
      merge_variables_message: 'dfsefr',
      merge_variables_salutation: 'frsrf',
      merge_variables_fromName: 'lj',
      templateId: this.props.location.templateId,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // async handleSubmit(evt) {
  //   evt.preventDefault();
  //   this.props.submitOrder({ ...this.state });
  // }

  render() {
    return (
      <form>
        <h2>
          To place an order, all of the following fields must be competed
          (excluding To address line 2 and From address line 2):
        </h2>
        <fieldset>
          <legend>Recipient Details</legend>
          <label htmlFor='to_name'>To (first and last name):</label>
          <input
            name='to_name'
            onChange={this.handleChange}
            value={this.state.to_name}
          />
        </fieldset>
        <div id='toAddress' className='flexCol'>
          <label htmlFor='to_address_line1'>To Address (line 1):</label>
          <input
            name='to_address_line1'
            onChange={this.handleChange}
            value={this.state.to_address_line1}
          />

          <label htmlFor='to_address_line2'>To Address (line 2):</label>
          <input
            name='to_address_line2'
            onChange={this.handleChange}
            value={this.state.to_address_line2}
          />

          <label htmlFor='to_address_city'>To Address (city):</label>
          <input
            name='to_address_city'
            onChange={this.handleChange}
            value={this.state.to_address_city}
          />

          <label htmlFor='to_address_state'>To Address (state):</label>
          <input
            name='to_address_state'
            onChange={this.handleChange}
            value={this.state.to_address_state}
          />
        </div>
        <label htmlFor='to_address_zip'>To Address (zipcode):</label>
        <input
          name='to_address_zip'
          onChange={this.handleChange}
          value={this.state.to_address_zip}
        />

        <label htmlFor='from_name'>From (first and last name):</label>
        <input
          name='from_name'
          onChange={this.handleChange}
          value={this.state.from_name}
        />

        <label htmlFor='from_address_line1'>From Address (line 1):</label>
        <input
          name='from_address_line1'
          onChange={this.handleChange}
          value={this.state.from_address_line1}
        />

        <label htmlFor='from_address_line2'>From Address (line 2):</label>
        <input
          name='from_address_line2'
          onChange={this.handleChange}
          value={this.state.from_address_line2}
        />

        <label htmlFor='from_address_city'>From Address (city):</label>
        <input
          name='from_address_city'
          onChange={this.handleChange}
          value={this.state.from_address_city}
        />

        <label htmlFor='from_address_state'>From Address (state):</label>
        <input
          name='from_address_state'
          onChange={this.handleChange}
          value={this.state.from_address_state}
        />

        <label htmlFor='from_address_zip'>From Address (zipcode):</label>
        <input
          name='from_address_zip'
          onChange={this.handleChange}
          value={this.state.from_address_zip}
        />

        <label htmlFor='merge_variables_greeting'>
          Greeting: (for example: "Dear Charles,")
        </label>
        <input
          name='merge_variables_greeting'
          onChange={this.handleChange}
          value={this.state.merge_variables_greeting}
        />

        <label htmlFor='merge_variables_message'>Message:</label>
        <input
          name='merge_variables_message'
          onChange={this.handleChange}
          value={this.state.merge_variables_message}
        />

        <label htmlFor='merge_variables_salutation'>
          Salutation: (for example: "Sincerely,")
        </label>
        <input
          name='merge_variables_salutation'
          onChange={this.handleChange}
          value={this.state.merge_variables_salutation}
        />

        <label htmlFor='merge_variables_fromName'>From:</label>
        <input
          name='merge_variables_fromName'
          onChange={this.handleChange}
          value={this.state.merge_variables_fromName}
        />
        <Link to={{ pathname: '/confirmation', order: { ...this.state } }}>
          <button className='button'>Send Card</button>
        </Link>

        {/* <button className='button' type='submit'>
          Submit Order
        </button> */}
      </form>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     submitOrder: (order) => dispatch(addOrder(order)),
//   };
// };

// export default connect(null, mapDispatchToProps)(OrderForm);
export default OrderForm;
