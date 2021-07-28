import React from 'react'

function ErrorMessage({message}) {
    return (
        <div>
            {
                message && <span className="errors">{message}</span>
            }
        </div>
    )
}

export default ErrorMessage
