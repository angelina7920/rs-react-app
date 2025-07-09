import React from 'react';
import Header from '../header/Header';
import Loading from '../shared/Loading';
import CardList from './CardList';
import type { Character } from '../../interfaces/character.interface';

interface State {
  searchTerm: string;
  characters: Character[];
  loading: boolean;
  error: string | null;
}

class Main extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    const storedTerm = localStorage.getItem('searchTerm') || '';

    this.state = {
      searchTerm: storedTerm,
      characters: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchCharacters(this.state.searchTerm);
  }

  fetchCharacters = async (term: string) => {
    this.setState({ loading: true, error: null });

    const query = term ? `?name=${encodeURIComponent(term)}` : '';
    const url = `https://rickandmortyapi.com/api/character${query}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ characters: data.results, loading: false });
    } catch (err: unknown) {
      console.error(err);
      this.setState({
        error: 'Nothing was found for your request. Please try again.',
        characters: [],
        loading: false,
      });
    }
  };

  handleSearch = (newTerm: string) => {
    localStorage.setItem('searchTerm', newTerm);
    this.setState({ searchTerm: newTerm });
    this.fetchCharacters(newTerm);
  };

  render() {
    const { characters, loading, error, searchTerm } = this.state;

    return (
      <div className="w-full max-w-4xl">
        <Header searchTerm={searchTerm} onSearch={this.handleSearch} />

        {loading && <Loading />}

        {error && <div className="text-red-600 text-center my-6">{error}</div>}

        {!loading && !error && <CardList characters={characters} />}
      </div>
    );
  }
}

export default Main;
