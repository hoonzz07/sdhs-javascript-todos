const new_todo = document.querySelector(".new-todo")




//  'click'
//  'input' 
//  'keyup'

// new_todo.addEventListener('keyup', new_todo_click_handler)

// function new_todo_click_handler(e) {
  
//   if(e.key === 'Enter') {
//     console.dir(new_todo.value);
//     if(new_todo.value === "hello"){
//       console.log("hello")
//     }
//   }
 
// }

// // 변수 지정후 document.querySelector로 document 에 css 를 불러온다
// const new_active = document.querySelector(".filters > li:nth-child(2) > a"); 
// console.log(new_active);

// // function 함수 이름 설정후 console.log "hello" 를 출력
// function new_active_click_handler(e){
//   console.log(e);
// }

// // 지정한 new_active 변수에 EventListener - click 함수 지정
//  new_active.addEventListener('click', new_active_click_handler)

const element = document.createElement('p')


// element.innerText = "<h1>wjd</h1>"
// element.innerHTML = "<h6>wjhgvhfgvhfgvhd</h6>"
// console.log(element);


// document.body.append(element)

new_todo.addEventListener('keyup', new_todo_click_handler)
const new_view = document.querySelector(".view")
let todos =[];

const fetchTodos = () => {
  todos = JASON.parse(localStorage.getItem("todos")) || [] ;
}

function new_todo_click_handler(e) {

  if(e.key === 'Enter') {
  }
 
}


