import { createReducer } from "..";
import * as types from '../../actions/pin/types';
import { PinType } from '../../interfaces/pin';


const add = (state: { pins: PinType[]; }, { payload }: any) => ({
  ...state,
  pins: [...state.pins, payload.pin],
});

const remove = (state: { pins: PinType[]; }, { payload }: any) => ({
  ...state,
  pins: state.pins.filter((t: { id?: number; }) => t.id !== payload.pin.id),
});


export default createReducer({
  [types.ADD_PIN]: add,
  [types.REMOVE_PIN]: remove,
});

