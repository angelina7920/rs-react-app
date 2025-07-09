import React from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

interface State {
  inputValue: string;
}

interface Props {
  searchTerm?: string;
  onSearch: (value: string) => void;
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputValue: props.searchTerm || '',
    };
  }

  handleInputChange = (value: string) => {
    this.setState({ inputValue: value });
  };

  handleSearch = () => {
    const trimmed = this.state.inputValue.trim();
    this.props.onSearch(trimmed);
  };

  render() {
    return (
      <div className="mb-6 w-full flex justify-center">
        <SearchInput
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <SearchButton onClick={this.handleSearch} />
      </div>
    );
  }
}

export default Header;
