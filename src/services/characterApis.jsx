export const fetchAvatarCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  return json.map(({ name, photoUrl }) => ({
    name,
    image: photoUrl
  }));
};


export const fetchFuturamaCharacters = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters');
  const json = await res.json();
  return json.map(({ PicUrl, Name }) => ({
    name: Name,
    image: PicUrl
  }));
};

export const fetchHeyArnoldCharacters = async () => {
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
  return json.map(({ name, image }) => ({
    name,
    image
  }));
};

export const fetchRickAndMortyCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const json = await res.results.json();
  return json.map(({ name, image }) => ({
    name, image
  }));
};
