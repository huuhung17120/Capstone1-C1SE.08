import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WritePost from '../../components/WritePost';
import Home from '../../pages/HomePage';
import HoiDap from '../../pages/HoiDap';
import CuuTro from '../../pages/CuuTro';
import Shop from '../../pages/Shop';
import HomePostDetail from '../../pages/HomePostDetail';
import User from '../../pages/User';
import CuuTroPostDetail from '../../pages/CuuTroPostDetail';
import HoiDapPostDetail from '../../pages/HoiDapPostDetail';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/home'>
                <Home />
            </Route>
            <Route exact path='/hoidap'>
                <HoiDap />
            </Route>
            <Route exact path='/cuutro'>
                <CuuTro />
            </Route>
            <Route path='/shop'>
                <Shop />
            </Route>
            <Route path='/create'>
                <WritePost />
            </Route>

            <Route path='/home/:id'>
                <HomePostDetail />
            </Route>
            <Route path='/cuutro/:id'>
                <CuuTroPostDetail />
            </Route>
            <Route path='/hoidap/:id'>
                <HoiDapPostDetail />
            </Route>
            <Route path='/user'>
                <User />
            </Route>
        </Switch>
    </main>
)

export default Main;