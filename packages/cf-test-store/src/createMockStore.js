import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export default state => configureStore([thunk])(state);
