import Progressbox from "./Components/Progressbox";
import Progresspage from "./Components/Progresspage";
import { useDispatch, useSelector } from "react-redux";
import { EDITINGS } from "./redux/user/userActions";
function App() {
  return (
    <div className="overflow-hidden">
      <Progressbox />
    </div>
  );
}
export default App;
