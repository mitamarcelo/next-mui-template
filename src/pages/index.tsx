import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { ListItemIcon } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h3">
          NextJs Template
        </Typography>
        <Typography variant="h4" component="h4">
          Using:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Typescript</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Material UI</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Emotion (styled components)</ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Home;
