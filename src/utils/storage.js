import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar os filmes salvos
export async function getMoviesSave(key){
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || [];
  
  return moviesSave;
}

// Salvar um novo filme 
export async function saveMovie(key, newMovie){
  let moviesStore = await getMoviesSave(key);

  //Se tiver algum filme salvo com esse mesmo ID ou duplicado precisamos ignorar
  const hasMovie = moviesStore.some( item => item.id === newMovie.id)

  if(hasMovie){
    console.log('ESSE FILME JÁ EXISTE NA SUA LISTA');
    return;
  }
  moviesStore.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStore));
  console.log('FILME SALVO COM SUCESSO!!!');

}

//Deletar algum filme especifico

export async function deleteMovie(id){
  let movieStored = await getMoviesSave('@primereact');

  let myMovies = movieStored.filter( item => {
    return (item.id !== id)
  })
  await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
  console.log('FILME DELETADO COM SUCESSO')
  return myMovies;
}

//Filtrar algum se ja está salvo
export async function hasMovie(movie){
  let movieStored = await getMoviesSave('@primereact');

  const hasMovie = movieStored.find( item => item.id === movie.id);

  if(hasMovie){
    return true;
  }

  return false;
}