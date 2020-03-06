import * as React from 'react';

class HelloClass extends React.Component<any, any> {

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
