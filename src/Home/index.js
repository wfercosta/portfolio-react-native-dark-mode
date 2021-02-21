import {useTheme} from '../themes';
import React from 'react';
import {Switch} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.text};
`;

const Home = () => {
  const theme = useTheme();
  return (
    <Container>
      <Title>Dark mode</Title>
      <Switch
        value={theme.mode === 'dark'}
        onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
      />
    </Container>
  );
};

export default Home;
