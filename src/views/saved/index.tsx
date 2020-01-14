import * as React from 'react'
import PinComponent from '../../components/pin';
import { useStoreReducer } from '../../store/default';
import { PinType } from '../../interfaces/pin';
import { removePin } from '../../actions/pin';


const SavedView: React.FC = () => {
    const { state, dispatch } = useStoreReducer();

    // console.log(state);

    const onDeleteHandler = (item:PinType)=> (e:React.MouseEvent<HTMLElement>)=>dispatch(removePin(item));

    let elements = state.pins.map((item: PinType, i: number) => (
        <div className='d-flex justify-content-center m-1' key={`div_${i}`}>
            <PinComponent id={item.id} key={`pin_${i}`} name={item.name} values={item.values} ></PinComponent>
            <button type="button" className="btn btn-danger" key={`button_${i}`} onClick={onDeleteHandler(item)}>DELETE</button>
        </div>
    ));
    return <div className='d-flex flex-column m-5'>{elements}</div>;
}


export default SavedView;