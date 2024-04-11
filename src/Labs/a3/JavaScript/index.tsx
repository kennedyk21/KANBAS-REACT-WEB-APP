import VariablesAndConstants
  from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/VariableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import WorkingWithFunctions from "./conditionals";
import WorkingFunctions from "./functions";
import Jsoon from "./json"; // Import the Jsoon component
import TemplateLiterals from "./string/TemplateLiterals";

function JavaScript() {
    console.log("Hello from JavaScript");
    return(
       <div>
          <h1>JavaScript</h1>
          <WorkingFunctions/>
          <WorkingWithFunctions/>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <TemplateLiterals/>
          <Jsoon/> 
       </div>
    );
 }
 export default JavaScript