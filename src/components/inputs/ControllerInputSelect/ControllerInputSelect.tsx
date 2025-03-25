import { FaChevronDown } from "react-icons/fa";

interface SelectOption {
  value: string;
  label: string;
}

interface ControllerInputSelectProps {
  name: string;
  register: any;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errors: any;
  rules: any;
  childrenIcon?: React.ReactNode;
  options: SelectOption[];
  placeholder?: string;
}

const ControllerInputSelect = ({ 
  name, 
  register, 
  onChange, 
  errors, 
  rules, 
  childrenIcon, 
  options,
  placeholder = "Seleccionar..."
}: ControllerInputSelectProps) => {
  return (
    <div className="relative w-full h-[36px]">
      <select
        {...register(name, rules)}
        onChange={(e) => {
          onChange?.(e);
        }}
        defaultValue=""
        className={`absolute top-0 left-0 w-full h-full rounded-md overflow-hidden pl-10 pr-9 text-neutral-600 text-right
        border ${errors?.[name] ? 'border-red-500' : 'border-neutral-800'} appearance-none`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute top-0 left-0 w-9 h-full rounded-md flex items-center justify-center text-neutral-400">
        <div className="w-full h-5 flex items-center justify-center border-r border-neutral-400">
          {childrenIcon || <FaChevronDown />}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-9 h-full pointer-events-none flex items-center justify-center text-neutral-400">
        <FaChevronDown size={12} />
      </div>
    </div>
  );
};

export default ControllerInputSelect;