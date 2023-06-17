//redux == Frontend ka database
//iss store ko redux store se connect karana padega

//we also use redux toolkit instead of redux thats why "cut line" on createStore.
//use combine reducer for many action(CRUD action)
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducers } from "./reducers/todosReducers";
import { tabReducer } from "./reducers/tabReducer";
//make single reducer
//take object as an argument
const reducer = combineReducers({
  //make reducer with key value pair
  todos: todosReducers,
  currentTab: tabReducer,
});
// initialize thunk
const middleware = [thunk];
//createstore function take two arguments
// 1. reducer -> its an action(update,read,update ,delete) item what you want to do
const store = createStore(
  reducer,
  //middleware yahan pass karna padega apne redux dev tool extension ke saath
  //apne iss store ko redux devtool extension se sync karna padege
  //so install package redux-devtools-extension
  //pass as a second argument
  composeWithDevTools(applyMiddleware(...middleware))
  //for pass middleware install redux-thunk middleware
);
export default store;
//now index.js wrap with store , not directly but with provider
