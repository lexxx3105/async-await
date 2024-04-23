import GameSavingLoader from '../GameSavingLoader';

test('класс "GameSavingLoader" существует и имеет метод "load"', () => {
  expect(GameSavingLoader).toBeDefined();
  expect(GameSavingLoader.load).toBeDefined();
});

test('метод "load" класса "GameSavingLoader" работает корректно', () => {
  const expectation = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  return GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(expectation);
  });
});