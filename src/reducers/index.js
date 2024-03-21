import { combineReducers } from 'redux';
import showInvoice from './showInvoice';
import addInvoice from './addInvoice';
import showGraph from './showGraph';

export default combineReducers({
    showInvoice,
    addInvoice,
    showGraph,
});
