let username: string = 'twahir';

console.log(username);

const juma = () => {
    console.log(4+5);

    let wordReader = (text: string) => {
        return console.log(text.toString());
    }
    
    return (
        setTimeout(timer, 2000),
        setTimeout(timer2, 1000),
        wordReader('Twahir')
    )
}

function timer() {
    console.log('timer is done!')
}

function timer2() {
    console.log('timer2 is done!')
}

juma()

// basic types
let arr: number[] = [1, 2, 3, 4];

arr.push(30)

console.log(arr)