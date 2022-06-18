class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  create(user) {
    return this.userRepository.create(user);
  }

  delete(id) {
    return this.userRepository.delete(id);
  }
}

module.exports = UserService;
