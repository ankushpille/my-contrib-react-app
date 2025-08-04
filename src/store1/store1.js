import { createStore } from 'redux';
import {countReducer} from '../redux/reducers'

export const store = createStore(countReducer)