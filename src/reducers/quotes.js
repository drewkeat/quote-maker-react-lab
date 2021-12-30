export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      let quote = {...action.quote, votes: 0}
      return state.concat(quote);
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId) 
    case "UPVOTE_QUOTE":
      return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes + 1} : quote)
    case "DOWNVOTE_QUOTE":
      quote = state.filter(quote => quote.id === action.quoteId)[0]
      if (quote.votes > 0) {
        return state.map(quote => quote.id === action.quoteId ? {...quote, votes: quote.votes - 1} : quote)
      } else {
        return state
      }
    default:
      return state;
  }
}
