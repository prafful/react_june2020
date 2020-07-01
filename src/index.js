//component container
//job is to render root or any other components supplied to it!

import ReactDOM from 'react-dom'
import React from 'react'
import { FirstComponent } from "./components/rootcomponent";
import MyDummyComponent from './components/dummy';
import ReviewContainer from './parent-child/reviewcontainer';
import LifeCycle from './component-lifecycle/lifecycle';
import ConsumeUser from './consumeapi/consume';

var location = document.getElementById('myroot')

ReactDOM.render(<div>
                    <ConsumeUser></ConsumeUser>
                    <LifeCycle></LifeCycle>
                    <ReviewContainer></ReviewContainer>
                    <FirstComponent message="All which looks HTML is not HTML" score="88" color="red">first</FirstComponent>
                    <FirstComponent message="React uses JSX in render function!" score="8" color="green">second</FirstComponent>
                    <FirstComponent message="JSX is mix of JS and XML(HTML!)" score="17" color="blue">third</FirstComponent>
                    <FirstComponent message="React is easy!" score="92" color="purple">fourth</FirstComponent>
                    <MyDummyComponent></MyDummyComponent>
                </div>, location)

