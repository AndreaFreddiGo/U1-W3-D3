const form = document.getElementById('main-form')
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const newTaskInput = document.getElementById('task')
  const newTask = newTaskInput.value
  const newAddedTask = document.createElement('li')
  newAddedTask.classList.add('li-style')
  newAddedTask.innerText = newTask

  const newButton = document.createElement('button')
  newButton.innerText = 'CLICK TO REMOVE'
  newAddedTask.appendChild(newButton)
  const ul = document.getElementsByTagName('ul')[0]
  ul.appendChild(newAddedTask)
  form.reset()
})
