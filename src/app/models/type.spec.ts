import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  });

  it (`Should give an empty string for lastname attribute`, () => {
    const objet = new Type() // Instancie dans type la classe Type

    expect(objet.lastname) .toEqual('')
})

it ('Should give a date instance for birthdate',() => {
  const objet = new Type()
  expect (objet.birthDate).toBeInstanceOf(Date)
})

})