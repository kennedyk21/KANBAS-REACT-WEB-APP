function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a: number) => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);
    return(

        <div>
            <h2>array</h2>
            {numberArray1.map((value) => {
                return <p> {value}</p>;
            })}

            {squares.map((value) => {
                return <p> {value}</p>;
            })}

            {cubes.map((value) => {
                return <p> {value}</p>;
            })}

        </div>
    );




};export default MapFunction;