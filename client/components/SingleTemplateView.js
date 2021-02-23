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
      </div>
    );
  }
}

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
