import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../redux/orderReducer';

class Confirmation extends React.Component {
  componentDidMount() {
    this.props.submitOrder(this.props.location.order);
  }
  render() {
    if (this.props.processessing) {
      return <div>Processing...</div>;
    }
    return (
      <div>
        <div>
          Delivery Date: {this.props.confirmation.lobExpectedDeliveryDate}
          <br></br>
          <a href={this.props.confirmation.lobBackPngURL}>View</a>
        </div>
        {/* <div>
          <img
            className='singleTemplateImage'
            src={this.props.confirmation.lobBackPngURL}
          />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    confirmation: state.orderSlice.order,
    processing: state.orderSlice.processing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: (order) => dispatch(addOrder(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
