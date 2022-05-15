import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ICardProp {
  text: string;
  onClick: () => void;
}

const HomeCard = ({ text, onClick }: ICardProp) => {
  return (
    <Card elevation={4} sx={{ borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <CardActionArea onClick={onClick}>
        <CardContent
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}
        >
          <Typography variant="h5" component="div">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
