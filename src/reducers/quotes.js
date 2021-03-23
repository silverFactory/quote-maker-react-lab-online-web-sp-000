export default (state = [], action) => {
  let idx
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idx = state.findIndex(el => el.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx+1)]
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(el => el.id === action.quoteId)
      debugger
      let upVoted = Object.assign({}, state[idx], {votes: state[idx].votes+1})
      return [...state.slice(0, idx), upVoted, ...state.slice(idx+1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(el => el.id === action.quoteId)
      if (state[idx].votes === 0){
        return state
      } else {
        let downVoted = Object.assign({}, state[idx], {votes: state[idx].votes-1})
        return [...state.slice(0, idx), downVoted, ...state.slice(idx+1)]
      }
    default:
      return state
  }
}
