import React from 'react';

import UseReduer_Counter from './TSX/UseReduer_Counter';
import UseState_Counter from './TSX/UseState_Counter';
import UseEffect_FetchData from './TSX/UseEffect_FetchData';
import UseContext from "./TSX/UseContext_Themed";
import FocusInput from "./TSX/UseRef_FocusInput";
import UseMemoApp from "./TSX/UseMemo";
import UseCallBack from "./TSX/UseCallback";
// const TSAppWithFormat: React.FC = () => {
const AppWithFormat:React.FC = () => {
    return (
        <>
            <UseState_Counter />
            <UseReduer_Counter />
            <UseEffect_FetchData />
            <UseContext />
            <FocusInput />
            <UseMemoApp />
            <UseCallBack/>
        </>
    );
};

export default AppWithFormat;
