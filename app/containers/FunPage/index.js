/**
 *
 * FunPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {PieChart} from 'react-easy-chart';

// this module's components
import injectReducer from 'utils/injectReducer';
import makeSelectRisklevel from './selectors';
import reducer from './reducer';
import RiskButton from 'components/RiskButton';
import RiskTable from 'components/RiskTable';
import { setRiskLevel } from '../HomePage/actions';
import sampledata from './sampledata';

// CSS & Presentation
import styled from 'styled-components';
import 'react-rangeslider/lib/index.css'
const MasterGrid = styled.div`
  display:grid;
  grid-template-rows: repeat(3, auto [row-start]);
  grid-template-areas: "one" "two" "three";`


export class FunPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('render props', this.props, sampledata[0].profile);
    return (
      <MasterGrid>
        <h1>Choose option {this.props.risklevel}</h1>
        <RiskTable formname="risk" data={sampledata} onClick={this.props.onRiskSelect}></RiskTable>
        <PieChart
          labels
          size={400}
          innerHoleSize={200}
          data={[
            {key:'Abra', value:100, color:'#eee'},
            {key:'Cadabra', value:50, color:'#ddd'}
          ]}
          styles={{'.chart_text':{
            fontSize:'1em',
            fill:'#fff'
          }
          }} />
        <footer>jl &copy; 2018</footer>
      </MasterGrid>
    );
  }
}

FunPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onRiskSelect: PropTypes.func,
  risklevel: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  risklevel: makeSelectRisklevel(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRiskSelect: (evt) => {
      return dispatch(setRiskLevel(evt.target.value))
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'funPage', reducer });

export default compose(
  withReducer,
  withConnect,
)(FunPage);
