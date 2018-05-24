import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {PieChart} from 'react-easy-chart';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

// this module's components
import injectReducer from 'utils/injectReducer';
import {makeSelectRisklevel, makeSelectChartData} from './selectors';
import reducer from './reducer';
import RiskButton from 'components/RiskButton';
import RiskTable from 'components/RiskTable';
import { setRiskLevel } from '../HomePage/actions';
import {convertToTableData, convertToChartData, sampledata} from './sampledata';
// CSS & Presentation
import styled from 'styled-components';

const PieContainer = styled.div`
text-align:center;
`;

export class FunPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let piechart = convertToChartData(this.props.riskdata)
                    .filter(obj => obj.value > 0);
    piechart = (piechart.length > 0) ? (
        <PieContainer>
          <PieChart labels size={300} innerHoleSize={30}
          data={piechart}
          styles={{'.chart_text':{fontSize:'1em', fill:'#fff' }}}/>
        </PieContainer>
      ) : (undefined)
    return (
<Grid fluid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <h1>First, pick your desired risk level from the table below.</h1>
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Choose your risk</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
        <RiskTable
          formname="risk"
          data={convertToTableData(sampledata)}
          onClickRow={this.props.onRiskSelectRow}
          onClick={this.props.onRiskSelect}></RiskTable>
        </Panel.Body>
        {/* must use react-router-dom Link to preserve state! */}
        <Link to="/allocation" className="btn btn-block btn-lg btn-primary">
        OK! Adjust allocation
        </Link>
      </Panel>
    </Col>
    <Col xs={12} md={4}>
      <h1>Suggested Allocation</h1>
      {piechart}
      <br />
    </Col>
  </Row>
  <footer>jl &copy; 2018</footer>
</Grid>
    );
  }
}

FunPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onRiskSelect: PropTypes.func,
  onRiskSelectRow: PropTypes.func,
  risklevel: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  risklevel: makeSelectRisklevel(),
  riskdata: makeSelectChartData(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRiskSelect: (evt) => {
      return dispatch(setRiskLevel(evt.target.value));
    },
    onRiskSelectRow: (evt) => {
      let target = evt.target;
      while (target != null && !target.dataset.risklevel) {
        target = target.parentElement;
      }
      return dispatch(setRiskLevel(target.dataset.risklevel));
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
