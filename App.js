import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import ClassComponent from './components/ClassComponent';
import JsxExpression from './components/JsxExpression';
import JsxStyling from './components/JsxStyling';
import StatelessComponent from './components/StatelessComponent';
import StatefulComponent from './components/StatefulComponent';
import StatefulComponentNew from './components/StatefulComponentNew';
import PropsDemo from './components/PropsDemo';
import StateAndProps from './components/StateAndProps';
import ChangeComponentOnNewProps from './components/ChangeComponentOnNewProps';

function App() {
  return (
    <div className="App">
     
       { /*<First></First>
        <Second></Second>
        <ClassComponent></ClassComponent>
        <JsxExpression></JsxExpression>
       <JsxStyling></JsxStyling>*/}
      <StatelessComponent></StatelessComponent>
        <StatefulComponent></StatefulComponent>
        <StatefulComponentNew></StatefulComponentNew>
        <PropsDemo name="props Demo"></PropsDemo>
        <StateAndProps></StateAndProps>
        <ChangeComponentOnNewProps></ChangeComponentOnNewProps>
    </div>
    
  );
}

export default App;
