const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
        alert('Good Job! Keep Going!')
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
        alert('Added back to the list...')
    }catch(err){
        console.log(err)
    }
}
// Font selector
const fontSelector = document.getElementById('font-selector');

fontSelector.addEventListener('change', (event) => {
    document.body.style.fontFamily = event.target.value;
});

// Color selector
const colorSelector = document.getElementById('color-selector');

colorSelector.addEventListener('change', (event) => {
    document.body.style.backgroundColor = event.target.value;
});

// async function changeColor(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/changeColor', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//         alert('You Donkey!')
//     }catch(err){
//         console.log(err)
//     }
// }

// Settings Menu
document.querySelector('.settings-icon').addEventListener('click', visible)
document.querySelector('.submitSettings').addEventListener('click', visible)
function visible(){
    document.querySelector('#settings').classList.toggle('hidden')
}
