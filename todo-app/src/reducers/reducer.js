

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  };

  export const reducer = (state, action) => {
      switch (action.type) {
        case "ADD_TODO":
            return {
              data: [
                ...state.data,
                {
                  id: Date.now(),
                  title: action.payload,
                  done: false,
                  date: new Date()
                }
              ]
            }
          default:
              return state;
      }
  }