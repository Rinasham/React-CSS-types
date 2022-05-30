import "./styles.css";
import { StyledJSX } from "./StyledJSX";
import { CSSModules } from "./CSSModules";
import { StyledComponent } from "./StyledComponent";
import { Emotion } from "./Emotion";

export default function App() {
  return (
    <div className="App">
      <CSSModules />
      <StyledJSX />
      <StyledComponent />
      <Emotion />
    </div>
  );
}
