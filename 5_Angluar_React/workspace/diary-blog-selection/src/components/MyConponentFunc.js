import React, { useState } from "react";

// function MyComponentFunc(props) {
// const MyComponentFunc = (props) => {
const MyComponentFunc = ({irum, children}) => {
        let [item, setItem] = useState(9);

        return (
            <div>
                <h3>나는 {irum}</h3>
                {children}
            </div>
        );
    }

function MyComponentFunc2() {

    return (
        <div>
            <h3>나는 다른 컴포넌트입니다.</h3>
            {children}
        </div>
    );
}

function MyComponentFunc3() {

    return (
        <div>
            <h3>나는 다른 컴포넌트입니다.</h3>
            {children}
        </div>
    );
}

export default {MyComponentFunc, MyComponentFunc2, MyComponentFunc3};