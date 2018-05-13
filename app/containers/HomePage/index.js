/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Cta from 'components/Cta'
import RiskButton from 'components/RiskButton'
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="home">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <RiskButton risk="1" title="Most conservative" />
        <RiskButton risk="2" title="Conservative"/>
        <RiskButton risk="3" title="Aggressive" />
        <RiskButton risk="4" title="Most aggressive" />
      </div>
    );
  }
}
