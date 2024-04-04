
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Labs from "./Labs";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/kanbas"/>}/>
          <Route path="/kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*" element ={<Labs/>}/>
        </Routes>
      </div>
    </HashRouter>
);}
export default App;