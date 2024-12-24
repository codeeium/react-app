import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Button_Text_field from './Form_Button_Text_field.jsx';
import MyCardWithDialog from "./MyCardWithDialog.jsx";
import MyResponsiveForm from "./MyResponsiveForm.jsx";
import MyResponsiveNavBar from "./MyResponsiveNavBar.jsx";
import MyDataTable from "./MyDataTable.jsx";
import MyCardLayout from "./MyCardLayout.jsx";
import MyStepper_Form from "./MyStepper_Form.jsx";
import MyDialogForm from "./MyDialogForm.jsx";
import MyForm_Password from "./MyForm_Password.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<Button_Text_field/>*/}
        {/*<MyForm/>*/}
        {/*<MyCardWithDialog/>*/}
        {/*<MyResponsiveForm/>*/}
        {/*<MyResponsiveNavBar/>*/}
        {/*    <MyDataTable/>*/}
        {/*    <MyCardLayout/>*/}
        {/*    <MyStepper_Form/>*/}
        {/*    <MyDialogForm/>*/}
            <MyForm_Password/>
    </StrictMode>
);
