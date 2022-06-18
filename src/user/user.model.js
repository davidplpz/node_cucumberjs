class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

module.exports = User;
