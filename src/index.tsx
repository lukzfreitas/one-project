import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ExempleDialog from './components/Modal/ExampleDialog/ExempleDialog';
import Select from './components/Form/Select';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onChanged = (event: any) => {
  console.log(event);
};

root.render(
  <React.StrictMode>
    <ExempleDialog />
    <Select
      options={[
        { value: 'test_1', label: 'Test 1', selected: false },
        { value: 'test_2', label: 'Test 2', selected: false },
        { value: 'test_3', label: 'Test 3', selected: false },
      ]}
      onChange={(e: any) => onChanged(e)}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
