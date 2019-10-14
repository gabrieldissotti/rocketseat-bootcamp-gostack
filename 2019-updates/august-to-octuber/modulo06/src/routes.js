import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import User from "./pages/User";
import WebPage from "./pages/WebPage";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      WebPage,
    },
    {
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#7159c1",
        },
        headerTintColor: "#fff",
      },
    }
  )
);

export default Routes;