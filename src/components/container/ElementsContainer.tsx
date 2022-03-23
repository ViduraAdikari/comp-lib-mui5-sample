import React from 'react';
import Container from "@mui/material/Container";
import UIButton from "../elements/UIButton";
import Stack from "@mui/material/Stack";

const ElementsContainer: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction="row" spacing={3}>
        <UIButton type="secondary">
          Secondary
        </UIButton>
        <UIButton type="primary">
          Primary Button
        </UIButton>
      </Stack>
    </Container>
  )
};

export default ElementsContainer;