import { Calendar } from "../../../ui/calendar"
import { useState } from "react"
const ControllerInputDate = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
	return (
		<div>
            <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
        </div>
	);
};

export default ControllerInputDate;