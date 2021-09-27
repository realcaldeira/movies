import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import { Container, SearchContainer, Input, SearchButton} from './styles';
import { Feather } from '@expo/vector-icons';

function Home(){
  return(
    <Container>
      <Header title="React Prime"/>

      <SearchContainer>
        <Input 
          placeholder="Ex Vingadores"
        />
        <SearchButton>
          <Feather 
            name="search" 
            size={30}
            color="#FFF"
          />  
        </SearchButton>
      </SearchContainer>

      <Text>TELA HOME</Text>
    </Container>
  )
}

export default Home;