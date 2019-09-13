import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import api from "../../services/api";

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from "./styles";

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("user").name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    loading: true,
    page: 1,
    loadedAll: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page: 1,
        per_page: 5,
      },
    });

    this.setState({ stars: response.data, loading: false });
  }

  loadMore = async () => {
    const { page, stars, loadedAll } = this.state;

    if (loadedAll) {
      return;
    }

    this.setState({ loading: true });

    const { navigation } = this.props;

    const user = navigation.getParam("user");

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page: page + 1,
        per_page: 5,
      },
    });

    if (response.data[0] === undefined) {
      this.setState({
        loadedAll: true,
        loading: false,
      });

      return;
    }

    this.setState({
      stars: [...stars, ...response.data],
      page: page + 1,
      loading: false,
    });
  };

  refreshList = async () => {
    this.setState({ loading: true });

    const { navigation } = this.props;

    const user = navigation.getParam("user");

    const response = await api.get(`/users/${user.login}/starred`, {
      params: {
        page: 1,
        per_page: 5,
      },
    });

    this.setState({ stars: response.data, loading: false });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading } = this.state;

    const user = navigation.getParam("user");

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            onRefresh={this.refreshList}
            refreshing={loading}
            renderItem={({ item }) => (
              <Starred>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
