import { formateNumber } from "../../../../utils/formateNumber";

const Balance = ({ title, value, bg }: { title: string, value: string, bg: string }) => {
    return (
        <div className={`flex flex-col w-full rounded-sm h-11 ${bg} relative `}>
            <div className="absolute top-1 left-1 text-[10px] text-neutral-500 ">
                {title}
            </div>
            <div className="absolute bottom-0 right-1 text-xl text-right text-neutral-800 font-semibold ">
                $ {formateNumber(value)}
            </div>

        </div>
    );
}

export default Balance;