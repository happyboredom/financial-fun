/*
 *
 * EmailPreview actions
 *
 */

import {
  DEFAULT_ACTION,
  ACTION_MAGAZINE_FETCH,
  ACTION_MAGAZINE_SUCCESS,
  ACTION_MAGAZINE_ERROR,
  ACTION_MAGAZINE_TOGGLE,
  ACTION_CLEAR_SELECTED,
  ACTION_SHOW_HTML
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchMagazine() {
  return {
    type: ACTION_MAGAZINE_FETCH
  }
}

export function gotMagazine(magazine) {
  return {
    type: ACTION_MAGAZINE_SUCCESS,
    magazine: magazine
  }
}

export function gotMagazineError(err) {
  return {
    type: ACTION_MAGAZINE_ERROR,
    err
  }
}

export function toggleMagazineSelection(evt, data) {
  return {
    type: ACTION_MAGAZINE_TOGGLE,
    data: data,
    checked: evt.currentTarget.checked,
  }  
}

export function actionShowHtml() {
  return {
    type: ACTION_SHOW_HTML
  }
}

export function actionClearSelected() {
  return {
    type: ACTION_CLEAR_SELECTED
  }
}