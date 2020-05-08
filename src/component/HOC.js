import React, { Component } from 'react';
import Spinner from './Spinner';
const HOC = (WrappedComponent) => {
    return (
        class HOC extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    

                }
               
            }
            render() {
                return (<div>
                   {(this.props.isLoading)? <Spinner />:<WrappedComponent {...this.props} />}
                    </div>
                );
            }
        }
    )
}

export default HOC;
