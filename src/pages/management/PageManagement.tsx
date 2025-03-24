import Layout from "../../components/layout/Layout";
import usePageManagerment from "./usePageManagerment";

//Data
import { ListFinancial } from "../../data/ListFinancial";

//components info
import InfoCredit from "./components/info/Infocredit";
import InfoHolder from "./components/info/InfoHolder";
import InfoCoDebtor01 from "./components/info/InfoCoDebtor01";
import InfoCoDebtor02 from "./components/info/InfoCoDebtor02";




import { GrFlag } from "react-icons/gr";
import { LuLoaderCircle } from "react-icons/lu";
import { HiOutlineCollection } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { MdAttachMoney } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LiaToolsSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { GrLinkNext } from "react-icons/gr";



import ControllerButtonAction from "../../components/buttons/ControllerButtonAction/ControllerButtonAction";

//Floating
import FinancialList from "./components/floating/financialList/financialList";
import Balance from "./components/balance/Balance";

const PageManagement = () => {

	const {
		initialLoading,
		financialCode,
		changeFinancialCode,




		type,
		codeType,
		setType,
		setCodeType,

		setInitialLoading,
		showInfo,
		setShowInfo,
		isSliceOpen,
		setIsSliceOpen,
		showFinancialList,
		setShowFinancialList
	} = usePageManagerment();
	return (
		<Layout>
			<div className="flex flex-col w-full h-full text-neutral-800  relative">

				<div className="flex flex-row w-full h-[50px] justify-between  border-b border-neutral-200">
					<div className="flex flex-row w-[400px] h-[50px] ">
						<div className="flex flex-row w-full h-[50px] justify-start items-center pr-2 pl-2 font-semibold text-lg">
							{ListFinancial[financialCode]}
						</div>
						<div className="flex flex-row justify-end items-center w-[200px] h-[50px] pr-2  pl-2">
							<ControllerButtonAction
								size="sm"
								state="disabled"
								onClick={() => { setShowFinancialList(!showFinancialList) }}
								children={<HiOutlineCollection />}
							/>
						</div>
					</div>
					<div className="flex flex-row justify-end items-center w-[500px] h-full border-l border-neutral-200 pr-2  pl-2">
						<div className="flex flex-row gap-3  h-full  justify-end items-center">
							<ControllerButtonAction
								size="sm"
								state="disabled"
								onClick={() => { }}
								children={<IoSearchOutline />}
							/>
							<ControllerButtonAction
								size="sm"
								state="disabled"
								onClick={() => { }}
								children={<HiAdjustmentsVertical />}
							/>
							<ControllerButtonAction
								size="sm"
								state="disabled"
								onClick={() => { }}
								children={<GrLinkNext />}
							/>
						</div>
					</div>
				</div>


				<div className="flex flex-row w-full h-full justify-between">

					<div className="flex flex-row w-[400px] h-full">
						<div className="flex  w-full h-full   overflow-hidden relative">
							<div className="absolute top-0 left-0 flex flex-col w-full h-full p-1 overflow-y-auto ">

								<div className="flex flex-row w-full gap-4 py-1">
									<div className="flex flex-row w-1/2 ">
										<Balance
											title="Saldo Capital"
											value="1000000000"
											bg="bg-neutral-100"
										/>
									</div>
									<div className="flex flex-row w-1/2">
										<Balance
											title="Saldo Total"
											value="1000000000"
											bg="bg-red-50"
										/>
									</div>

								</div>


								{financialCode === 0 && <InfoCredit />}
								{financialCode === 1 && <InfoHolder />}
								{financialCode === 2 && <InfoCoDebtor01 />}
								{financialCode === 3 && <InfoCoDebtor02 />}
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-end items-center w-[500px] h-full border-l border-neutral-200 pr-2  pl-2">
						<div className="flex  w-full h-full   overflow-hidden relative">
							<div className="absolute top-0 left-0 flex flex-col w-full h-full p-1 overflow-y-auto ">
							</div>
						</div>
					</div>


				</div>




				<div className="flex flex-row  w-full h-[50px] items-center  justify-between pr-2 pl-2  border-t border-neutral-200  ">
					<div className="flex flex-row gap-3  h-full  justify-end items-center">

						<ControllerButtonAction
							size="md"
							state="disabled"
							onClick={() => { }}
							children={<FaPhoneAlt />}
						/>

						<div className="flex flex-row pl-1 pr-1 text-neutral-600">
							00:00
						</div>

						<ControllerButtonAction
							size="md"
							state="disabled"
							onClick={() => { }}
							children={<LuMessageSquareMore />}
						/>
						<ControllerButtonAction
							size="md"
							state="disabled"
							onClick={() => { }}
							children={<MdOutlineEmail />}
						/>

					</div>
					<div className="flex flex-row gap-3  h-full  justify-end items-center">
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<HiOutlinePencilSquare />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<MdAttachMoney />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<GoBell />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<MdOutlineMapsHomeWork />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<MdOutlineHealthAndSafety />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<LiaToolsSolid />}
						/>
						<ControllerButtonAction
							size="sm"
							state="disabled"
							onClick={() => { }}
							children={<GrFlag />}
						/>
					</div>
					<div className="flex flex-row gap-3  h-full  justify-end items-center">
						<ControllerButtonAction
							size="xl"
							state="disabled"
							onClick={() => { }}
							children={<FaPlay />}
						/>
					</div>
				</div>


				{initialLoading && (
					<div className="flex flex-row w-full h-full justify-center items-center bg-neutral-300 opacity-40 absolute top-0 left-0">
						<LuLoaderCircle className="text-neutral-800 text-6xl animate-spin" />
					</div>
				)}




				{/* Floating */}
				{showFinancialList && <FinancialList changeFinancialCode={changeFinancialCode} />}


			</div>


		</Layout>
	);
}

export default PageManagement;