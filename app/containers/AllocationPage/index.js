import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Grid,
  Row,
  Col,
  Panel,
  Button,
  Table,
  FormControl,
} from 'react-bootstrap';
import injectReducer from 'utils/injectReducer';

import reducer from './reducer';
import { selectRiskAllocations, sumAllocations, selectCalculatedRiskData, selectRiskSummary } from './selectors';
import { inputAllocationAction, calculateAllocations } from './actions';

// CSS & Presentation
const NumberTd = styled.td `
text-align:right;
`;

export class AllocationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let dataRows = (this.props.pagedata.map((object, i) => {
      return (
        <tr key={object.name}>
          <td>
            <label>{object.name}</label>
          </td>
          <NumberTd>
            <FormControl type="number" label={object.category} name={object.category} id={object.category} placeholder="0" min={0}/>
          </NumberTd>
          <NumberTd>
            {object.targetAlloc}%
          </NumberTd>
          <NumberTd>
            ${object.targetCash.toFixed(2)}
          </NumberTd>
        </tr>)
    })); //dataRows

    let instructions = (this.props.pagedata.map((object, i) => {
      let action = '';
      let desc = '';
      if (object.targetDifference < 0) {
        action = 'Sell';
        desc = 'too much';
      } else if (object.targetDifference > 0) {
        action = 'Buy';
        desc = 'too little';
      }
      if (action !== '') {
        const inString = `${action} $${Math.abs(object.targetDifference).toFixed(2)} in ${object.name}`;
        return (<div key={object.category}>
          <dt>{object.name}</dt>
          <dd>
            You have {desc} &zwnj;
            money in {object.name}. {inString}
            to reach your {object.targetAlloc.toFixed(0)}% target allocation.</dd>
        </div>);
      }
    }).filter(instr => instr !== undefined));
    let instructionBlock = undefined;
    if (instructions.length > 0) {
      instructionBlock = (<div className="instructionBlock">
        <h3>Based on your portfolio of ${this.props.total.toFixed(2)}&zwnj;
          you should make some adjustments to achieve a &zwnj;
          <em style={{color: 'red'}}>{this.props.riskSummary.label}</em> &zwnj;
          portfolio.</h3>
        <dl>
          {instructions}
        </dl>
      </div>)
    }
    return (<Grid fluid>
      <Row className="show-grid">
        <Col xs={12}>
          <h1>Now, let's see if your portfolio is &zwnj;
            <em>{this.props.riskSummary.label}</em>.</h1>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                How much do you have invested in each category?
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <form name="myallocations" onSubmit={this.props.onGetCalculations}>
                <Table
                  striped
                  bordered
                  responsive
                >
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>$ invested</th>
                      <th>Target %</th>
                      <th>Target $</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataRows}
                    <tr>
                      <NumberTd colSpan="2">
                        <strong>Total</strong>
                      </NumberTd>
                      <NumberTd>100%</NumberTd>
                      <NumberTd>${this.props.total}</NumberTd>
                    </tr>
                  </tbody>
                </Table>
                <Button
                  block
                  type="submit"
                  bsStyle="primary"
                  bsSize="large"
                >
                  Evaluate my allocations
                </Button>
              </form>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12}>
          {instructionBlock}
        </Col>
      </Row>
      <footer>jl &copy; 2018</footer>
    </Grid>);
  }
}

AllocationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pagedata: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    pagedata: selectCalculatedRiskData(),
    total: sumAllocations(),
    riskSummary: selectRiskSummary()
  });

function mapDispatchToProps(dispatch) {
  return {
    onAllocationChange: (evt) => {
      return dispatch(inputAllocationAction(evt));
    },
    onGetCalculations: (evt) => {
      // grabs the form values and calculate
      evt.preventDefault();
      // force NodeList into proper Array.
      let allocationValues = {};
      evt.target.querySelectorAll('input[type=number]').forEach((val) => {
        allocationValues[val.name] = Math.abs(parseFloat(val.value || 0.0));
      });
      return dispatch(calculateAllocations(allocationValues));
    },
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'allocationPage', reducer});

export default compose(withReducer, withConnect,)(AllocationPage);
