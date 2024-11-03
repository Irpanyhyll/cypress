describe('Update User', () => {
    it('Succesfully create new user', () => {
        var user = {
            "name": "Budi",
            "job": "Guru"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).to.eq(user.name)
        })
    });
});