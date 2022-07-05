# Informações do Projeto
`O que assistir`  

Nesse projetos buscamos realizar um software que facilita a escolha de filmes ou séries de forma que diminua a indecisão das pessoas na hora da escolha.Com o software as pessoas vão ter recomendações de uma maneira mais precisa e conhecer séries e filmes que serião difícil de conhecer sem o software.

`Engenharia de software` 

Curso que ajuda na formação de um profissional muito mais completo e que possa atuar em várias áreas em que um software pode abordar. 

# Participantes: 
* José Miguel Quintão Magalhães
* Lucas Perlatto Lotti Garcia
* Marcelo Aguilar Araújo Dalmeida
* Marcus Viniccius Souza de Freitas
* Samuel Marques Sousa Leal
* Victor Ricci Perlatto

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
  Atualmente existem diversas plataformas streaming com uma quantidade enorme de filmes e séries para as pessoas assistirem. Muitas vezes há um excesso de opções em conjunto com a escassez de indicações, que resulta em uma dúvida do que assistir. Com isso, há um mal aproveitamento da quantidade de conteúdo, e com a falta de indicações, muitas vezes, os usúarios não assistem nada.

## Problema

  As pessoas tem dificuldade em escolher o que assistir nas platoformas de streaming. Nesse contexto abordamos principalmente pessoas que possuem plataformas de streaming, más que ficam horas para escolher um filme ou uma série, e muitas vezes acabam sem assistir nada e consequentemente ficam frustados.

## Objetivos

* Mostrar filmes ou séries com base nos atores/atrizes que estão neles.
* Mostrar filmes ou séries com base em seu gênero.
* Em cada filme mostrar suas avaliações.
* Mostrar a plataforma em que estão as séries e filmes.
* Mostrar a sinopse das séries e filmes.
* Mostrar Avaliações de críticos.
* Mostrar indicações que fazem sucesso.

## Justificativa

  Nas entrevistas que fizemos, foi notório como a falta de indicações fazem falta na hora de escolher um filme ou uma série para assistir. Muitas vezes, as pessoas ficam horas tentando escolher um filme ou uma série, isso faz com que fiquem extremamente frustradas, desistam ou escolham um filme ou uma série ruim, que nem terminam de assistir.

## Stakeholders

* Ancine
* IMDb
* Rotten tomatoes
* Atores
* Diretores 
* Produtores
* Plataformas de streaming
* Pessoas que consomem entretenimento online

# Especificações do Projeto

  Projeto utilizando as linguagens html, css e javascript.
  A tecnologia bootstrap.
  Estamos utilizando a metodologia ágil scrum e para a confecção do planejamento foi utilizando o design thinking.

# Personas e Mapas de Empatia

## Personas
![image](https://user-images.githubusercontent.com/44738000/163896352-e445d483-3809-4355-bdbb-111152f21c55.png)
![image](https://user-images.githubusercontent.com/44738000/163896551-ef582327-d68c-4e88-bda3-15df9260ad38.png)
![image](https://user-images.githubusercontent.com/44738000/163896623-71beb43d-d119-4198-9745-8abc7a4c4c15.png)

## Mapas de Empatia
![image](https://user-images.githubusercontent.com/44738000/163896719-27e63f1b-aacd-4652-a467-f0172b27b751.png)
![image](https://user-images.githubusercontent.com/44738000/163896749-61fe540c-c1a2-4ac5-8d2a-140b8714f12b.png)
![image](https://user-images.githubusercontent.com/44738000/163896777-b29d893c-b7c7-4083-8c07-a1d779386091.png)



## Histórias de Usuários

  Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`  |PARA ... `MOTIVO/VALOR`                     |
|--------------------|-------------------------------------|--------------------------------------------|
|Usuário do sistema  | Achar filmes pelo número de estrelas| Ver o que é bem avaliado                   |
|Usuário do sistema  | Achar filmes pelo gênero            | Ver filmes diferentes com o gênero favorito|
|Usuário do sistema  | Achar filmes pelo ator              | Ver filmes diferentes com o ator favorito  |
|Usuário do sistema  | Achar indicação profissional        | Um olhar especializado para séries         |

## Requisitos

  As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário procure filmes ou séries  |  ALTA | 
|RF-002| Cadastro de indicações por críticos profissionais  | MÉDIA |
|RF-003| Plataforma do filme ou série  | MÉDIA |
|RF-003| Catálogo de filme e série  | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Consumir apis de filmes e séries |  BAIXA | 
|RNF-004| Software funcional em todos os navegadores |  ALTA | 

## Restrições

  O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend |
|03| Escopo definido para séries e filmes |
|04| Software funcional em todos os navegadores |

# Projeto de Interface

## Introdução 

  Desenvolveremos uma interface simples e intuitiva afim de facilitar a utilização do usuário que deseja receber uma sugestão do que assister quando estiver em dúvida. Além disso o usuário pode ser notificado com novos lançamentos de filmes, com os temas que ele goste. Após a nossa pesquisa, validamos a dor das pessoas, de sempre terem dúvida do que assistir e não ter um lugar para buscar indicações. Muitos usuários usam avaliações ou atores para a escolha do que assistir.

Requisitos Funciuonais:
  Realizar buscas ou pesquisas de filmes, ator, séries, gênero;
  Realizar login;
  Filmes separados por gênero.    //

Requisitos não funcionais:
  Velocidade de resposta de busca;
  Disponibilidade;
  Interface.



## UserFlow

> Fluxo de usuário (User Flow) do nosso App, no qual o usuário tem que efetuar o login caso nao tenha uma conta cadastrar-se.
> Após logar o usuário pode escolher entre temas na página Home, como plataformas de streaming e lançamentos.
> O usuário pode pesquisar por atores ou filmes  na nossa aba de pesquisa, alem de abrir mais informações sobre o filme escolhido.
>

> **Userflow do App**:
> 
> ![Userflow](images/Userflow.png)


## Wireframes

> Wireframe do nosso projeto de filmes.
> 
> **Projeto Wireframa**:
> 
> ![Exemplo de Wireframe](images/wireframe.png)


# Metodologia

## Divisão de Papéis

  Para a divisão de papeis iremos utilizar o project dentro do git hub, pois ele auxilia na metodologia ágil scrum.
Dentro dele temos:
* Product backlog para as tarefas que irão ser realizadas durante a todo o trabalho.
* Sprint backlog para as tarefas que irão ser realizadas durante a todo a sprint.
* Doing para as tarefas que estão sendo feitas, com o respectivo responsável.
* Done para as tarefas feitas.


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVOA2De88=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-1-ti1-7946100-o-que-assistir | 
|Hospedagem do site | Heroku |  https://icei-puc-minas-pples-ti.github.io/plf-es-2022-1-ti1-7946100-o-que-assistir/ | 
|Protótipo Interativo | MavelApp ou Figma | https://www.figma.com/file/d1hSjX0aMvESgXCwRl6b1M/O-que-assistir-de-Entretenimento?node-id=0%3A1 | 

Editor de código usado vai ser o vscode que permite integração com github e além disso auxilia para um bom versionamento de código.
Estamos utilizando o discord e o whatsapp e o discord como ferramentas de comunicação.
Para diagramação estamos usando o miro.
Para publicar o site estamos usando o github pages já que é uma ferramenta que o github disponibiliza e que acompanha facilmente o versionamento.

## Controle de Versão

### Nome de branchs:
* Master : versão estável já testada do software;
* Dev: versão de desenvolvimento do software .
* Feature : versão em testes do software.
      
### Para a gerência das issue vamos utilizar:
* Feature para nova mudança introduzida;
* Bug para correção de bugs;
* Documentation para mudanças na documentação.
         
![image](https://user-images.githubusercontent.com/44738000/163913777-6dca5f88-6b23-48b6-aa8a-b5ca40c4b81a.png)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/workflow.png)


# Projeto da Solução 

## Tecnologias Utilizadas

Nesse projeto foi utilizado html, css e bootstrap para fazer a marcação e estilização da página e javascript, jquery e bootstrap para fazer a dinamicidade da aplicação. Para fazer a requisição de api foi utilizada o fetch e para guardar informações foi utilizado o localStorage.

## Arquitetura da solução

Foi utilizado sessionStorage para autenticação, localStorage para salvar dados. A hospedagem foi o vercel e a aplicação consome a api  do themoviedb.

![image](https://user-images.githubusercontent.com/44738000/177058116-38787778-6cf0-4ee9-8e6c-33dc398c8543.png)


# Avaliação da Aplicação

- Logar no site
![image](https://user-images.githubusercontent.com/44738000/177058363-1d85100e-296a-41d2-891e-3355c96bc599.png)
- Cadastro de usuário
![image](https://user-images.githubusercontent.com/44738000/177058441-1e41df47-8c6c-4624-b5d4-ba196a712bdf.png)
- Editar usuário
![image](https://user-images.githubusercontent.com/44738000/177058900-e9d7cb30-ff7e-450f-ade1-3a526a030154.png)
- Mostrar página de detalhes
![image](https://user-images.githubusercontent.com/44738000/177058943-d78e5af2-81a8-4f81-9d5c-e0a28cb86eb3.png)

## Plano de Testes

### Teste 1 :
- Testar a funcionalidade de login  

![image](https://user-images.githubusercontent.com/44738000/177059007-df475517-fc57-4fe0-9542-a959705f0768.png)
### Teste 2:
- Testar funcionalidade de cadastro  

![image](https://user-images.githubusercontent.com/44738000/177059078-a7f089e6-79a6-4e06-8730-e36bc2233077.png)
### Teste 3:
- Testar funcionalidade de editar usuário  

![image](https://user-images.githubusercontent.com/44738000/177059096-e7e4e16c-bd46-46cb-a8ad-16d2ef3c688c.png)
### Teste 4:
- Testar funcionalidade de mostrar página de detalhes
![image](https://user-images.githubusercontent.com/44738000/177059102-4d8dfa87-95a7-4927-89f9-457c440aa7af.png)



## Registros de Testes
Foram testadas todas as telas, os pontos que tiveram mais vulnerabilidades foram os de funções de butões, intarações com o armazenamento na hora de fazer o crud do site e quanto a responsividade. Com isso, foi possível descobrir as vulnerabilidades e corrigí-las. 

# Referências

https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=Gitflow%20is%20a%20legacy%20Git,software%20development%20and%20DevOps%20practices
https://www.infoescola.com/engenharia-de-software/analise-de-requisitos/#:~:text=A%20An%C3%A1lise%20de%20Requisitos%20ou,problema%20e%20alcan%C3%A7ar%20seus%20objetivos
https://inovacaosebraeminas.com.br/conheca-o-mapa-da-empatia/
