const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const User = require('../../src/user/user.model.js');
const UserRepository = require('../../src/user/user.repository.js');
const UserService = require('../../src/user/user.services.js');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

When('Inicio la app', () => {
  const userRepository = new UserRepository();
  this.users = userRepository.users;
});

Then('No existen usuarios en el repositorio', () => {
  assert.equal(this.users.length, 0);
});

When('Creo un usuario con los datos correctos', () => {
  const manager = new User('manager', 'test@test.com', 'asdf');
  this.id = userService.create(manager);
});

Then('Obtengo el identificador {string}', (expectedResponse) => {
  assert.equal(this.id, expectedResponse);
});

When('Creo un usuario con los datos incorrectos', () => {
  const manager = new User('manager');
  this.id = userService.create(manager);
});

Then('Obtengo un error de validación {string}', (expectedResponse) => {
  assert.equal(this.id, expectedResponse);
});
