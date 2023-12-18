

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
  
  // const element = document.createElement('p')
  
  
  // element.innerText = "<h1>wjd</h1>"
  // element.innerHTML = "<h6>wjhgvhfgvhfgvhd</h6>"
  // console.log(element);
  
  
  // document.body.append(element)
  
  // const new_view = document.querySelector(".view")
  
  // const new_todo = document.querySelector(".new-todo")
  // function new_todo_click_handler(e) {
  //   if(e.key === 'Enter') {
  //     const abc = document.querySelector('.abc');
  //     abcChild.innerText = new_todo.value;
  //     let abcChild = document.createElement('span');
  //     abc.appendChild(abcChild)
  //   }
  // }
  // new_todo.addEventListener('keyup', new_todo_click_handler)

  const new_todo = document.querySelector(".new-todo");

  function new_todo_click_handler(e) {
    if (e.key === 'Enter') {
      const todo_list = document.querySelector('.todo-list');
      //   new_todo.value
      todo_list.append(createTodoItem(new_todo.value));
      new_todo.value = '';
    }
    
  }
  
  new_todo.addEventListener('keyup', new_todo_click_handler);
  

  function createTodoItem(text){
    const $li = document.createElement('li')
    const $div = document.createElement('div')
    const $input = document.createElement('input')
    const $label = document.createElement('label')
    const $button = document.createElement('button')
    $div.className = 'view';
    $input.className = 'toggle';
    $button.className = 'destroy';
    $input.type = 'checkbox'
    
    $label.innerText = text;
    $li.append($div);
    $div.append($input);
    $div.append($label);
    $div.append($button);
    
    return $li;
    
  }

const destroy = document.querySelector(".destroy");

function destroy_click_handler(e){
  const li = e.target.closest('li');
  li.remove();
}

destroy.addEventListener('click' , destroy_click_handler)



