//imported to combine your reducers into the root-reducer.
import { combineReducers } from "redux";

//imports persist reducer.
import { persistReducer } from "redux-persist";

//gives us our local storage object on our window browser. Session storage is from another package library.
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root", //meaning at what point of our reducer object do we want to start storing everything.
    storage, //storage key goes to whatever storage from redux persist is set.
    whitelist: [
        "cart",
    ] /* contains the string names of any reducers that we want to store locally. Cart is
    set here only because the user reducer is handled by the firebase store.  */,
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
