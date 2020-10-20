export const palindromeAleatoire = (listePalindrome) =>{
  const max = listePalindrome.length;
  const genererIndex = Math.ceil(Math.random() * (max - 1) + 1);
  return listePalindrome[genererIndex];
};

export const decouperLettre = (mot) =>{
  return mot.split('');
};

export const melangerLettre = (lettres) => {
  const milieuMot = Math.floor(lettres.length / 2)
  const premierCut = lettres.slice(0,milieuMot).reverse();
  const secondCut = lettres.slice(milieuMot,lettres.length).reverse();
  return premierCut.concat(secondCut);
};

export const checkIfPlayerWin= (repJoueur,solution) => {
  return repJoueur === solution;
};