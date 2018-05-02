import db from '../../firebase';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { getConfess } from './selectors';

export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL'

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
		yield put({ type:"API_CALL_REQUEST" });
	} catch (error) {
		yield put({ type: "POST_FAIL", error});
	}
}

export function* watcherSaga() {
	yield takeLatest("API_CALL_REQUEST", fetchDocsSaga);
	yield takeLatest("POST_REQUEST", postConfessSaga);
}



export const changeCategory = (payload) => ({
	type: "CHANGE_CATEGORY",
	payload
});

export const changeConfessForm = (payload) => ({
	type: "CHANGE_CONFESS_FORM",
	payload
});



