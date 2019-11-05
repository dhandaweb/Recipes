import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import  recipeWatch  from './saga';
const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState={}) {
    
    const store = createStore(
   rootReducer,
   initialState,
   compose(applyMiddleware(sagaMiddleware),
   ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) as any
   )
 );
 sagaMiddleware.run(recipeWatch);
 return store;
 
}