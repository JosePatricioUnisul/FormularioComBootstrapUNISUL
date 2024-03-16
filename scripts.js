function limparFormulario() {
    document.getElementById("cadastroForm").reset();
    limparErros();
  }
  
  function mudarTema(classe) {
    document.body.className = classe;
  }

  function validarFormulario() {
    limparErros();
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const idade = document.getElementById("idade").value;
    const telefone = document.getElementById("telefone").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
  
    let valid = true;
  
    if (!nome) {
      document.getElementById("nomeError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!cpf) {
      document.getElementById("cpfError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!idade) {
      document.getElementById("idadeError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!telefone) {
      document.getElementById("telefoneError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!dataNascimento) {
      document.getElementById("dataNascimentoError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!email) {
      document.getElementById("emailError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!senha) {
      document.getElementById("senhaError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (!confirmarSenha) {
      document.getElementById("confirmarSenhaError").innerText = "Campo obrigatório";
      valid = false;
    }
  
    if (senha !== confirmarSenha) {
      document.getElementById("confirmarSenhaError").innerText = "Senhas não conferem";
      valid = false;
    }
  
    if (valid) {
      const formData = {
        nome: nome,
        cpf: cpf,
        idade: idade,
        telefone: telefone,
        dataNascimento: dataNascimento,
        email: email
      };
      document.getElementById("resultado").value = JSON.stringify(formData, null, 2);
    }
  }
  
  function limparErros() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');
  }
  