const User = require('./src/user/user.model.js');
const UserRepository = require('./src/user/user.repository.js');
const UserService = require('./src/user/user.services.js');

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const manager = new User('manager', 'test@test.com', 'asdf');

const id = userService.create(manager);

console.log(id);

const manager1 = new User('manager');
const id1 = userService.create(manager1);

console.log(id1);
