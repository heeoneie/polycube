import { forwardRef, type TextareaHTMLAttributes } from 'react'

type Props = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>

const BaseTextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    return <textarea {...props} ref={ref} />
})

export default BaseTextArea
