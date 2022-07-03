//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 

let cont=0;
const INDEX_URL = "../index.html";

function changeUser( login, senha, nome, email){
    let usuarioAtual = JSON.parse(sessionStorage.getItem ('usuarioCorrente'));
    console.log(usuarioAtual);
    let usuarioMudar = JSON.parse(localStorage.getItem('db_usuarios'));
  
    usuarioMudar.usuarios.forEach((valor) =>{
      let loginFinal = (login == undefined) ?  valor.login : login;
      let senhaFinal = (senha == undefined) ? valor.senha : senha;
      let nomeFinal = (nome == undefined) ? valor.nome : nome;
      let emailFinal = (email == undefined) ? valor.email : email;
      if(valor.login === usuarioAtual.login ){
        console.log(valor.email);
        valor.login = loginFinal;
        valor.senha = senhaFinal;
        valor.nome = nomeFinal;
        valor.email = emailFinal;
      }
    })
    
    
    localStorage.setItem('db_usuarios', JSON.stringify(usuarioMudar));
  }