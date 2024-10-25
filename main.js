class User {
  constructor(id, name, email, role = "user") {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this._password = null;
  }

  get password() {
    return "Senha é privada";
  }

  set password(value) {
    if (value.length >= 8) {
      this._password = value;
    } else {
      console.error("Senha precisa ter pelo menos 8 caracteres");
    }
  }

  displayInfo() {
    return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
  }

  _generateID() {
    return Math.floor(Math.random() * 10000);
  }

  static compareUsers(user1, user2) {
    return user1.id === user2.id;
  }
}

const user1 = new User(1, "Carlos", "carlos@example.com");
user1.password = "12345678";
console.log(user1.displayInfo());
console.log(User.compareUsers(user1, new User(2, "Ana", "ana@example.com")));
