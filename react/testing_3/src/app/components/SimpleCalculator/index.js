import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actionCreators from '../../../redux/simpleCalculator/actions';

import SimpleCalculator from './layout';

class SimpleCalculatorContainer extends Component {

  render() {
    return (
      <SimpleCalculator
        calculatorValue={this.props.calculatorValue}
        onAdd={this.props.add}
        onSubstract={this.props.substract}
      />
    );
  }
}

const mapStateToProps = state => ({
  calculatorValue: state.calculatorValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCalculatorContainer);
