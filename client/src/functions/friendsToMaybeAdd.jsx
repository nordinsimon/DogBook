const friendsToMaybeAdd = (activeDog, dogs, friends) => {
  const dogsToNotAdd = [...friends];

  dogsToNotAdd.push(activeDog.id);
  console.log(dogsToNotAdd);

  const returnArray = [];
  if (friends.length === 0) {
    return dogs;
  }
  dogs.forEach((dog) => {
    if (!dogsToNotAdd.includes(dog.id)) {
      returnArray.push(dog);
    }
  });

  return returnArray;
};
export default friendsToMaybeAdd;
