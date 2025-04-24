import { LuDatabase } from "react-icons/lu"; //base de datos
import { BiWallet } from "react-icons/bi"; //cartera
import { RiDiscountPercentLine } from "react-icons/ri"; //campañas
import { RiUserReceivedLine } from "react-icons/ri"; //asignacion
import { LuChartNoAxesCombined } from "react-icons/lu"; //decil
import { RiMoneyDollarCircleLine } from "react-icons/ri"; //saldo
import { FaHandHoldingUsd } from "react-icons/fa"; //aportes

import { DTOCard } from "./DTOCard";

const useCard = () => {
    

    const dataCard: DTOCard[] = [
        {
            icon: <LuDatabase/>,
            title: "Base",
            opc: () => {}
        },
        {
            icon: <BiWallet/>,
            title: "Cartera",
            opc: () => {}
        },
        {
            icon: <RiDiscountPercentLine />,
            title: "Campañas",
            opc: () => {}
        },
        {
            icon: <RiUserReceivedLine />,
            title: "Asignacion",
            opc: () => {}
        },
        {
            icon: <LuChartNoAxesCombined />,
            title: "Decil",
            opc: () => {}
        },
        {
            icon: <RiMoneyDollarCircleLine />,
            title: "Saldo",
            opc: () => {}
        },
        {
            icon: <FaHandHoldingUsd />,
            title: "Aportes",
            opc: () => {}
        }
    ]

    return {
        dataCard
    }
}

export default useCard;
