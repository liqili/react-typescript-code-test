import * as types from './types';
import { PinType } from '../../interfaces/pin';

export const addPin = (pin:PinType) => ({ type: types.ADD_PIN, payload: { pin } });

export const removePin = (pin:PinType) => ({ type: types.REMOVE_PIN, payload: { pin } });

