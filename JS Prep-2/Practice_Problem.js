// var arr = [1,2,3,4,5]

// for(var i=0; i<arr.length; i++){
//   setTimeout(()=>console.log(arr[i],i),i*1000)
// }

// console.log('value of i after for loop',i)

/*
The output is
value of i after for loop 5
undefined 5
undefined 5
undefined 5
undefined 5
undefined 5
*/

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  console.log('keys1:', object1[keys1])
  const keys2 = Object.keys(object2);
  console.log('keys2:', keys2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

// const hero1 = {
//   name: "Batman",
//   realName: "Bruce Wayne",
// };
// const hero2 = {
//   name: "Batman",
//   realName: "Bruce Wayne",
// };
// const hero3 = {
//   name: "Joker",
// };
shallowEqual(hero1, hero2);






function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        (areObjects && !deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === "object";
  }
  
  console.log(deepEqual(hero1, hero2));

  const hero1 = {
    name: 'Batman',
    address: {
      city: 'Gotham'
    }
  };
  const hero2 = {
    name: 'Batman',
    address: {
      city: 'Gotham'
    }
  };






