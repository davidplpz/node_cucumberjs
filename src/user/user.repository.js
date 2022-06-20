class UserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  create(user) {
    if (
      user.name === undefined ||
      user.email === undefined ||
      user.password === undefined
    ) {
      return 'Invalid user';
    }
    const id = `asdf${this.nextId}`;
    user.setId(id);
    this.users.push(user);
    this.nextId++;
    return id;
  }

  find(id) {
    const user = this.users.find((user) => user.getId() === id);
    if (user === undefined) {
      return 'User not found';
    }
    return user;
  }

  delete(id) {
    const user = this.find(id);
    if (user !== 'User not found') {
      this.users = this.users.filter((user) => user.getId() !== id);
      return true;
    }
    return false;
  }
}

module.exports = UserRepository;
