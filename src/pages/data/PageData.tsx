import Layout from "../../components/layout/Layout";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import usePageData from "./usePageData";

const PageData = () => {

    const {option, setOption} = usePageData();

    return ( 
        <Layout>
            <div className="flex flex-col w-full h-full">
                <div className="flex w-full h-[50px] items-center px-2 border-b border-neutral-200">
                    <div className="text-lg font-semibold">
                        Panel de  actualizacion de  bases datos
                    </div>
                </div>
                <div className="flex justify-center items-start py-32 w-full h-[calc(100%-50px)]">
                    <Card option={option} setOption={setOption} />
                </div>
            </div>
            <div className="">
                {
                    option && (
                        <Modal option={option} setOption={setOption} />
                    )
                }
            </div>
        </Layout>
     );
}
 
export default PageData;