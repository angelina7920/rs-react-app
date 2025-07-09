import React from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

class SearchInput extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search characters..."
        className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
}

export default SearchInput;
