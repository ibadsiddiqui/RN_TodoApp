import {AsyncStorage} from 'react-native'
import {createStore, compose} from 'redux';
import {autoRehydrate, persistStore} from 'redux-persist' 
import reducer from '../reducer';

let defaultStore = { todos: [] };

exports.configureStore = (initialState = defaultStore) => {
    var store = createStore(reducer, initialState, compose(
        autoRehydrate()
    ));
    persistStore(store, {storage: AsyncStorage});
    return store
}