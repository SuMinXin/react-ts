import * as React from 'react';
import InputChild from './InputChild'
import { checkEmpty, checkNumber, checkEmail } from './validate';

interface I_Nested_State {
    init: boolean,
    result: {
        status?: boolean;
        ErrMsg: {
            nameErr: string,
            phoneErr: string,
            emailErr: string
        }
    }
}


class NestedParent extends React.Component<{}, I_Nested_State> {

    state = {
        init: true,
        result: {
            status: false,
            ErrMsg: {
                nameErr: '',
                phoneErr: '',
                emailErr: ''
            }
        },
    }

    const = require('lodash');

    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.nameErr = nameErrMsg
        this.setState({ result: newResult })
    }

    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.phoneErr = phoneErrMsg
        this.setState({ result: newResult })
    }

    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.emailErr = emailErrMsg
        this.setState({ result: newResult })
    }

    /*
    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const result = {
            ErrMsg: {
                nameErr: nameErrMsg,
            }
        }
        this.setState({ result: result })
    }
    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const result = {
            ErrMsg: {
                phoneErr: phoneErrMsg,
            }
        }
        this.setState({ result: result })
    }
    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const result = {
            ErrMsg: {
                emailErr: emailErrMsg,
            }
        }
        this.setState({ result: result })
    }
    */




    render() {
        const { nameErr, phoneErr, emailErr } = this.state.result.ErrMsg


        return (
            <div>
                <InputChild label={'姓名'} placeholder="姓名不能留白" onBlur={(e: any) => this.handleName(e.target.value)} errMsg={nameErr} />
                <InputChild label={'電話'} placeholder="請輸入數字" onBlur={(e: any) => this.handlePhoneNum(e.target.value)} errMsg={phoneErr} />
                <InputChild label={'Email'} placeholder="請輸入email格式" onBlur={(e: any) => this.handleEmail(e.target.value)} errMsg={emailErr} />

            </div>
        )
    }
}

export default NestedParent