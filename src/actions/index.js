import db from '../../firebase';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { getConfess, sortFromCategory } from './selectors';

export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL'

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export const SORT_CONFESSIONS = 'SORT_CONFESSIONS';

function fetchFromFirebase() {
    return db.collection('confessions');
}

async function getDocsfromFetch(){
	let docsArray = [];
	const response = fetchFromFirebase().get();
	await response.then((querySnapshot) => {
		var docs = querySnapshot.docs;
		for(let doc of docs) {
			docsArray.push(doc.data());
		}
	});
	return docsArray;
}

function* fetchDocsSaga () {
	try {
		const payload = yield call(getDocsfromFetch);
		yield put({ type: "API_CALL_SUCCESS", payload});
		yield call(sortConfess);
	} catch (error) {
		yield put({ type: "API_CALL_FAILURE", payload: error });
	}
}


function* postConfess () {
	const payload = yield select(getConfess);
	return fetchFromFirebase().add({
		absolve: 0,
		condemn: 0,
		confession: payload.confess,
		date_added: new Date()
	});
}


function* postConfessSaga() {
	try { 
		const payload = yield call(postConfess);
		yield put({ type: "POST_SUCCESS" });
		yield put({ type: "API_CALL_REQUEST" });
	} catch (error) {
		yield put({ type: "POST_FAIL", error});
	}
}

function* sortConfess () {
	const payload = yield select(sortFromCategory);
	yield put({ type: "SORT_CONFESSIONS", payload})
	
}

export function* watcherSaga() {
	yield takeLatest(API_CALL_REQUEST, fetchDocsSaga);
	yield takeLatest("POST_REQUEST", postConfessSaga);
	yield takeEvery(CHANGE_CATEGORY, sortConfess);
}

export const changeCategory = (payload) => ({
	type: CHANGE_CATEGORY,
	payload
});

export const changeConfessForm = (payload) => ({
	type: "CHANGE_CONFESS_FORM",
	payload
});



