import { all, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const fetchData = (url, param) => axios.get(url, param).then(response => response);

function* fetchUser() {
  try {
    const response = yield call(fetchData, 'https://feeds.learnyst.com/posts?schoolId=2207');
    yield put({type: "USER_FETCH_SUCCEEDED", response: response.data.items });
  } catch (error) {
    yield put({type: "USER_FETCH_FAILED", error });
  }
}

export default function* sagas() {
  yield all([
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser),
  ]);
}
