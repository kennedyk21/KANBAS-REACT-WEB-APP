function ForLoops(){
    let stringArray1 = ['string1', 'string3'];
    let stringArray2 = [];
    for (let i = 0;
         i < stringArray1.length;
         i++) {
      const string1 = stringArray1[i];
      stringArray2.push(
        string1.toUpperCase());
    }
    return(
        
        <div>
            <h2>array</h2>
            {stringArray1.map((_value) => {
                return <p> value</p>;
            })}

            {stringArray2.map((_value) => {
                            return <p> value</p>;
                        })}


        </div>

    );
}; export default ForLoops;