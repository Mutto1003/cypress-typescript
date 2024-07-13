// Different ways to create Post request Body

describe('API Testing', () => {

    it('Approach 1: Hard-coded JSON object', () => {
        const requestBody1 = {
            tourist_name: "John",
            tourist_email: "johnxyz123@gmail.com",
            tourist_location: "London"
        };

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody1
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq("John")
            expect(response.body.tourist_email).to.eq("johnxyz123@gmail.com")
            expect(response.body.tourist_location).to.eq("London")

        })
    });

    it('Approach 2: Dynamically generated object', () => {
        const requestBody2 = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2) + "@gmail.com",
            tourist_location: "London"
        };

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody2
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody2.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody2.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody2.tourist_location)

        })
    });

    it.only('Approach 3: Using Fixture', () => {
        cy.fixture('tourist').then((myfixture) => {
            const requestBody3 = myfixture;
            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist',
                body: requestBody3
            }).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody3.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody3.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody3.tourist_location)
                expect(response.body).has.property('tourist_email', requestBody3.tourist_email)
                expect(response.body).to.have.property('tourist_email', requestBody3.tourist_email)
            })
        })
    })
})