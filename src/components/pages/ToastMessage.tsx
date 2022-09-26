interface ButtonProps {
    getMessage : string
    getShowFlag : string
    setShowFlag : any
  }


const ToastMessage = ({getMessage, getShowFlag, setShowFlag} : ButtonProps) => {
    
    return(
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div className={`toast ${getShowFlag}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto">UNQNINI Adviser</strong>
                    <button type="button" className="btn-close" onClick={() => setShowFlag('hide') }></button>
                </div>
                <div className="toast-body">{getMessage}</div>
            </div>
        </div>
    )
}

export default ToastMessage