
import Content from "../components/Content/content"
import './main.css'
import { changeData, createObject } from '../redux/main_reduser'
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form'

const Main = () => {

  const { handleSubmit, register } = useForm()
  const dispatch = useDispatch()
  const state = useSelector((state) => state.contentData)

  const onSubmit = (dataInput) => {
    let pathStr = dataInput.changeCall

    if (pathStr[0] === '{') {
      dispatch(createObject(dataInput))
    } else dispatch(changeData(dataInput))
  }

  console.log(state)
  return (
    <div className='main'>
      <div className="controlPanel">
        <form onSubmit={handleSubmit(onSubmit)} >
          <label>       путь
            <input
              {...register('path')}
              type='text'
            />
          </label>

          <label> новое значение
            <input
              {...register('changeCall')}
              type="text"
            />
          </label>

          <button type='submit' >Применить</button>
        </form>
      </div>
      <div className="content">
        <Content props={state} />
      </div>
    </div>
  )
}

export default Main