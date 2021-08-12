export const fetchAvatarCharacters = async () => {
  const res = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters');
  const results = await res.json();
  return results;
};
