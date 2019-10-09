

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

            case "IS_COMPLETE":
        return ({
          data: state.data.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                done: !item.done
              };
            } else {
              return item;
            }
          })
        })
          default:
              return state;
      }
  }