import React from 'react';

interface State {
  shouldThrow: boolean;
}

class ErrorButton extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      shouldThrow: false,
    };
  }

  handleClick = () => {
    this.setState({ shouldThrow: true });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error('Test error thrown from render()');
    }

    return (
      <div className="mt-8 text-center">
        <button
          onClick={this.handleClick}
          className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 transition"
        >
          Throw Error
        </button>
      </div>
    );
  }
}

export default ErrorButton;
