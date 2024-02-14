describe('Suite de prueba opencart',()=>{
   beforeEach(()=>{
    cy.visit('https://opencart.abstracta.us/')
   })

    it("Validacion pagina de inicio",()=>{
    
        cy.get('h1 > a').should("be.visible")
        cy.get('h1 > a').contains('Your Store')
    })

    it("Ruta critica: Añadir producto al carrito desde banner el home",()=>{
        cy.get('.swiper-slide-active > a > .img-responsive').click()
        cy.get('.col-sm-4 > h1').contains('Samsung Galaxy Tab 10.1')  
        cy.get('#button-cart').click()     
        cy.get('.alert').should('be.visible')       
    })

    it("Ruta critica: Buscar un producto y añadirlo al carrito",()=>{
        cy.get('.form-control').type("iMAC")
        cy.get('.input-group-btn > .btn').click()
        cy.get('#content > h1').should('be.visible')
        cy.xpath('//*[@id="content"]/div[3]/div/div/div[2]/div[2]/button[1]').click()        
        cy.get('.alert').should('be.visible')
    })

    it("Ruta alterna: añadir producto al carrito desde los featured del home",()=>{
        cy.xpath('//*[@id="content"]/div[2]/div[1]/div/div[3]/button[1]').click();
        cy.get('.alert').should('be.visible')

    })

    it("Ruta altenra: Eliminar un producto previamente añadido al carrito",()=>{
        cy.xpath('//*[@id="content"]/div[2]/div[1]/div/div[3]/button[1]').click();
        cy.get('.alert').should('be.visible')
        cy.get('.btn-inverse').click()
        cy.get(':nth-child(5) > .btn').should('be.visible')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('#cart-total').contains('0 item(s) - $0.00')

    })

    it("Ruta critica: Login, añadir un producto y validar mensaje de confirmacion de orden",()=>{
        cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get(':nth-child(2) > .well > h2').contains("Returning Customer")
        cy.get('#input-email').type("test@assesment.com")
        cy.get('#input-password').type("Test1234!")
        cy.get('form > .btn').click()
        cy.get('#content > :nth-child(1)').should('be.visible')
        cy.get('.form-control').type("iMAC")
        cy.get('.input-group-btn > .btn').click()
        cy.get('#content > h1').should('be.visible')
        cy.xpath('//*[@id="content"]/div[3]/div/div/div[2]/div[2]/button[1]').click()        
        cy.get('.alert').should('be.visible')
        cy.get('.btn-inverse').click()
        cy.get('[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"] > strong').click()
        cy.get('#content > h1').should('be.visible')
        cy.get(':nth-child(3) > label > input').click()
        cy.get('#input-payment-firstname').type("nameBilling")
        cy.get('#input-payment-lastname').type("lastnameBilling")
        cy.get('#input-payment-address-1').type("p sherman calle wallaby42 sidney")
        cy.get('#input-payment-city').type("Narnia")
        cy.get('#input-payment-postcode').type("08000")
        cy.get('#input-payment-country').select("47")
        cy.wait(2000) // Espera 2 segundos
       cy.get('#input-payment-zone').select("Bolivar")
       cy.get('#button-payment-address').click()
       cy.get('#button-shipping-address').click()
       cy.get('#button-shipping-method').click()
       cy.get('[type="checkbox"]').click()
       cy.get('#button-payment-method').click()
       cy.get('h2').contains("Bank Transfer Instructions")
       cy.get('.well').should('be.visible')
       cy.get('.well > :nth-child(2)').contains("Your order will not ship until we receive payment.")
 

    })

})