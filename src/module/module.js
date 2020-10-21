/**
 * 
 * @param {Arrays<string>} listePalindrome 
 * @returns {string}
 */
export const palindromeAleatoire = (listePalindrome) =>{
  if(Array.isArray(listePalindrome) && listePalindrome.length > 0){
      const max = listePalindrome.length;
      const genererIndex = Math.ceil(Math.random() * (max - 1));
      const palindrome = listePalindrome[genererIndex];
      if(palindrome === null || palindrome === undefined || palindrome === '') {
        throw new Error('Bug')
      }
      return palindrome;
  }
  throw new Error('Bug')

};
/**
 * 
 * @param {string} mot
 * @returns {Array<string>| Error} 
 */
export const decouperLettre = (mot) =>{
  if(typeof mot === 'string' && mot.length > 1){
    return mot.split('');
  }
  throw new Error('Bug')
};
/**
 * 
 * @param {Array<string>} lettres 
 * @returns {Array<string| Error}
 */
export const melangerLettre = (lettres) => {
  if(Array.isArray(lettres)){
    const milieuMot = Math.floor(lettres.length / 2)
    const premierCut = lettres.slice(0,milieuMot).reverse();
    const secondCut = lettres.slice(milieuMot,lettres.length).reverse();
    return premierCut.concat(secondCut);
  }
  throw new Error('Bug')
};
/**
 * 
 * @param {string} repJoueur 
 * @param {string} solution 
 * @returns {boolean}
 */
export const checkIfPlayerWin= (repJoueur,solution) => {
  if(typeof(repJoueur) === 'string' && typeof(solution) === 'string'){
    return repJoueur === solution;
  }
  throw new Error('Bug');
};