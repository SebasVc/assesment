Feature: Servicio que se encarga de gestionar los posts correspondiente a los usuarios
  Background:
    * url baseUrl
    * path '/posts/'
    * def randomEmail = call read('classpath:com/co/gorest/utils/functionJS/RandomEmail.js')
    * def dataResponse = read('classpath:com/co/gorest/posts/response/responsePosts.json')

  @Smoke @Posts @listAllPosts
  Scenario: 1 - Listar todos los posts
    Dado un usuario que desea visualizar todos los posts
    Cuando consume el servicio sin especificar ID
    Entonces se muestra el listado de todos los posts
    Given method get
    When status 200
    Then  assert responseTime <= 5000
    * def firstPost = karate.jsonPath(response, '$[0].id')
    * print 'mi primera chamba: ' +firstPost

  @Smoke @Posts @createAPost
  Scenario: 2 - Crear un post en especifico
  Dado un usuario previamente registrado que desea registrar un nuevo post
  Cuando consume el servicio enviando la informacion del post
  Entonces se debe crear el nuevo post
    * def createUser = call read('classpath:com/co/gorest/users/feature/users.feature@createUser')
    * def idUserCreated = createUser.idUserCreated
    * def dataRequest = read('classpath:com/co/gorest/posts/request/postsRequest.json')
    * print 'este es el id: ' + idUserCreated
  Given header Authorization = 'Bearer ' + accessToken
  And request dataRequest.createPost
  When method post
  Then status 201
  And match response == dataResponse.responsePostCreated
  And assert responseTime <= 5000
  * def idPost = response.id

  @Smoke @Posts @consultAPost
  Scenario: 3 - Consultar un post en especifico
  Dado un usuario que desea consultar un solo post en especifico
  Cuando consume el servicio especificando el Id del post
  Entonces se muestra la información correspondiente al post consultado
    * def createPost = call read('classpath:com/co/gorest/posts/feature/posts.feature@createAPost')
    * def idPost = createPost.idPost
    Given header Authorization = 'Bearer ' + accessToken
    And path  +  idPost
    When method get
    Then status 200
    And assert responseTime <= 5000
    And match response == dataResponse.responsePostCreated

  @Smoke @Posts @consultNoExistsPost
  Scenario: 4 - Consultar un post inexistente
  Dado un usuario que desea consultar un  post el cual no esté registrado
  Cuando consume el servicio especificando el Id del post inexistente
  Entonces no se muestra la información correspondiente a ninungun post
    Given path + '1010'
    When method get
    And assert responseTime <= 5000
    And match response == dataResponse.responsePostInexists

  @Smoke @Posts @deletePost
  Scenario: 5 - Eliminar un post existente
  Dado un usuario que desea eliminar un  post registrado
  Cuando consume el especificando el Id del post existente
  Entonces se debe eliminar el post post
    * def createPost = call read('classpath:com/co/gorest/posts/feature/posts.feature@createAPost')
    Given header Authorization = 'Bearer ' + accessToken
    And path + createPost.idPost
    When method delete
    Then status 204
    And assert responseTime <= 5000
