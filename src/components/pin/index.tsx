import * as React from 'react'
import { PinType } from '../../interfaces/pin';
import { useState } from 'react';
interface PinProps extends PinType {
    enableSave?: boolean,
    enableDelete?: boolean,
    readOnly?:boolean,
    onSave?: (name:string, values: Array<string>) => void,
    onDelete?: (id: number, values: Array<string>) => void,
}
const PinComponent: React.FC<PinProps> = ({ id=1, name, values = ['', '', '', ''], enableSave = false, enableDelete = false, onSave, onDelete,...rest }) => {

    const [pinValues, setPinValues] = useState(values);

    const [pinName, setPinName] = useState(name);

    const onSaveClickHandler = () => {
        let pinValues: string[] = [];
        if (onSave)
            onSave(pinName, pinValues);
    }

    const onDeleteClickHandler = () => {
        let pinValues: string[] = [];
        if (onDelete)
            onDelete(id, pinValues);
    }

    const onPinValueChangeHandler = (value: string, index: number) => {
        let clonedPinValues = [...pinValues]
        clonedPinValues[index] = value;
        console.log(clonedPinValues);
        setPinValues(clonedPinValues);
    }

    let result = values.map((item: string, i: number) => (<input {...rest} type="text" key={i} value={pinValues[i]} onChange={e => onPinValueChangeHandler(e.target.value, i)}></input>));
    return <div className='d-flex'>
        <input value={pinName} onChange={e=>setPinName(e.target.value)} />
        {result}
        {enableSave ? <button onClick={onSaveClickHandler}>SAVE</button> : ''}
        {enableDelete ? <button onClick={onDeleteClickHandler}>DELETE</button> : ''}
    </div>;
}


export default PinComponent;