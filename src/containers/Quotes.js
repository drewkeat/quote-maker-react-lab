import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "../actions/quotes"

class Quotes extends Component {
  buildQuotes = () => {
    return this.props.quotes.map(quote => {
      return (
      <QuoteCard 
        key={quote.id}
        quote={quote}removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
      )
    })
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.buildQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    quotes: store.quotes
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
