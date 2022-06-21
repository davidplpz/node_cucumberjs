class UserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  create(user) {
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
    this.users = this.users.filter((user) => user.getId() !== id);
    return true;
  }
}

module.exports = UserRepository;
