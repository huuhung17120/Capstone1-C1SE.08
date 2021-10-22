import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WritePost from '../../components/WritePost';
import Home from '../../pages/HomePage';
import HoiDap from '../../pages/HoiDap';
import CuuTro from '../../pages/CuuTro';
import Shop from '../../pages/Shop';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/hoidap'>
                <HoiDap />
            </Route>
            <Route exact path='/cuutro'>
                <CuuTro />
            </Route>
            <Route exact path='/shop'>
                <Shop />
            </Route>
            <Route exact path='/create'>
                <WritePost />
            </Route>
        </Switch>
    </main>
)

export default Main;