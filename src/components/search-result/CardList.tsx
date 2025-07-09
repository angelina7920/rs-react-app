import React from 'react';
import Card from './Card';
import type { Character } from '../../interfaces/character.interface';

interface Props {
  characters: Character[];
}

class CardList extends React.Component<Props> {
  render() {
    const { characters } = this.props;

    if (characters.length === 0) {
      return (
        <div className="text-center text-gray-500 mt-6">No results found.</div>
      );
    }

    return (
      <div className="grid gap-4">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    );
  }
}

export default CardList;
