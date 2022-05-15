import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import NotImplementedAlert from 'components/Alert/NotImplementedAlert';
import HomeCard from './HomeCard';
import { HomeCardsWrapper } from './HomeCards.styles';

interface ICard {
  text: string;
  route: string;
}

interface ICardMap {
  [key: string]: ICard;
}

const cards: ICardMap = {
  newGame: { text: 'Novo jogo', route: '/new-game' },
  loadGame: { text: 'Carregar jogo', route: '/load-game' },
  missions: { text: 'Encontrar missões', route: '/missions' },
  missionCreator: { text: 'Criar nova missão', route: '/create-mission' },
  store: { text: 'Loja', route: '/store' },
  myCharacters: { text: 'Meus herois', route: '/characters' },
};

const implementedCards: string[] = ['myCharacters'];

const HomeCards = () => {
  const router = useRouter();
  const [nIAlertOpen, setNIAlertOpen] = useState(false);
  const [nIAlertMessage, setNIAlertMessage] = useState('Não implementado');

  const handleCardClicked = (cardName: string) => {
    const card: ICard = cards[cardName];
    if (implementedCards.includes(cardName)) {
      router.push(card.route);
    } else {
      setNIAlertOpen(true);
      setNIAlertMessage(`${card.text} estará disponivel em breve.`);
    }
  };

  return (
    <>
      <NotImplementedAlert
        message={nIAlertMessage}
        open={nIAlertOpen}
        onClose={() => setNIAlertOpen(false)}
      />
      <HomeCardsWrapper>
        <Grid container spacing={4}>
          {Object.keys(cards).map((cardName) => (
            <Grid key={cardName} item xs={12} sm={4}>
              <HomeCard text={cards[cardName].text} onClick={() => handleCardClicked(cardName)} />
            </Grid>
          ))}
        </Grid>
      </HomeCardsWrapper>
    </>
  );
};

export default HomeCards;
