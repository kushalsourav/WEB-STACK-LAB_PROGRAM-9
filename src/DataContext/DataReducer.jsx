const DataReducer = (state, action) => {
    switch (action.type) {
       case "BOOK" :
            return {...state, books: action.payload}
       case "SEARCH" :
           return {...state, search:action.search};
        case "Id" : 
           return {...state, ID: action.ID}
    case "REVIEW" : 
         return {...state, review: state.review.concat(action.review)}
       default:
           return state;
           
    };
};

export default DataReducer;