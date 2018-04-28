import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const persistConfig = {
	key: 'root',
	storage
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

export function provideStore ( Component ) {
	return class Container extends React.Component {
		render() {
			return (
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Component {...this.props}/>
					</PersistGate>
				</Provider>
			);
		}
	}
}