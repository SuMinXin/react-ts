import * as React from 'react';
import LifeCycleChild from './LifeCycleChild'
import LifeCyclePic from './reactLifeCycle.png'

interface I_State {
    initial: boolean;
    isRender: boolean;
}

class LifeCycle extends React.Component<any, I_State> {

//補state

    render() {

        return (
            <>
                {/* {this.state.isRender && <LifeCycleChild />} */}
                <LifeCycleChild />
                <div style={{ border: "solid red 1px" }}>LifeCycle 父層
                <img width="100%" height="100%" alt="ReactLifeCycle" src={LifeCyclePic}></img>
                    {/* <button onClick={() => this.setState({ initial: true })}>setState</button>
                    <button onClick={() => this.setState({ isRender: !this.state.isRender })}>setIsRender</button> */}
                </div>

            </>
        )
    }

}

export default LifeCycle;