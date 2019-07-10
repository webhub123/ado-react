import React from 'react'
import Loadable from 'react-loadable'

const Loading = ({ error }) => {
    if (error) return <h3>Error Loading</h3>
    return 'Loading...'
}

export const Header = Loadable({ loader: () => import('./shared/includes/header'), loading: Loading });
export const Footer = Loadable({ loader: () => import('./shared/includes/footer'), loading: Loading });

export const HomePage = Loadable({ loader: () => import('./home/components/index'), loading: Loading });
export const LoginPage = Loadable({ loader: () => import('./login/components/login'), loading: Loading });
export const ErrorPage = Loadable({ loader: () => import('./shared/error-pages/errorPageNotFound'), loading: Loading });
export const RegisterPage = Loadable({ loader: () => import('./register/components/register'), loading: Loading });
export const CreateProfile = Loadable({ loader: () => import('./profile/containers/CreateProfile'), loading: Loading });
export const EditProfile = Loadable({ loader: () => import('./profile/containers/EditProfile'), loading: Loading });
export const ProfileLists = Loadable({ loader: () => import('./profile/containers/ProfileLists'), loading: Loading });

export const TestPage = Loadable({ loader: () => import('./test/components/TestPage'), loading: Loading });
export const LayoutPage = Loadable({ loader: () => import('./test/components/LayoutPage'), loading: Loading });
export const ChatPage = Loadable({ loader: () => import('./chat/components/ChatPage'), loading: Loading });