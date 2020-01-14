import { createReducer } from "..";
import * as types from '../../actions/pin/types';
import { PinType } from '../../interfaces/pin';


const add = (state: { nextId: number, pins: PinType[]; }, { payload }: any) => ({
  ...state,
  pins: [...state.pins, { ...payload.pin, id: state.nextId}],
  nextId: state.nextId+1
});

const remove = (state: { pins: PinType[]; }, { payload }: any) => ({
  ...state,
  pins: state.pins.filter((t: { id?: number; }) => t.id !== payload.pin.id),
});


export default createReducer({
  [types.ADD_PIN]: add,
  [types.REMOVE_PIN]: remove,
});

