import React from 'react';
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import {CInputForm} from "./components/InputForm";
import store from "./reducers";
import {Provider} from "react-redux";
import {CTaskContainer} from "./components/TasksListContainer";

function App() {
 return(
     <Provider store={store}>
         <Header/>
         <CInputForm/>
         <CTaskContainer/>
     </Provider>
 )
}

export default App;
