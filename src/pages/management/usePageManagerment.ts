import { useState } from "react";

const usePageManagerment = () => {

	const [financialCode, setFinancialCode] = useState<number>(0);

	const [type, setType] = useState<string>("CRÉDITO");

	const [codeType, setCodeType] = useState<number>(0);
	const [initialLoading, setInitialLoading] = useState<boolean>(false);
	const [showInfo, setShowInfo] = useState<number>(0);
	const [showFinancialList, setShowFinancialList] = useState<boolean>(false);
	const [isSliceOpen, setIsSliceOpen] = useState<boolean>(false);


	const changeFinancialCode = (code: number) => {
		setFinancialCode(code);
		setShowFinancialList(false);
	}
	

	return {
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
	};
}

export default usePageManagerment;