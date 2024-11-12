import Input from '../atoms/Input'
import Label from '../atoms/Label'


interface FormFieldProps {
    label: string;
    type: string;
    placeholder?: string;
}

function FormField({label, type, placeholder}: FormFieldProps) {
  return (
    <div>
        <Label title={label} />
        <Input type={type} placeholder={placeholder} />
    </div>
  )
}

export default FormField
