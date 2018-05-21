/*
 *
 * AllocationPage actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(evt) {
  let target = evt.target;
  console.log('AllocationPage::defaultAction', evt, evt.target.value);
  return {
    type: DEFAULT_ACTION,
    name: target.name,
    value: target.value
  };
}
