import React, { Component } from 'react';
import client from '../../../queries/apolloClient';
import { getCategories } from '../../../queries/queries';
import { StyledLink } from '../styles/nav';
import { CategoriesContainer } from '../styles/categories';
import { sendCategory } from '../../../actions';
import { connect } from 'react-redux';

class Categories extends Component {
  constructor() {
    super();
    this.fetchQuery = this.fetchQuery.bind(this);
    this.getSome = this.getSome.bind(this);
    this.state = {
      category: '',
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchQuery();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category) {
      this.fetchQuery();
    }
  }

  getSome(e) {
    const { sendCategory } = this.props;
    this.setState({ category: e.target.textContent });
    sendCategory(e.target.textContent);
    this.fetchQuery();
  }

  async fetchQuery() {
    const result = await client.query({
      query: getCategories,
    });

    this.setState({
      categories: [...result.data.categories],
    });
  }

  render() {
    return (
      <CategoriesContainer>
        {this.state.categories &&
          this.state.categories.map(({ name }, index) => (
            <StyledLink
              to={`/category/${name}`}
              key={index}
              onClick={this.getSome}>
              {name}
            </StyledLink>
          ))}
      </CategoriesContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCategory: (state) => dispatch(sendCategory(state)),
});

export default connect(null, mapDispatchToProps)(Categories);
