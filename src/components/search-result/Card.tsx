import React from 'react';
import type { Character } from '../../interfaces/character.interface';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

interface Props {
  character: Character;
}

interface State {
  showStatus: boolean;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showStatus: false,
    };
  }

  toggleStatus = () => {
    this.setState((prevState) => ({
      showStatus: !prevState.showStatus,
    }));
  };

  render() {
    const { name, species, status, image } = this.props.character;
    const { showStatus } = this.state;

    const statusText = showStatus ? status : '🛸🛸🛸';

    return (
      <div className="flex items-center p-4 bg-white rounded-lg shadow mb-4 hover:shadow-md transition">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{species}</p>

          <div className="mt-1 flex items-center text-sm text-gray-700">
            <span className="mr-1 w-[110px]">Status: {statusText}</span>

            <button
              onClick={this.toggleStatus}
              className="text-blue-500 hover:underline"
            >
              {showStatus ? (
                <EyeIcon className="w-5 h-5 text-blue-500 mr-1" />
              ) : (
                <EyeSlashIcon className="w-5 h-5 text-gray-400 mr-1" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
