import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import { Provider } from 'react-redux';

import { store, persistor } from '../app-store';
import { PersistGate } from 'redux-persist/integration/react';
import { Header, Footer, HomePage, LoginPage, RegisterPage, CreateProfile, ProfileLists, EditProfile, TestPage, LayoutPage, ChatPage, ErrorPage  } from '../app-loadables'

const routes = () => {  

    return (  
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <React.Fragment>
                        <Header />
                            <Switch>
                                <Route exact path="/" component={ HomePage } />
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
                        <Footer />
                    </React.Fragment>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default routes;