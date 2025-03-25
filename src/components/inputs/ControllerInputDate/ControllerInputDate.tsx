import { FaCalendarAlt } from "react-icons/fa"

interface ControllerInputDateProps {
  name: string
  register: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: any
  rules: any
  childrenIcon?: React.ReactNode
}

const ControllerInputDate = ({ name, register, onChange, errors, rules, childrenIcon }: ControllerInputDateProps) => {
  return (
    <div className="relative w-full h-[36px]">
      <input
        {...register(name, rules)}
        onChange={(e) => {
          onChange?.(e);
        }}
        type="date"
        className={`absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-10 pr-3 text-neutral-600 text-right
        border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'}`}
      />
      <div className="absolute top-0 left-0 w-9 h-full rounded-md flex items-center justify-center text-neutral-400">
        <div className="w-full h-5 flex items-center justify-center border-r border-neutral-400">
          {childrenIcon || <FaCalendarAlt />}
        </div>
      </div>
    </div>
  );
};

export default ControllerInputDate;