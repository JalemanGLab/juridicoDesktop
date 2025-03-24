const FinancialList = ({changeFinancialCode}:{changeFinancialCode: (code: number) => void}) => {
    return (  
        <div className="absolute top-[50px] left-[360px] flex flex-col rounded bg-white border border-neutral-300 shadow-lg p-1  text-neutral-700 text-sm">
            <div 
            onClick={() => {
                changeFinancialCode(0)
            }}
            className="w-full p-1 px-2 text-neutral-700 text-sm cursor-pointer hover:bg-neutral-100 rounded-md animate-all duration-300">
                Crédito
            </div>
            <div 
            onClick={() => {
                changeFinancialCode(1)
            }}
            className="w-full p-1 px-2 t700 text-sm cursor-pointer hover:bg-neutral-100 rounded-md animate-all duration-300">
                Titular
            </div>
            <div 
            onClick={() => {
                changeFinancialCode(2)
            }}
            className="w-full p-1 px-2 t700 text-sm cursor-pointer hover:bg-neutral-100 rounded-md animate-all duration-300">
                Codeudor 01
            </div>
            <div 
            onClick={() => {
                changeFinancialCode(3)
            }}
            className="w-full p-1 px-2 t700 text-sm cursor-pointer hover:bg-neutral-100 rounded-md animate-all duration-300">
                Codeudor 02
            </div>

        </div>
    );
}
 
export default FinancialList;