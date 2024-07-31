import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export { store };
