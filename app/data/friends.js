var friendsArray = [
  {
    friendName: 'Isaac',
    friendImg:
      'https://images.pexels.com/photos/194446/pexels-photo-194446.jpeg?cs=srgb&dl=adult-art-blur-194446.jpg&fm=jpg',
    scores: [5, 1, 2, 3, 1, 2, 5, 1, 1, 1]
  },
  {
    friendName: 'Liam',
    friendImg:
      'https://images.pexels.com/photos/555790/pexels-photo-555790.png?cs=srgb&dl=black-and-white-boy-casual-555790.jpg&fm=jpg',
    scores: [2, 5, 4, 1, 2, 3, 3, 2, 3, 3]
  },
  {
    friendName: 'Jennifer',
    friendImg: 'https://www.pexels.com/photo/man-in-crew-neck-shirt-555790/',
    scores: [3, 1, 3, 5, 2, 3, 2, 2, 5, 5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
