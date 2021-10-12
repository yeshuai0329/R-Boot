import React from 'react'
import ReactDOM from 'react-dom'
import AppProviders from 'components/AppProviders/AppProviders'
import 'antd/dist/antd.less'
import './styles/reset.less'
import './styles/globalAntd.module.less'
import App from './pages/App'
import EntryScreen from 'pages/EntryScreen/EntryScreen'
import { Redirect, Route, Switch } from 'react-router-dom'
import Cookies from 'js-cookie'

ReactDOM.render(
  <AppProviders>
    <Switch>
      <Route path='/login' component={EntryScreen}/>
      <Route path='/' render={() => Cookies.get('R-Boot-token') ? <App /> : <Redirect to='/login'/>}/>
    </Switch>
  </AppProviders>,
  document.getElementById('root')
)
