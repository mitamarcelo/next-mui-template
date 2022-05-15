import styled from '@emotion/styled';
import { Accordion } from '@mui/material';

export const Characters = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  padding: 0 40px;

  h1 {
    font-size: 60px;
  }
`;

export const AccordionFullWidth = styled(Accordion)`
  width: 100%;
`;
