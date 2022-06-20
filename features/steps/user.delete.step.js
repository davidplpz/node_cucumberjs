const { When, Then, Given } = require('@cucumber/cucumber');
const assert = require('assert');
const User = require('../../src/user/user.model.js');
const UserRepository = require('../../src/user/user.repository.js');
const UserService = require('../../src/user/user.services.js');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

Given('El identificador de un usuario {string}', (id) => {
  const manager = new User('manager', 'test@test.com', 'asdf');
  this.id = userService.create(manager);
});

Then('Se puede borrar y obtengo un {word}', (expectedResponse) => {
  let isDeleted = userService.delete(this.id);
  assert.equal(isDeleted, expectedResponse === 'true');
});

Given(
  'El identificador de un usuario que no tengo en el sistema {string}',
  (id) => {
    this.id = id;
  },
);

Then('No se puede borrar y obtengo un {word}', (expectedResponse) => {
  let isDeleted = userService.delete(this.id);
  assert.equal(isDeleted, expectedResponse === 'true');
});
