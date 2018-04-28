import db from '../../firebase';
import { put, takeEvery } from 'redux-saga/effects'

//Code that works with thunk

export function* fetchFromFirebase () {
	var data = [];
    db.collection('confessions').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
			data.push(doc);
		})
	});
	fetchData(data);
}

const fetchData = (payload) => ({
    type: "GET_TODO",
    payload
});

// Following 2.1 of Saga Documentation

// export function* fetchFromFirebase() {
//		var data = []
//     const fetchUser = db.collection('confessions').get().then((querySnapshot) => {
// 			querySnapshot.forEach((doc) => {
// 				data.push(doc);
//			})
//		 }
//     const payload = yield call(fetchUser);
//     yield put({ type: "FETCH_DATA", data });
// }

// export default function* rootSaga() {
//     yield takeLatest("FETCH_DATA", fetchData);
// }
