import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

// import { Container } from './styles';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
