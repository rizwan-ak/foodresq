import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import Signin from "../screens/Signin";
import Signup from "..//screens/Signup";
import Welcome from "..//screens/Welcome";
import Discover from "..//screens/Discover";
import Favourites from "..//screens/Favourites";
import Browse from "..//screens/Browse";
import Profile from "..//screens/Profile";
import Restaurant from "..//screens/Restaurant";
import Orders from "..//screens/Orders";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack hideNavBar key="root">
          <Scene key="welcome" component={Welcome} initial />
          <Scene key="signin" component={Signin} />
          <Scene key="signup" component={Signup} />
          <Scene key="discover" component={Discover} />
          <Scene key="favourites" component={Favourites} />
          <Scene key="browse" component={Browse} />
          <Scene key="profile" component={Profile} />
          <Scene key="restaurant" component={Restaurant} />
          <Scene key="orders" component={Orders} />
        </Stack>
      </Router>
    );
  }
}
