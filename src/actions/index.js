import db from '../../firebase';
import { call, put, takeLatest } from 'redux-saga/effects';

export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

function fetchFromFirebase() {
    return db.collection('confessions').get();
}

async function getDocsfromFetch(){
	let docsArray = [];
	const response = fetchFromFirebase();
	await response.then((querySnapshot) => {
		var docs = querySnapshot.docs;
		for(let doc of docs) {
			docsArray.push(doc.data());
		}
	});
	return docsArray;
}
//saga functions

export function* watcherSaga() {
	yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function* workerSaga () {
	try {
		const payload = yield call(getDocsfromFetch);
		yield put({ type: "API_CALL_SUCCESS", payload});
	} catch (error) {
		yield put({ type: "API_CALL_FAILURE", payload: error });
	}
}
