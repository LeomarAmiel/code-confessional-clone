import db from '../../firebase';
import { put, takeEvery } from 'redux-saga/effects'

// export function* fetchFromFirebase () {
//     db.collection('todos').doc('TMts7PEm7oyYJAMk0nVQ').get()
//         .then((doc) => (
//             fetchData(doc.data().todo)
//         ))
//         .catch(err => console.log(err))
// };

const fetchData = (payload) => ({
    type: "GET_TODO",
    payload
});
