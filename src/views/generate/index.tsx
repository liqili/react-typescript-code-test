import * as React from 'react'
import PinComponent from '../../components/pin';
import { useStoreReducer } from '../../store/default';
import { addPin } from '../../actions/pin';
import { useState } from 'react';


const GenerateView: React.FC = () => {


    const [pinName, setPinName] = useState('');
    const [pinValues, setPinValues] = useState<string[]|undefined>(undefined);

    // const onSaveClickHandler = () => {
    //     let pinValues: string[] = [];
    //     if (onSave)
    //         onSave(pinName, pinValues);
    // }

    const generatePinValues = ()=>{
        return ['7635','7635','7635','7635','7635'];
    }


    const onGenerateHandler = () => {
        setPinValues(generatePinValues());
    }

    const { dispatch } = useStoreReducer();

    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <input value={pinName} placeholder='Enter Name' onChange={e => setPinName(e.target.value)} />
                <PinComponent id={12} name='' values={pinValues}></PinComponent>
            </div>
            <div className="d-flex justify-content-center mt-2">
                <button type="button" className="btn btn-outline-primary m-1" onClick={onGenerateHandler}>GENERATE</button>
                <button type="button" className="btn btn-primary m-1" onClick={e => pinName && pinValues && pinValues.length === 5 && dispatch(addPin({ name: pinName, values: pinValues }))}>SAVE</button>
            </div>
        </>
    );
}


export default GenerateView;