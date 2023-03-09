import {call, put, takeEvery} from 'redux-saga/effects';
import { getCatsSuccess } from './catState';
import axios from 'axios'

function* getFormatedCats(){
   const cats = yield call(()=> axios.get('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = cats
    console.log("formattedCats",formattedCats) 
    yield put(getCatsSuccess(formattedCats))
}

function* catSaga(){
    yield takeEvery('cats/getCatFetch', getFormatedCats)
}

export default catSaga;