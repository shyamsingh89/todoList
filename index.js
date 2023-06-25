const to_dos = JSON.parse(localStorage.getItem('todos'))

if(to_dos) {
    to_dos.forEach(todo => addTodo(todo))
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = document.getElementById('input').value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todol = document.createElement('li')
        if(todo && todo.completed) {
            todol.classList.add('completed')
        }

        todol.innerText = todoText

        todol.addEventListener('click', () => {
            todol.classList.toggle('completed')
            updateLS()
        }) 

        todol.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todol.remove()
            updateLS()
        }) 

        document.getElementById('todos').appendChild(todol)

        document.getElementById('input').value = ''

        updateLS()
    }
}

function updateLS() {
    todosl = document.querySelectorAll('li')

    const todos = []

    todosl.forEach(todol => {
        todos.push({
            text: todol.innerText,
            completed: todol.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}