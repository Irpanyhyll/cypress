describe('Validate headers', () => {
    it('Successfully validate headers', () => {
        var ability = {
            "name": "limber",
            "url": "https://pokeapi.co/api/v2/ability/7"
        }

        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.abilities[0].ability.name).to.eq("limber");
            expect(response.headers).to.have.property('content-type').and.include('application/json');
        });
    });
});
