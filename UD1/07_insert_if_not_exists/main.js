const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    //filtro si existe el item en el array o no
    if(!array.includes(item))
    {
        //
        if(position)
        {
            array.unshift(item)
        }
        else 
        {
            array.push(item)
        }  
    }
    return array
}

//array
let array = ['pera', 'manzana']

//inserts frutas
insertIfNotExists(array, 'pera', false)
insertIfNotExists(array, 'platano', true)
insertIfNotExists(array, 'uva', false)

//Muestra el array por pantalla
console.log(array);

// result = insertIfNotExists(array, 'melón', false)
// assert.deepStrictEqual(result, ['pera', 'manzana', 'melón'])

// result = insertIfNotExists(array, 'melocotón', true)
// assert.deepStrictEqual(result, ['melocotón', 'pera', 'manzana', 'melón'])

