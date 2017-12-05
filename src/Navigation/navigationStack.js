import { StackNavigator } from "react-navigation";
import Screen1 from "../Components/screen1";
import Screen2 from "../Components/screen2";
import Screen3 from "../Components/screen3";

const navigator = StackNavigator({
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Screen2
  },
  screen3: {
    screen: Screen3
  }
});

export default navigator;
