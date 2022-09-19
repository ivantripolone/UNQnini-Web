import { useParams } from 'react-router-dom'

const ErrorPage = () => {
  let { errorId } = useParams()

  return (
    <div>
      <p>Ha habido un error. Disculpe las molestias.</p>
      <p>Error {errorId ? errorId : '404'}</p>
    </div>
  )
}

export default ErrorPage
