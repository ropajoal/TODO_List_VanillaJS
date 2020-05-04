const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let newTodo = prompt('Add TODO')
  if(newTodo !== "" && newTodo !== null){
    let newItem = document.createElement("li")
    newItem.classList.add(classNames.TODO_ITEM)

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add(classNames.TODO_CHECKBOX)
    checkbox.addEventListener("click",(e)=>{
      if(e.target.checked)
        uncheckedCountSpan.innerHTML=(Number(uncheckedCountSpan.innerHTML)-1).toString()
      else
        uncheckedCountSpan.innerHTML=(Number(uncheckedCountSpan.innerHTML)+1).toString()
    })

    let span = document.createElement("span")
    span.classList.add(classNames.TODO_TEXT)
    span.innerHTML = newTodo

    let deleteB = document.createElement("button")
    deleteB.classList.add(classNames.TODO_DELETE)
    deleteB.innerHTML = "Delete"
    deleteB.addEventListener("click",(e)=>{
      e.preventDefault()
      let checkbox = e.target.parentElement.firstElementChild
      if(!checkbox.checked)
        uncheckedCountSpan.innerHTML=(Number(uncheckedCountSpan.innerHTML)-1).toString()
      itemCountSpan.innerHTML = (Number(itemCountSpan.innerHTML)-1).toString()
      e.target.parentElement.remove()    
    })

    newItem.appendChild(checkbox)
    newItem.appendChild(span)
    newItem.appendChild(deleteB)
    list.appendChild(newItem)
    itemCountSpan.innerHTML = (Number(itemCountSpan.innerHTML)+1).toString()
    uncheckedCountSpan.innerHTML = (Number(uncheckedCountSpan.innerHTML)+1).toString()
  }
}
