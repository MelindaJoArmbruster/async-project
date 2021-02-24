import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleTemplate } from '../redux/singleTemplateReducer';

class SingleTemplateView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.loadSingleTemplate(this.props.match.params.templateId);
  }

  render() {
    return (
      <div>
        <div>
          <img
            className='singleTemplateImage'
            src={this.props.singleTemplate.frontImageURL}
          />
        </div>
        <div>
          <img
            className='singleTemplateImage'
            src={this.props.singleTemplate.backImageURL}
          />
        </div>
        <Link
          to={{ pathname: '/order', templateId: this.props.singleTemplate.id }}
        >
          <button className='button'>Personalize</button>
        </Link>
      </div>
    );
  }
}
//still need to pass the templateId to the order form somehow.

const mapStateToProps = (state) => {
  return {
    singleTemplate: state.singleTemplateSlice.singleTemplate,
    loading: state.singleTemplateSlice.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleTemplate: (id) => dispatch(fetchSingleTemplate(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleTemplateView);
