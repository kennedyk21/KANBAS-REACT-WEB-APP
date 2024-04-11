function ArrayIndexAndLength(){
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    return( 
        <div>
            <h2>Array Index and Length</h2>
            <p>Length of numberArray1 is {length1}</p>
            <p>Index of 3 in numberArray1 is {index1}</p>
        </div>

    );
};
export default ArrayIndexAndLength;