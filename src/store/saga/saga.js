import {call, put, takeEvery} from 'redux-saga/effects';
import { getCatsSuccess } from '../index';

function* getCatsFetch() {
    const cats= yield call(()=>{
       return fetch('https://api.thecatapi.com/v1/breeds')
    });
    const formattedCats = yield cats.json();
    const formattedCatsShortened = formattedCats.slice(0,10);
    yield put(getCatsSuccess(formattedCatsShortened));
}

function* watchCatSaga() {
    yield takeEvery('cat/getCatsFetch' , getCatsFetch)
}

export default function* rootSaga() {
    yield watchCatSaga();
}