import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"
import { ToastContextType } from "../../context/ToastContext"


const ToastMessage = () => {
    const { message, setMessage } = useContext(DataContext) as ToastContextType
    const [text, setText] = useState('')
    const [showFlag, setShowFlag] = useState('hide')

    const hideToast = () => {
        setMessage('')
    }

    useEffect(() => {
        if (message != '') {
            setText(message)
            setShowFlag('show')
        } else {
            setShowFlag('hide')
        }

    }, [message])

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className={`toast ${showFlag}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <h5 className="me-auto"><strong>UNQNINI Adviser</strong></h5>
                    <button type="button" className="btn-close" onClick={hideToast}></button>
                </div>
                <div className="toast-body"><h6>{text}</h6></div>
            </div>
        </div>
    )
}

export default ToastMessage