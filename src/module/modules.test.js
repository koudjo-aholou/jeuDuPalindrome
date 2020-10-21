import {palindromeAleatoire, decouperLettre, melangerLettre, checkIfPlayerWin} from './module';

describe('MODULE', () => {
  it('Should return a word palindrome', () => {
    const listPalindrome = ['Ada','Stats']
    const palindrome = palindromeAleatoire(listPalindrome)
    expect(typeof(palindrome)).toEqual('string');
  });
  
  it('Should return an Error if there is at least one word in the list', () => {
    const listPalindrome = [];
    expect(() => palindromeAleatoire(listPalindrome)).toThrow();
  });

  it('Should return an Error if there a falsy value in the list', () => {
    const listPalindrome = [null, undefined,'']
    expect(() => palindromeAleatoire(listPalindrome)).toThrow();
  });

  it('Should return an Error if the palindrome\'s bucketlist is not a list', () => {
    const listPalindrome = 'Stats';
    expect(() => palindromeAleatoire(listPalindrome)).toThrow();
  });
  
  it('Should create a list of letters', () => {
    const palindrome = 'Stats';
    const palindromeDecoupe = decouperLettre(palindrome)
    expect(typeof(palindromeDecoupe)).toEqual('object');
    expect(Array.isArray(palindromeDecoupe)).toEqual(true);
  });
  it('Should throw error because word without letters', () => {
    const palindrome = '';
    expect(() => decouperLettre(palindrome)).toThrow();
  });
  
  it('Should return an Error if palindrome is a list', () => {
    const palindrome = ['Stats'];
    expect(() => decouperLettre(palindrome)).toThrow();
  });
  
  
  it('Should return an Error if palindrome cuted is not a list', () => {
    const palindromeDecoupe = 'Stats';
    expect(() => melangerLettre(palindromeDecoupe)).toThrow();
  });
  
  it('Should return a reorder list of letter ', () => {
    const palindromeDecoupe = ['S','t','a','t','s'];
    const palindromeMelange = melangerLettre(palindromeDecoupe);
    expect(JSON.stringify(palindromeMelange)).not.toEqual(JSON.stringify(palindromeDecoupe));
  });

  it('Should return the same reorder list of letter ', () => {
    const palindromeDecoupe = ['S','t','a','t','s'];
    const palindromeMelange = melangerLettre(palindromeDecoupe);
    expect(palindromeMelange.length).toEqual(palindromeDecoupe.length);
  });
  
  it('Should check if player win', () => {
    const solutionPalindrome = 'Stats', reponseJoueur = 'Stats';
    const joueurGagne = checkIfPlayerWin(reponseJoueur, solutionPalindrome);
    expect(joueurGagne).toEqual(true);
  });
  
  it('Should thow an error because solution palindrome && reponseJoueur are not strings', () => {
    const solutionPalindrome = 'Stats', reponseJoueur = ['Stats'];
    expect(() => checkIfPlayerWin(reponseJoueur, solutionPalindrome)).toThrow();
  });
  
})
