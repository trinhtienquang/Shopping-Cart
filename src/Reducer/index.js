import {combineReducers} from 'redux';
import cart from './cart';
import ListProduct from './ListProduct';
import notify from './notify';

const reducer = combineReducers({
    ListProduct:ListProduct,
    notify:notify,
    cart:cart,
});

export default reducer;