import React from 'react';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProjectPage } from './pages/ProjectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UserPage } from './pages/UserPage';
import { EditProjectPage } from './pages/EditProjectPage';
import { SignUp } from './components/sign/SignUp';
import { isAuthenticated } from './apis/Auth';

interface AppRouterProps {
  component: React.FunctionComponent;
  layout?: React.FunctionComponent;
}

const AppRouter = ({ component: Component, layout: Layout, ...rest }: AppRouterProps | any) => (
  <Route
    {...rest}
    render={(props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const Routes = () => {
  return (
    <Switch>
      <AppRouter exact path="/" layout={LayoutWithHeader} component={HomePage} />
      <AppRouter path="/project/:key" layout={LayoutWithHeader} component={ProjectPage} />
      <AppRouter path="/newproject" layout={LayoutWithHeader} component={EditProjectPage} />
      <AppRouter path="/signup" layout={LayoutWithHeader} component={SignUp} />
      <AppRouter path="/login" layout={LayoutWithoutHeader} component={LoginPage} />
      <AppRouter path="/user" layout={LayoutWithHeader} component={UserPage} />
      <AppRouter layout={LayoutWithoutHeader} component={NotFoundPage} />
    </Switch>
  );
};

const LayoutWithHeader: React.FunctionComponent = (props) => {
  return (
    <div>
      <Header isLogged={isAuthenticated()} />
      {props.children}
    </div>
  );
};

const LayoutWithoutHeader: React.FunctionComponent = (props) => {
  return <div>{props.children}</div>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
