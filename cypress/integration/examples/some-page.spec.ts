import specTitle from 'cypress-sonarqube-reporter/specTitle';

describe(specTitle('test'), () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true);
    });
});
