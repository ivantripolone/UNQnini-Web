import { useParams } from 'react-router-dom'
import erroricon from '../../assets/erroricon.png'

const ErrorPage = () => {
  let { errorId } = useParams()

  return (
    <div className='d-flex flex-row ErrorBox'>
      <div className='d-flex flex-column ErrorPic'>
        <img src={erroricon} alt='' width='128' height='128'></img>
      </div>
      <div className='d-flex flex-column ErrorBody'>
        <h1>Ha habido un error. Disculpe las molestias.</h1>
        <h2>Código de error: {errorId ? errorId : '404'}</h2>
      </div>
    </div>
  )
}

export default ErrorPage
