class User {
    constructor(id, name, email, role = 'user') {
      this.id = id; // Propriedade pública
      this.name = name;
      this.email = email;
      this.role = role;
      this._password = null; // Propriedade privada simulada
    }
  
    // Getter para password
    get password() {
      return 'Senha é privada';
    }
  
    // Setter para password com validação
    set password(value) {
      if (value.length >= 8) {
        this._password = value;
      } else {
        console.error('Senha precisa ter pelo menos 8 caracteres');
      }
    }
  
    // Método público
    displayInfo() {
      return `User: ${this.name}, Email: ${this.email}, Role: ${this.role}`;
    }
  
    // Método privado simulado
    _generateID() {
      return Math.floor(Math.random() * 10000);
    }
  
    // Método estático
    static compareUsers(user1, user2) {
      return user1.id === user2.id;
    }
  }
  
  // Instanciando a classe
  const user1 = new User(1, 'Carlos', 'carlos@example.com');
  user1.password = '12345678';
  console.log(user1.displayInfo());
  console.log(User.compareUsers(user1, new User(2, 'Ana', 'ana@example.com')));
  