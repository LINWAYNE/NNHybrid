import { combineReducers } from 'redux';
import { rootCom, RootNavigator } from '../Navigator/AppNavigator';
// import home from '../Section/Home/HomeReducer';

/**
 * 1.create default navigation state
 */
const defaultNavState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2.create navigation reducer，
 */
const navReducer = (state = defaultNavState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

/**
 * 3.combine all reducers in project
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
export default combineReducers({
    nav: navReducer,
    // home: home,
});