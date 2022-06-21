class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create(user) {
    if (
      user.name === undefined ||
      user.email === undefined ||
      user.password === undefined
    ) {
      return 'Invalid user';
    }
    return this.userRepository.create(user);
  }

  delete(id) {
    const user = this.userRepository.find(id);
    if (user === 'User not found') {
      return false;
    }
    return this.userRepository.delete(id);
  }
}

module.exports = UserService;
