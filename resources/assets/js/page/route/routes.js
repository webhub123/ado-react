import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import { Provider } from 'react-redux';

import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

import Loadable from 'react-loadable';

import ErrorLoading from '../../page/module/components/error_page/ErrorLoading';   

const Header = Loadable({ loader: () => import('../module/components/includes/header'), loading : ErrorLoading });
const Footer = Loadable({ loader: () => import('../module/components/includes/footer'), loading : ErrorLoading });

const IndexPage = Loadable({ loader: () => import('../../page/module/components/index'), loading : ErrorLoading });
const LoginPage = Loadable({ loader: () => import('../../page/module/components/login'), loading : ErrorLoading });
const ErrorPage = Loadable({ loader: () => import('../../page/module/components/error_page/error_404'), loading : ErrorLoading });
const RegisterPage = Loadable({ loader: () => import('../../page/module/components/register'), loading : ErrorLoading });
const CreateProfile = Loadable({ loader: () => import('../module/containers/CreateProfile'), loading : ErrorLoading });
const EditProfile = Loadable({ loader: () => import('../module/containers/EditProfile'), loading : ErrorLoading });
const ProfileLists = Loadable({ loader: () => import('../module/containers/ProfileLists'), loading : ErrorLoading });

const TestPage = Loadable({ loader: () => import('../module/containers/TestPage'), loading : ErrorLoading });
const LayoutPage = Loadable({ loader: () => import('../module/components/LayoutPage'), loading : ErrorLoading });
const ChatPage = Loadable({ loader: () => import('../module/containers/ChatPage'), loading : ErrorLoading });

const routes = () => {  

    return (  
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <React.Fragment>
                        {/* <Header /> */}
                            <Switch>
                                <Route exact path="/" component={ IndexPage } />
                                <Route exact path="/login" component={ LoginPage } />
                                <Route exact path="/register" component={ RegisterPage } />
                                <Route exact path="/create" component={ CreateProfile } />
                                <Route exact path="/profiles" component={ ProfileLists } />
                                <Route exact path="/edit/:id" component={ EditProfile } />  

                                <Route exact path="/test" component={ TestPage } />  
                                <Route exact path="/layout" component={ LayoutPage } />  
                                <Route exact path="/chat" component={ ChatPage } />  
                                <Route component={ ErrorPage } />
                            </Switch>
                        {/* <Footer /> */}
                    </React.Fragment>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default routes;