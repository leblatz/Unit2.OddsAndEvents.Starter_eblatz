// console.log('hello world!')

const state = {
    number: [],
    odd: [],
    even: []

}

const form = document.querySelector("form")
const numBank = document.querySelector("#numberBank output")
const oddBank = document.querySelector("#odds output")
const evenBank = document.querySelector("#evens output")
const sortOne = document.querySelector("#sortOne")
const sortAll = document.querySelector("#sortAll")




function render () {
    //number bank
    const numbers = state.number.map ((num) => {
        return `<span> ${num}</span>`
    }
    )
    console.log(numbers)
    numBank.innerHTML = numbers.join('')
    


//odds
    const odds= state.odd.map((num) =>{
        return `<span> ${num}</span>`

    }
    )
    oddBank.innerHTML = odds.join("")



//evens
const evens= state.even.map((num) =>{
    return `<span> ${num}</span>`

}
)
    evenBank.innerHTML = evens.join('')


}



//remember to render

form.addEventListener("submit", (event) =>{
        event.preventDefault()
        const numAdded = event.target.number.value

        state.number.push(numAdded)
        
        event.target.number.value=''

        render()
}
)

sortOne.addEventListener('click', () => {
    const sorting = state.number.shift()
    //evens are divisible by 2
    if(sorting%2 === 0){
        state.even.push(sorting)
    }else {
        state.odd.push(sorting)
    }
    render()
})

sortAll.addEventListener('click', () => {
    state.number.map((num) => {
        if (num%2 === 0){
            state.even.push(num)
        }else {
            state.odd.push(num)
        }
    })
    state.number=[]

    render ()
})