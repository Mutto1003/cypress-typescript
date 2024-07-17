// HTTP Methods - GET, POST,PUT & DELETE


describe('HTTP Request', () => {
    
    // Ex1.
    it.only('Get Call', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').its('status').should('eql', 200)
        // function()
    })

    // Ex2.
    it('Post Call',() => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                    title:"Test post",
                    body:"This is post call",
                    userId:1
                }
        }).its('status').should('eql', 201)
    })

    // Ex3.
    it('Put Call',() => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                    title: "Test post - Updated",
                    body: "This is put call ",
                    userId: 1,
                    id: 1
                }
        }).its('status').should('eql', 200)
    })

    // Ex4.
    it("Delete Call", ()=> {
        cy.request({  
            method: 'DELETE',
            url: "https://jsonplaceholder.typicode.com/posts/1"
        })
        .its('status')
        .should('equal', 200);
    })
})