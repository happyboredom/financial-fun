import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';

import { fetchMagazine, gotMagazine, gotMagazineError } from './actions';
import { 
  ACTION_MAGAZINE_FETCH, 
  SECTION_LIMIT, 
  SECTION_ID_FOOD, 
  URL_DOMAIN, 
  URL_PATH_SECTION,
  } from './constants';

const SECTION_ID = SECTION_ID_FOOD;
const EASY_URL = `https://flapi.flipboard.com/content/v1/sections?uid=0&udid=0&tuuid=0&remoteid=${SECTION_ID}&limit=${SECTION_LIMIT}&nosidebars=true`;
const SECTION_PARAMS = {
  uid: 0,
  udid: 0,
  tuuid: 0
};

function buildSectionUrl() {
  let bar = Object.assign({}, SECTION_PARAMS);
  bar['limit'] = 10;
  bar['remoteid'] = SECTION_ID_FOOD;
  var queryString = Object.keys(bar).map(key => key + '=' + bar[key]).join('&');
  return `${URL_DOMAIN}${URL_PATH_SECTION}?${queryString}`;
}

export function* getMagazine() {
  try {
      const data = yield call(request, buildSectionUrl());
      let posts = data.stream.filter(obj => { 
        return obj.type == "post";
      });
      yield put(gotMagazine(posts));
  } catch (err) {
      yield put(gotMagazineError(err));
  }
}

export default function* watchMagazineActions() {
  yield takeLatest(ACTION_MAGAZINE_FETCH, getMagazine);
}