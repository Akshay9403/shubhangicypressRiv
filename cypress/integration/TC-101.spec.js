///<reference types="cypress"/>
describe('To verify valid login details', () => {
    beforeEach(function () {
        cy.visit('https://adactinhotelapp.com/')
        cy.get('input[id="username"]').type('akshaypardeshi')
        cy.get('input[id="password"]').type('Akshay@9403')
        cy.get('input[id="login"]').click()
    })
    it('TC-101', () => {

        cy.get('img[class="logo"]').should('be.visible')
    })

    it('TC-102', () => {

        cy.get('select[id="location"]').select('Sydney')
        cy.get('select[id="hotels"]').select('Hotel Creek')
        cy.get('select[id="room_type"]').select('Standard')
        cy.get('select[id="room_nos"]').select('1 - One')
        cy.get('input[name="datepick_in"]').clear().type('28/02/2022')
        cy.get('input[id="datepick_out"]').clear().type('26/02/2022')
        cy.get('select[id="adult_room"]').select('1 - One')
        cy.get('select[id="child_room"]').select('0 - None')
        cy.get('input[id="Submit"]').click()
        cy.get('span[id="checkin_span"]').should('be.visible')


    })
    it.only('to verify whether location in select hotel page are displayed according to loc in sea hot', () => {
        let location =["Sydney"]
        cy.get('select[id="location"]').select(location)
        cy.get('select[id="hotels"]').select('Hotel Creek')
        cy.get('select[id="room_type"]').select('Standard')
        cy.get('select[id="room_nos"]').select('1 - One')
        cy.get('input[name="datepick_in"]').clear().type('26/02/2022')
        cy.get('input[id="datepick_out"]').clear().type('28/02/2022')
        cy.get('select[id="adult_room"]').select('1 - One')
        cy.get('select[id="child_room"]').select('0 - None')
        cy.get('input[id="Submit"]').click()
        cy.get('input[id="location_0"]').should('have.value','Sydney')
        
    })
})