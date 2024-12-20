import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UIForm from './UI-Form.jsx';

const App = () => (
    <Provider store={store}>
        <UIForm />
    </Provider>
);

export default App;
