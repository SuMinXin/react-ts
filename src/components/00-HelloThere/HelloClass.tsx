import * as React from 'react';

interface I_props{
    name:string,
    gender:string
}

interface I_states{
    age:number,
    test:string
}

class HelloClass extends React.Component<I_props, I_states> {

    state = {
        age: 18
    }

    render() {
        // console.log('this.props', this.props);
        return (
            <div style={{ border: 'solid black 1px', padding: '5px' }}>
                <div>
                    Hi there! test<br/>
                    I'm {this.props.name}<br/>
                    I'm {this.state.age}<br/>
                    <button onClick={()=>{this.setState({age:this.state.age + 1})}}>Add Age</button>
                </div>


            </div>
        )
    }
}

export default HelloClass;
