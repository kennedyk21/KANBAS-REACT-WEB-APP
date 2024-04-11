function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    // This is a module, so we need to export something
    return(
        <>
        <h3>Implied return</h3>
        fourTimesFive = {fourTimesFive}<br />
        multiply(4, 5) = {fourTimesFive}<br />
        </>
);
}

export default ImpliedReturn;