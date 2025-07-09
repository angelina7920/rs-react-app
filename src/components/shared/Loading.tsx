import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-500 mr-5">Loading</span>
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }
}

export default Loading;
