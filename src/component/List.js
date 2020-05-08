import React, { Component } from 'react';
import HOC from './HOC'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
       
    }
    render() { 
        return ( <div className='moviesCard'>
            {this.props.movies.map(e=><div key={e.id} className='film'>
                <p>{e.rating}</p>
                <img className='image' src={e.src} alt=""/>
                <h3>{e.title}</h3>

            </div>)}
        </div> );
    }
}
 
export default HOC(List);