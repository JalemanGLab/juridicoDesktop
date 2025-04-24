
import useCard from "./useCard";


const Card = ({option, setOption}: {option: string, setOption: (option: string) => void}) => {

    const {dataCard} = useCard();

    return (
        <div className="grid grid-cols-4 gap-10">
            {dataCard.map((dataCard) => (
            <div key={dataCard.title} onClick={() => setOption(dataCard.title)} className="flex flex-col justify-center items-center cursor-pointer w-[110px] h-[100px] bg-neutral-100 rounded-[10px]  hover:bg-neutral-200">
                <div className="text-4xl text-neutral-700">{dataCard.icon}</div>
                    <div className="text-md font-semibold text-neutral-700">{dataCard.title}</div>
                </div>
            ))}
        </div>
     );
}

export default Card;