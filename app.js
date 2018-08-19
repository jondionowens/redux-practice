const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return  state + 1;
     case 'DECREMENT': 
       return state - 1;
     default:
       return state;
    }
  }
  
  // this basically creates a prototype of the Redux.createStore method, and names it createStore. We can now use this to create any store we'd need by passing in the one required object, which is the reducer that this store should reference
  const { createStore } = Redux;
  
  // this is where we instantiate a new store using createStore, and pass in the reducer called 'counter'
  const store = createStore(counter);
  
  store.dispatch({ type: 'INCREMENT' })
  
  /* store.subscribe(() => {
    document.body.innerText = store.getState();
  }); */
  
  document.addEventListener("click", function(){
      document.getElementById("app").innerHTML += "Hello World";
  });
  
  
  
  
  
  
  
  
  
  
  
  