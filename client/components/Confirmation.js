import React from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../redux/orderReducer';
import axios from 'axios';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontImageURL: '/images/default-front.png',
      backImageURL: '/images/default-back.png',
    };
    this.checkBackImage = this.checkBackImage.bind(this);
    this.checkFrontImage = this.checkFrontImage.bind(this);
  }

  componentDidMount() {
    this.props.submitOrder(this.props.location.order);
    this.backInterval = setInterval(() => this.checkBackImage(), 1000);
    this.frontInterval = setInterval(() => this.checkFrontImage(), 1000);
  }

  async checkBackImage() {
    console.log('axios called');
    try {
      if (
        (await axios.get(this.props.confirmation.lobBackPngURL)).status === 200
      ) {
        this.setState({ backImageURL: this.props.confirmation.lobBackPngURL });
        clearInterval(this.backInterval);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async checkFrontImage() {
    console.log('axios called');
    try {
      if (
        (await axios.get(this.props.confirmation.lobFrontPngURL)).status === 200
      ) {
        this.setState({
          frontImageURL: this.props.confirmation.lobFrontPngURL,
        });
        clearInterval(this.frontInterval);
      }
    } catch (err) {
      console.log(err);
    }
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
        <div>
          <img className='singleTemplateImage' src={this.state.backImageURL} />
        </div>
        <div>
          <img className='singleTemplateImage' src={this.state.frontImageURL} />
        </div>
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
