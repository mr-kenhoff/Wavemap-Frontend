import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { HeaderContainer, HeatmapContainer, ProgressBarContainer } from 'containers'

import * as styles from './App.less'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className={styles.appRoot}>
                    <HeaderContainer/>
                    <HeatmapContainer/>
                    <ProgressBarContainer/>
                </div>
            </Router>
        )
    }
}

export default App
