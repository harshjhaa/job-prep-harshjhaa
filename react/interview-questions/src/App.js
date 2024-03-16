import "./App.css";
import ContextApiComponent from "./ContextApi/LocalApp";
import PaginatedTableComponent from "./PaginatedTable/PaginatedTableComponent";
import PostsComponent from "./PostsAndComment/PostsComponent";
import AutoCompleteComponent from "./AutoComplete/AutoCompleteComponent";
import Carousal from "./Carousal/LocalApp";
import HocTooltip from "./HocTooltip/LocalApp";
import RenderPropsInput from "./RenderPropsInput/LocalApp";
import StarRating from "./StarRating/LocalApp";

function App() {
  return (
    <div className="App">
      {/* <PaginatedTableComponent /> */}
      {/* <PostsComponent /> */}
      {/* <AutoCompleteComponent /> */}
      {/* <ContextApiComponent /> */}
      {/* <Carousal /> */}
      {/* <HocTooltip />/ */}
      {/* <RenderPropsInput /> */}
      <StarRating />
    </div>
  );
}

export default App;
