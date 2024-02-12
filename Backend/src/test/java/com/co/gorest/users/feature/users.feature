Feature: Servicio correspondiente a la gestion de los usuarios

  Background:
    * url baseUrl
    * path '/users'
    * def randomEmail = call read('classpath:com/co/gorest/utils/functionJS/RandomEmail.js')
    * def dataRequest = read('classpath:com/co/gorest/users/request/usersRequest.json')
    * def dataResponse = read('classpath:com/co/gorest/users/response/responseUsers.json')


  @Smoke @users
  Scenario: 1 - Validar el listado completo de los usuarios registrados
    Dado un  usuario que desea realizar la consulta de todos los usuarios regisrados
    Cuando consume el servicio users
    Entonces se le deben mostrar todos los usuarios registrados
    When method get
    Then status 200

  @Smoke @users @createUser
  Scenario: 2 - Creacion exitosa de un usario
  Dado un  usuario que desea registrarse y no existe previamente registrado
  Cuando consume el servicio users enviando la informacion del usuario
  Entonces se debe realizar el registro exitoso del usuario
    * print 'El correo es: ' +randomEmail
    Given header Authorization = 'Bearer ' + accessToken
    And request dataRequest.createUser
    When method post
    Then status 201
    And match response == dataResponse.responseUserCreated
    And assert responseTime <= 5000
    * def idUserCreated = response.id
    * def emailUser = response.email
    * print idUserCreated

  @Smoke @users @updateUser
  Scenario: 3 - Modificacion exitosa de un usario
  Dado un usuario que desea modificar el nombre de su informacion previamente registrada
  Cuando consume el servicio users enviando la informacion del usuario par actualizar
  Entonces se debe realizar la actualizacion de la informacion de forma correcta
    * def createUser = call read('classpath:com/co/gorest/users/feature/users.feature@createUser')
    * def idUserCreated = createUser.idUserCreated
    Given path + idUserCreated
    And header Authorization = 'Bearer ' + accessToken
    And request dataRequest.updateUser
    When method patch
    Then status 200
    And match response == dataResponse.responseUserUpdated
    And assert responseTime <= 5000

  @Smoke @users @deleteUser
  Scenario: 4 - Eliminación exitosa de un usario
  Dado un usuario que desea eliminar su informacion previamente registrada
  Cuando consume el servicio users enviando el id
  Entonces se debe realizar la eliminación de la informacion de forma correcta
    * def createUser = call read('classpath:com/co/gorest/users/feature/users.feature@createUser')
    * def idUserCreated = createUser.idUserCreated
    Given path + idUserCreated
    And header Authorization = 'Bearer ' + accessToken
    When method delete
    Then status 204
    And assert responseTime <= 5000

  @Smoke @users @consultUser
  Scenario: 5 - Consulta de un usuario previamente creado
  Dado un  usuario que desea consultar la información de un usuario creado previamente
  Cuando consume el servicio users enviando el id del usuario
  Entonces se debe devolver la información del usuario correspondiente
    * def createUser = call read('classpath:com/co/gorest/users/feature/users.feature@createUser')
    * def idUserCreated = createUser.response.id
    Given path + idUserCreated
    And header Authorization = 'Bearer ' + accessToken
    When method get
    Then status 200
    And assert responseTime <= 5000
    And match response.id == createUser.response.id
    And match response.name == createUser.response.name
    And match response.email == createUser.response.email
    And match response.gender == createUser.response.gender
    And match response.status == createUser.response.status

  @Smoke @users @consultUserNoRegister
  Scenario: 6 - Consulta de un usuario no registrado
  Dado un  usuario que desea consultar la información de un usuario no registrado
  Cuando consume el servicio users enviando un id el cual no se encuentra registrado
  Entonces no se debe responder informacion de ningun usuario
    Given path + '1010'
    When method get
    Then status 404
    And assert responseTime <= 5000
    And match response == dataResponse.ResponseUserNotRegister

  @Smoke @users @EmailExists
  Scenario: 7 - Creacion de un usuario con email repetido
  Dado un  usuario que desea registrar un email previamente registrdo
  Cuando consume el servicio users enviando un email  el cual ya  encuentra registrado
  Entonces no se debe responder con error
    Given header Authorization = 'Bearer ' + accessToken
    And request dataRequest.createExistUser
    And retry until responseStatus == 422
    When method post
    Then status 422
    And assert responseTime <= 5000
    And match response == dataResponse.responseEmailExists