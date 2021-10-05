import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';

import { Container, ListMovies } from './styles';

import { getMoviesSave, deleteMovie} from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation, useIsFocused } from '@react-navigation/native';

function Movies(){
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [movies, setMovies] = useState([]);

useEffect(()=> {
  let isActive = true;

  async function getFavoriteMovies(){
    const result = await getMoviesSave('@primereact');

    if(isActive){
      setMovies(result)
    }
  }
  
  if(isActive){
    getFavoriteMovies();
  }

  return () => {
    isActive = false;
  }

},[isFocused]);

async function handleDelete(id){
  const result = await deleteMovie(id);
  setMovies(result)
}

async function navigateDetailsPage(item){
  navigation.navigate('Detail', { id: item.id})
}

  return(
  <Container>
    <Header title="Meus filmes" />

    <ListMovies 
      data={movies}
      showsVerticalScrollIndicator={false}
      keyExtractor={ item => String(item.id) }
      renderItem={ ({item})=> (
        <FavoriteItem 
          data={item}
          deleteMovie={ handleDelete }
          navigatePage={ () => navigateDetailsPage(item) }
        />
      )}
    />
  </Container>
  )
}

export default Movies;