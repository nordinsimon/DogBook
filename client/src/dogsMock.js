const dogsMock = [
  {
    id: 1,
    name: "Rex",
    picture:
      "https://images.dog.ceo/breeds/sheepdog-english/n02105641_9319.jpg",
    nickname: "Rexnic",
    age: 2,
    bio: "I am a dog",
    friends: [
      { id: 2, name: "Buddy" },
      { id: 3, name: "Lucky" },
    ],
    presence: true,
  },
  {
    id: 2,
    name: "Buddy",
    nickname: "Buddy",
    picture: "https://images.dog.ceo/breeds/sharpei/noel.jpg",
    age: 3,
    bio: "I am a dog",
    friends: [
      { id: 1, name: "Rex" },
      { id: 3, name: "Lucky" },
    ],
    presence: false,
  },
  {
    id: 3,
    name: "Lucky",
    nickname: "Lucky",
    picture: "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10823.jpg",
    age: 4,
    bio: "I am a dog",
    friends: [
      { id: 1, name: "Rex" },
      { id: 2, name: "Buddy" },
    ],
    presence: true,
  },
];

export default dogsMock;
