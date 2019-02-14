/**
 *
 * EmailPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEmailPreview, { makeSelectMagazineData, makeSelectSelectedItems, makeSelectHtmlView } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { 
  fetchMagazine,
  toggleMagazineSelection,
  actionShowHtml } from './actions';

import EmailTester from 'components/EmailTester';

const EmailGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 10px;
background-color: #ededed;
`;

const SelectedPane = styled.div`
border:1px solid green;
`;

const ConstrainedImg = styled.img`
max-width:100%;
`;

const MagazineDisplay = styled.div`
margin-bottom:2ex;
border:1px solid red;
`;

const HtmlPreview = styled.textarea`
width:100%
`;

function cleanHtml(text) {
  const el = document.createElement('div');
  el.innerHTML = text;
  return el.textContent || el.innerText || text;
}

function grabImage(props) {
  let img = props.inlineImage || {};
  img = img.mediumURL || img.largeURL || img.xlargeURL || null;
  return img;
}

function MagazineRow(props, idx, onChange) {
  return (
    <div id={`magazine${idx}`}>
      <div><input id={`chk${idx}`} type="checkbox" name="mag" value={idx} onChange={onChange}/></div>
      <div><label htmlFor={`chk${idx}`}>{props.title}</label></div>
    </div>
  );
}

function MagazineDisplayRow(props, idx) {
  let img = grabImage(props)
  img = img ? <ConstrainedImg src={img} /> : <span></span>;
  return (
    <MagazineDisplay id={`display${idx}`}>
      <div><a href={props.sourceURL}>{props.title}</a></div>
      {img}
      <div>{cleanHtml(props.excerptText)}</div>
    </MagazineDisplay>
  );
}

//https://flapi.flipboard.com/content/v1/sections?uid=0&udid=0&tuuid=0&remoteid=sid/5ds4lndnz/happyboredom&limit=10

export class EmailPreview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onFetchMagazine();
  }
  
  renderList() {
    let foo;
    if (this.props.magazine.map) {
      foo = this.props.magazine.map((obj, idx) => MagazineRow(obj, idx, (evt) => this.props.onChangeMagazineCheckbox(evt, obj) ));
    } else {
      foo = <div>{this.props.magazine}</div>;
    }
    return foo;    
  }
  
  renderSelected(fn) {
    let selected;
    if (this.props.selectedItems) {
      selected = this.props.selectedItems.toArray().map((obj, idx, arr) => fn(obj, idx));
    } else {
      selected = <div>nothing selected</div>
    }
    return selected;    
  }
  
  renderHtmlCode() {
    const butt = <html>
        <title>YOUR_TITLE_HERE</title>
        <body>
          {this.renderSelected(MagazineDisplayRow)}
        </body>
      </html>;
    return renderToStaticMarkup(butt);
  }
  
  renderJSONSnippet() {
    let selected;
    if (this.props.selectedItems) {
      // clean up objects to look less original
      selected = JSON.stringify(
        this.props.selectedItems.toArray().map((obj, idx) => {
          let {
            title,
            sourceURL, 
            excerptText,
            sourceDomain
          } = obj;
          return {
            title,
            url:sourceURL,
            domain:sourceDomain,
            excerpt:excerptText,
            image:grabImage(obj)
          };
        })
      );
    } else {
      selected = [];
    }
    return selected;
  }
  
  render() {
    
    
    return (
      <div>
        <HtmlPreview value={this.renderJSONSnippet()} readOnly></HtmlPreview>
        <EmailGrid>
          <EmailTester className="foo" style={ {border: "1px solid blue"} } text="hello">
            <h1>{this.props.magazine.length}</h1>
            <div className='col1'>{this.renderList()}</div>
            <button onClick={this.props.onFetchMagazine}>Fetch Magazine</button>
          </EmailTester>
          <SelectedPane>
            <div className='col2' onClick={this.props.onShowHtml}>Click this</div>
            {this.renderSelected(MagazineDisplayRow)}
          </SelectedPane>
        </EmailGrid>
      </div>
    );
  }
}

EmailPreview.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  emailpreview: makeSelectEmailPreview(),
  magazine:makeSelectMagazineData(),
  selectedItems:makeSelectSelectedItems(),
  showhtmlview:makeSelectHtmlView(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchMagazine: evt => dispatch(fetchMagazine()),
    onChangeMagazineCheckbox: (evt, data) => dispatch(toggleMagazineSelection(evt, data)),
    onShowHtml: evt => dispatch(actionShowHtml()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'emailPreview', reducer });
const withSaga = injectSaga({ key: 'emailPreview', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmailPreview);
