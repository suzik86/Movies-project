import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import One from '../src/components/One';
import Two from '../src/components/Two';
import Three from '../src/components/Three';

function App(props) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <One />
            <Two />
            <Three />
            <div id="four"></div>
            <div>
                {counter}
            </div>
            <button onClick={() => setCounter(counter + 1)}>Testing</button>
        </>
    );
}

export default hot(App);