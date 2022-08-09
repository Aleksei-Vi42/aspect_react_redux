import { createSlice, createAction, createReducer } from '@reduxjs/toolkit'
import objectPath from 'object-path'

let initialState = [
    {
        type: 'panel',
        props: {
            width: 200,
            height: 200,
            visible: true,

        },
    },
    {
        type: 'label',
        props: {
            caption: 'test',
            visible: true
        },
    },
    {
        type: 'button',
        props: {
            width: 100,
            height: 50,
            visible: true
        },
    },

]

export const changeData = createAction('CHANGE_DATA', function prepare(data) {

    return {
        payload: {
            data,
            path: data.path,
            changeCall: data.changeCall
        }
    }
})

export const createObject = createAction('CREATE_OBJECT', function prepare(data) {

    return {
        payload: {
            data,
            objStr: data.changeCall
        }
    }
})

const mainReduser = createReducer(initialState, {
    [changeData]: function (state, action) {
        let index = action.payload.path.replace(/[^0-9, ]/g, "")
        let parts = action.payload.path.split('.')
        let changeCall = (string) => {
            let obj = { type: 'label' }
            if (string === 'false') {
                return false
            } else if (string === 'true') {
                return true
            } else return string
        }
        state[index][parts[1]][parts[2]] = changeCall(action.payload.changeCall)
    },
    [createObject]: function (state, action) {
        let strToObj = (str) => {
            let obj = {}
            if (str && typeof str === 'string') {
                let objStr = str.match(/\{(.)+\}/g)
                eval("obj =" + objStr)
            }
            return obj
        }
        
        state = state.push(strToObj(action.payload.objStr))
     
    }
})

export default mainReduser
