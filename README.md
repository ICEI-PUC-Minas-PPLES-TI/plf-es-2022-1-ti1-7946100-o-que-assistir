<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Fronteria</title>
    <link href="reset.css" rel="stylesheet" type="text/css" />
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link href="login.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <header>
      <div class='container'>
        <nav class='nav'>
          <a href='#' class='logo'></a>
          <ul class='lista'>
            <li class='lista-items'>
              <a href='#para_imigrantes'>Para Imigrantes</a>
            </li>
            <li class='lista-items'>
              <a href='#para_empresas'>Para Empresas</a>
            </li>
            <li class='lista-items'>
              <a href='#faculdade'>Faculdade</a>
            </li>
            <li class='lista-items'>
              <a href='#empresas'>Empresas</a>
            </li>
            <li class='lista-items'>
              <a href='#sobre'>Sobre</a>
            </li>
            <li class='lista-items'>
              <a href='#faq'>FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      
    <div class='container'>
      <div class='row'>
        <div class='col-12'>
          <div class='form-container'>
            <h3 class='title'>Cadastro</h3>
            <form method="post" class='form'>
              <div class='col-12'>
                <div class='form-input'>
                  <i class='person'></i>
                  <input class='input' name='Usuario' placeholder="Usuario" type="text" />
                </div>
              </div>

              <div class='col-12'>
                <div class='form-input'>
                  <i class='email'></i>
                  <input class='input' name='Email' placeholder="Email" type="email" />
                </div>
              </div>

              <div class='col-12'>
                <div class='form-input'>
                  <i class='lock'></i>
                  <input class='input' name='Senha' placeholder="Senha" type="password" />
                  <i class='visibility js-visibility'></i>
                </div>
              </div>

              <div class='col-12'>
                <div class='form-input'>
                  <i class='lock'></i>
                  <input class='input' name='Senha' placeholder="Repetir senha" type="password" />
                  <i class='visibility js-visibility'></i>
                </div>
              </div>
              <a class='link mt-30' href="/login.html" title='cadastro'>Já possuo cadastro</a>
              <div class='col-12'>
                <input class='btn btn-enter mt-50' type="submit" value='Cadastrar'/>
              </div>
            </form>

            <div class='center mt-50'>
              <a class='link' href="/cadastro.html" title='cadastro'>Cadastrar</a>
              <span class='line'></span>
              <a class='link' href="/RecuperarSenha.html" title='RecuperarSenha'>Esqueci minha senha</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class='footer mt-107'>
      <div class='copy'>Copyright &copy;</div>
    </footer>
    <script type='text/javascript'>
      var visible = true;
      var btnVisible = document.querySelectorAll('.js-visibility')

      var btn = Array.from(btnVisible)
      btn.map(item => {
        item.addEventListener('click', () => {
          if(visible) {
            item.classList.add('visibility-off')
            item.classList.remove('visibility')
            item.previousElementSibling.setAttribute('type', 'text')

            visible = false
          } else {
            item.classList.add('visibility')
            item.classList.remove('visibility-off')
            item.previousElementSibling.setAttribute('type', 'password')

            visible = true
          }
        })
      })
    </script>
  </body>
</html>
</html>