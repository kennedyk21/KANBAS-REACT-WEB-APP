
function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    const variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    return(
        <div>
            <h2>array</h2>
            {variableArray1.map((_value) => {
                return <p> value</p>;
            })}
        </div>
    );
};
export default WorkingWithArrays;