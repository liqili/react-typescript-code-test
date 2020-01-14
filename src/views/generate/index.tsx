import * as React from 'react'
import PinComponent from '../../components/pin';
import { useStoreReducer } from '../../store/default';
import { addPin } from '../../actions/pin';
import { useState } from 'react';
import { PinType } from '../../interfaces/pin';


const GenerateView: React.FC = () => {


    const [pinName, setPinName] = useState('');
    const [pinValues, setPinValues] = useState<string[] | undefined>(undefined);

    const generatePinValues = () => {
        let arr = [];
        let regx = /([0-9])\1+|([^0-9]|012|123|234|345|456|567|678|789)+/;
        while (arr.length < 5) {
            let r = Math.floor(Math.random() * 9000) + 1000;
            if (arr.indexOf(r) === -1 && !regx.test(r.toString())) arr.push(r);
        }
        return arr.map(String);
    }
    const { state: { pins }, dispatch } = useStoreReducer();


    const onSaveHandler = () => {
        if (!pinName) {
            alert('Please enter a name!');
            return;
        }
        if (pinValues && pinValues.length === 5) {
            let joinValue = pinValues.join('-');
            let checkExist = false;
            pins.forEach((item: PinType) => {
                if (item.values && joinValue === item.values.join('-')) {
                    checkExist = true;
                }
            });
            if (!checkExist)
                dispatch(addPin({ name: pinName, values: pinValues }));
            else
                alert(`The pin ${joinValue} already exists!`);
        }
    }

    const onGenerateHandler = () => {
        setPinValues(generatePinValues());
    }


    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <input value={pinName} placeholder='Enter Name' onChange={e => setPinName(e.target.value)} />
                <PinComponent id={12} name='' values={pinValues}></PinComponent>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button type="button" className="btn btn-outline-primary m-1" onClick={onGenerateHandler}>GENERATE</button>
                <button type="button" className="btn btn-primary m-1" onClick={onSaveHandler}>SAVE</button>
            </div>
        </>
    );
}


export default GenerateView;