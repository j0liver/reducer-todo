export const initialState = [
    {
        item: 'Clean Room',
        completed: false,
        id: 12
      },
      {
        item: 'Clean Kitchen',
        completed: false,
        id: 134
      },
      {
        item: 'Laundry',
        completed: false,
        id: 293
      }
]

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        
        case 'TOGGLE_COMPLETE':
          return state.map(todo => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed }
              } else {
                return todo;
              }
            });

          case 'CLEAR_COMPLETED_TODOS':
            return state.filter(todo => !todo.completed);
        
        default: return state;
    }
}
    
