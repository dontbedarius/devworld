import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme/Theme';
import { GlobalStyles } from './components/theme/GlobalStyles';
import { useDarkMode } from './components/theme/UseDarkMode';
import ScrollToTop from './components/theme/ScrollToTop';
//====Redux====/
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const [theme, setTheme] = useDarkMode();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const [lightMode, setMode] = useState(false);
  const light = (
    <div>
      <i class='far fa-sun'></i> Light Mode
    </div>
  );
  const dark = (
    <div>
      <i class='far fa-moon'></i> Dark Mode
    </div>
  );
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Fragment>
            <Navbar />
            <button
              className='navbar2 top-dark2'
              onClick={() => {
                themeToggler();
                setMode(!lightMode);
              }}
            >
              <div>{lightMode ? light : dark}</div>
            </button>

            <Route exact path='/' component={Landing} />
            <section>
              <Alert />
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profiles' component={Profiles} />
                <Route exact path='/profile/:id' component={Profile} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute
                  exact
                  path='/create-profile'
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path='/edit-profile'
                  component={EditProfile}
                />
                <PrivateRoute
                  exact
                  path='/add-experience'
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path='/add-education'
                  component={AddEducation}
                />
                <PrivateRoute exact path='/posts' component={Posts} />
                <PrivateRoute exact path='/posts/:id' component={Post} />
              </Switch>
            </section>
            <ScrollToTop />
          </Fragment>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
