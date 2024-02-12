Feature: escenario de prueba en Karate


  Scenario: Realizar una solicitud GET a una API
    Given url 'https://gorest.co.in/public/v2/todos'
    When method get
    Then status 200
