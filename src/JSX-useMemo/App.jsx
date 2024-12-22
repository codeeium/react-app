import React, {useState} from 'react';
import ExpensiveCal from "./Expensive-Cal.jsx";
import App_filter_list from "./Filtered-List.jsx";
import ParentComponent from "./Parent-child.jsx";
import LayoutEffectExample from "./LayoutEffectExample.jsx";
// import LargeListComponent from "./LargeListComponent.jsx";

const App = () => {

    const [items] = useState([10, 20, 30, 40, 50]);

    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <ExpensiveCal/>
            {/*<App_filter_list/>*/}
            {/*<ParentComponent/>*/}
            {/*<LayoutEffectExample/>*/}
            {/*<LargeListComponent/>*/}
        </div>
    );
};

export default App;
