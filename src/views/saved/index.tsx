import * as React from 'react'
import PinComponent from '../../components/pin';
import { useStoreReducer } from '../../store/default';
import { PinType } from '../../interfaces/pin';


const SavedView: React.FC = () => {
    const { state } = useStoreReducer();
    // dispatch(addPin({
    //     id: 1,
    //     name: 'testtest',
    //     values: ['1112', '1112', '1113', '1114'],
    // }));

    let elements = state.pins.map((item: PinType, i:number) => (<PinComponent id={item.id} key={i} name={item.name} values={item.values} enableDelete={true} readOnly={true}></PinComponent>));
    return <div className='d-flex flex-column'>{elements}</div>;
}


export default SavedView;