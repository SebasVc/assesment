Feature: Servicio encargado de los comentarios.

  Background:
    * url baseUrl
    * path '/comments'
    * def dataResponse = read('classpath:com/co/gorest/comments/response/responseComments.json')


  @Smoke @comments @consultAllcomments
  Scenario: 1 - Conultar el listado completo de comentarios
  Dado un usuario que desea consultar todos los comentarios registrados
  Cuando consume el servicio comments sin enviar el id de un comentario
  Entonces se debe mostrar la información de todos los comentarios
    Given method get
    When status 200
    Then assert responseTime <= 5000
    * def firstPost = karate.jsonPath(response, '$[0].id')


  @Smoke @comments @createComment
  Scenario: 2 - Crear un  comentario
  Dado un usuario que desea crear un  comentarios
  Cuando consume el servicio enviando la info del post relacionado
  Entonces se debe crear el comentario
    * def createPost = call read('classpath:com/co/gorest/posts/feature/posts.feature@createAPost')
    * def idPost = createPost.idPost
    * def dataRequest = read('classpath:com/co/gorest/comments/request/commentsRequest.json')
    Given header Authorization = 'Bearer ' + accessToken
    And  request dataRequest.createPost
    When method post
    Then status 201
    And match response == dataResponse.responseCommentCreated
    And assert responseTime <= 5000
    * def idComment = response.id
    * print 'Identificador del comentario: '  + idComment

  @Smoke @comments @consultComment
  Scenario Outline: 3 - Consulta  de  comentarios
  Dado un usuario que desea consultar  un comentario <casuistica>
  Cuando consume el servicio enviando el id del comentario en especifico
  Entonces se debe crear el comentario
    * def createcomment = call read('classpath:com/co/gorest/comments/feature/comments.feature@createComment')
    * def idComment = createcomment.idComment
    * print 'tengo esto : ' + idComment
    * print 'mando esto  : ' + <idComment>
    Given header Authorization = 'Bearer ' + accessToken
    And path + <idComment>
    When method get
    Then status <status>
    And match response == <response>
    Examples:
      | 'casuistica  | idComment | response                             | status |
      | registrado  | idComment | dataResponse.responseCommentCreated2 | 200    |
      | inexistente | 10010     | dataResponse.commentNotRegister      | 404    |

  @Smoke @comments @deleteComment
  Scenario: 4 - Eliminacion de  comentario
  Dado un usuario que desea eliminar un  comentarios
  Cuando consume el servicio enviando la info del comentario relacionado
  Entonces se debe eliminar el comentario
    * def createcomment = call read('classpath:com/co/gorest/comments/feature/comments.feature@createComment')
    * def idComment = createcomment.idComment
    * def dataRequest = read('classpath:com/co/gorest/comments/request/commentsRequest.json')
    Given header Authorization = 'Bearer ' + accessToken
    And  path + idComment
    When method delete
    Then status 204
    And assert responseTime <= 5000
