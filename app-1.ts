// Acciones

interface Action {
    type: string;
    payload?: any;
}

function reducer(state = 10, action: Action) {

    /* if(action.type === 'INCREMENTAR'){
        return state + 1
    }
 */
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1
        case 'DECREMENTAR':
            return state -= 1
        case 'MULTIPLICAR':
            return state * action.payload
        case 'DIVIDIR':
            return state / action.payload
        default:
            return state
    }
}

const icrementadorAction: Action = {
    type: 'INCREMENTAR',
}

console.log(reducer(10, icrementadorAction))

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

console.log(reducer(10, decrementadorAction))

const multiplicarAction: Action = {
    type:'MULTIPLICAR',
    payload: 2
}

console.log(reducer(10, multiplicarAction))

const dividirAction: Action = {
    type:'DIVIDIR',
    payload: 2
}

console.log(reducer(10, dividirAction))