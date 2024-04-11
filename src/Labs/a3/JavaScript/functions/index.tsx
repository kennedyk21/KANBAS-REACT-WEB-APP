import React from "react";
import ArrowFunctions from "./ArrowFunctions";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ImpliedReturn from "./ImpliedReturn";
import FunctionDestructing from "./FunctionDestructing";
const WorkingFunctions = () => {
    return (
        <>
            <ArrowFunctions />
            <ES5Functions />
            <FunctionParenthesisAndParameters />
            <ImpliedReturn />
            <FunctionDestructing />
        </>
    );
};
export default WorkingFunctions;