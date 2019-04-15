beforeEach(() => {
    return initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

describe('matching cities to foods', () => {
    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
