/*
 *
 * FunPage actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(risklevel) {
  console.log('defaultAction', risklevel);
  return {
    type: DEFAULT_ACTION,
    risklevel,
  };
}
