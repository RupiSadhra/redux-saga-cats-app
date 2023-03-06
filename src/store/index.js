import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga/saga";
import { catReducer } from "./slices/catSlice";
import { getCatsSuccess, getCatsFetch, getCatsFailure } from "./slices/catSlice";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cats: catReducer
    },
    middleware: [saga]
});

saga.run(rootSaga);

export default store;
export {getCatsFailure, getCatsFetch, getCatsSuccess };