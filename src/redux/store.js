import { configureStore } from "redux"; //configureStore used instead of the deprecated createStore
import reducer from "./reducer";

export default configureStore(reducer);