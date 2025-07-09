import React from 'react';

interface Props {
  onClick: () => void;
}

class SearchButton extends React.Component<Props> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
