import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import useAuthenticated from 'hooks/useAthenticated';
import { Characters as StyledCharacters, AccordionFullWidth } from 'pageStyles/characters.styles';
import { CharactersContext } from 'context/CharactersContext';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const Characters = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<number | null>(null);
  const { characters } = useContext(CharactersContext);
  useAuthenticated(router);
  const handleAccordionChange = (characterId: number) => {
    setExpanded(expanded === characterId ? null : characterId);
  };

  return (
    <StyledCharacters>
      <h1>Meus Personagens</h1>
      <>
        {characters.map((character) => (
          <AccordionFullWidth
            expanded={expanded === character.id}
            onChange={() => handleAccordionChange(character.id)}
            key={character.id}
          >
            <AccordionSummary expandIcon={expanded === character.id ? <Remove /> : <Add />}>
              {character.name}
            </AccordionSummary>
            <AccordionDetails>{character.description}</AccordionDetails>
          </AccordionFullWidth>
        ))}
      </>
    </StyledCharacters>
  );
};

export default Characters;
