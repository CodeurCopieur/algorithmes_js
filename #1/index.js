/* Trouve le mot le plus long */

function firstMethod(params) {
  
  let mots = params.split(" ");
  let longMax = 0;
  let mot;

  /* For loop */
  for (let index = 0; index < mots.length; index++) {
    mots[index].length > longMax ? longMax = mots[index].length : null;
    mots[index].length == longMax ? mot = mots[index] : null;
  }

  console.log(longMax, mot);
}

console.log(firstMethod("Lorem ipsum dolor sit amet consectetur adipisicing elit Modi ab aut sapiente iste officia fugit consequatur magnam accusamus odio nisi azertyuiop123456789"));


function secondMethod(params) {

  /* fonction CallBack */
  return params.split(' ').reduce( (x, y) => Math.max(x, y.length), 0)
}

console.log(secondMethod("Lorem ipsum dolor sit amet consectetur adipisicing elit Modi ab aut sapiente iste officia fugit consequatur magnam accusamus odio nisi azertyuiop123456789"));

function thirdMethod(params) {
  params = params.split(' ');

  /* fonction récursive */

  if (params.length == 1) {
    return params[0].length;
  }

  if(params[0].length >= params[1].length) {
    /* si params[1] qui n'est pas superieur à params[0] 
       donc on slice(position, nombre) */
    params.splice(1,1);
    
    /* rendre le tableau sous forme de chaîne de caractère */
    return thirdMethod(params.join(' '));
  }

  if(params[0].length <= params[1].length) {
    /* si params[1] est superieur à params[0] 
       retourne le tableau de chaine decaractère sans le première élément */
    return thirdMethod(params.splice(1, params.length).join(' '));
  }

}

console.log(thirdMethod("Lorem ipsum dolor sit amet consectetur adipisicing elit Modi ab aut sapiente iste officia fugit consequatur magnam accusamus odio nisi azertyuiop123456789"));