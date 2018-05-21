/**
 *
 * FunPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {PieChart} from 'react-easy-chart';

// this module's components
import injectReducer from 'utils/injectReducer';
import {makeSelectRisklevel, makeSelectChartData} from './selectors';
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
const OverflowScroll = styled.div`
// iphone plus
@media only screen and (max-width:414px) {
  height:250px;
  overflow:scroll;
}
`;

export class FunPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let piechart = (this.props.riskdata
            && this.props.riskdata.profile
            && this.props.riskdata.profile.length > 0) ? (
        <div>
          <PieChart labels size={375} innerHoleSize={30}
          data={this.props.riskdata.profile}
          styles={{'.chart_text':{fontSize:'1em', fill:'#fff' }}}/>
          <Link to="/allocation">Adjust allocation</Link>
        </div>
      ) : (
          <div></div>
      )

    return (
      <MasterGrid>
        <h1>Choose option {this.props.risklevel}</h1>
        <OverflowScroll>
          <RiskTable formname="risk" data={sampledata} onClick={this.props.onRiskSelect}></RiskTable>
        </OverflowScroll>
        {piechart}
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
  riskdata: makeSelectChartData(),
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
