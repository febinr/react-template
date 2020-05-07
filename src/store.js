import { init } from "@rematch/core";
import { routerMiddleware } from "connected-react-router";
import routerReducer from './routerReducer';
import * as models from './models'

var createHistory = require('history').createBrowserHistory;
export const history = createHistory();


const store = init({
  models,
  redux: {
    reducers:{
        router: routerReducer(history),
    },
    middlewares: [routerMiddleware(history)],
  }
});

export default store;
