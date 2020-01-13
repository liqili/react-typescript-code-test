import * as React from 'react'
import PinComponent from '../../components/pin';
import { useStoreReducer } from '../../store/default';
import { addPin } from '../../actions/pin';


const GenerateView: React.FC = () => {

    const { dispatch } = useStoreReducer();
    return (<PinComponent name='' id={12} enableSave={true} onSave={(name: string, values: Array<string>) => dispatch(addPin({name:name,values:values}))}></PinComponent>);
}


export default GenerateView;