const fetchDogs = async () => {
  try {
    const resp = await fetch("http://localhost:3001/dogs");
    const dogs = await resp.json();

    return dogs;
  } catch (error) {
    console.error(error);
  }
};
export default fetchDogs;
