import React, { Component } from "react";

import { WebView } from "react-native-webview";

export default class WebPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("repo").name,
  });

  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <WebView
        source={{
          uri: navigation.getParam("repo").html_url,
        }}
      />
    );
  }
}
