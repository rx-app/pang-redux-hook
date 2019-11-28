// import React, { Component } from 'react';

// class Example3 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }
    
    
//     componentDidMount(){
//         console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//     }

//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }
 
// export default Example3;


import React, { useState , useEffect } from 'react';
function Example(){
    const [ count , setCount ] = useState(0);
    //---关键代码---------start-------
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
    })
    //---关键代码---------end-------

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export default Example;
