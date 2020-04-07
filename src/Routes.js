import React, { Component } from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Website from './pages/website';

export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}
            >
                <Scene key="root">
                    <Scene key="website" component={Website} title="Website" />
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={Signup} title="Sign up"/>
                </Scene>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}