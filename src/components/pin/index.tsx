import * as React from 'react'
import { PinType } from '../../interfaces/pin';

interface PinProps extends PinType {
}
const PinComponent: React.FC<PinProps> = ({ id = 1, name, values = ['', '', '', '', ''], ...rest }) => {

    let elements = values.map((item: string, i: number) => (<input {...rest} type="text" key={i} readOnly value={values[i]}></input>));
    return <div className='d-flex'>
        {name ? <input value={name} readOnly/> : ''}
        {elements}
    </div>;
}


export default PinComponent;