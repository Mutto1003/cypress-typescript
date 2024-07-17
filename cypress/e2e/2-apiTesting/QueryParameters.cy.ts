// import { sendMailRRR } from '../../support/sendToEmail'

describe('', () => {
    it('Passing query and path parameters', () => {
        // sendMailRRR();
        const queryParam = {
            page: 2
        };

        // Send request with query parameters
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParam
        }).then((response) => {
            expect(response.status).to.eq(200)   //or 
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2) // page number validation as per Query param
            expect(response.body.data).has.length(6); // records in data array
            expect(response.body.data[0]).have.property('id', 7);
            expect(response.body.data[0]).has.property('first_name', 'Michael');
        });
    })
})