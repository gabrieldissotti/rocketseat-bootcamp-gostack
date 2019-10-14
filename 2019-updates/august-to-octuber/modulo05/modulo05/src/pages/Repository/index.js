/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaFilter } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner, IssueList, Filter, Paginate } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filter } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  async componentDidUpdate(_, prevState) {
    const { filter, page } = this.state;
    if (prevState.filter !== filter || prevState.page !== page) {
      const { match } = this.props;

      const repoName = decodeURIComponent(match.params.repository);

      const issues = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          page,
          per_page: 5,
        },
      });

      this.setState({ issues: issues.data });
    }
  }

  handleSelectChange = async e => {
    const op = e.target.value;

    this.setState({ filter: op });
  };

  handleNextPage = () => {
    const { page } = this.state;

    this.setState({ page: page + 1 });
  };

  handlePreviousPage = () => {
    const { page } = this.state;

    this.setState({ page: page - 1 });
  };

  render() {
    const { repository, issues, loading, filter, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/"> Voltar aos repositorios </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <Filter>
          <p>
            <FaFilter />
            Estado:
          </p>
          <select onChange={this.handleSelectChange}>
            <option value="all" selected={filter === 'all'}>
              All
            </option>
            <option value="open" selected={filter === 'open'}>
              Open
            </option>
            <option value="closed" selected={filter === 'closed'}>
              Closed
            </option>
          </select>
        </Filter>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Paginate>
          <span>Page {page}</span>
          <button
            type="button"
            disabled={page === 1}
            onClick={this.handlePreviousPage}
          >
            Voltar
          </button>
          <button type="button" onClick={this.handleNextPage}>
            Próximo
          </button>
        </Paginate>
      </Container>
    );
  }
}
