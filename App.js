import React, {useCallback, useEffect, useState} from 'react';

import NavigatorComponent from "./src/NavigatorComponent";
import {Provider, useDispatch} from "react-redux";
import store from "./src/redux/store";
import Navigator from "./src/containers/Navigator";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);


const App = () => {

    return (
            <Provider store={store}>
              <Navigator/>
            </Provider>
        );
};


export default App;
