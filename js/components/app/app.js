import React, { Component } from 'react';
import { connect } from "react-redux";

import List from '../list/list';
import { addArticle } from '../../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class App extends React.Component {
    constructor() {
        super();

        this.addArticle = this.addArticle.bind(this);
    }

    addArticle() {
        this.props.addArticle({ id: 1, title: 'My second article' });
    }

    render() {
        return (
            <div>
                <button onClick={this.addArticle} >Add Article</button>
                <h2>Articles</h2>
                <List />
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);