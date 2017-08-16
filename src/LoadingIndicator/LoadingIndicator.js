import React, {Component} from 'react';

class LoadingIndicator extends Component {
    render() {
        return (
            <div className="loading-indicator">
                <img src="/loading.svg" alt="Loading" />
                <span>Please wait while you process your request.</span>
            </div>
        )
    }
}

export default LoadingIndicator;