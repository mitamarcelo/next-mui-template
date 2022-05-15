import React, { createContext, useEffect, useState } from 'react';
import { PropsWithChildren } from 'types';
import { charactersMock } from 'utils/mocks/characters';

type CharactersContextType = {
  characters: Character[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

export const CharactersContext = createContext<CharactersContextType>({
  characters: [],
});

const CharactersProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setCharacters(charactersMock);
  }, []);

  return <CharactersContext.Provider value={{ characters }}>{children}</CharactersContext.Provider>;
};

export default CharactersProvider;
