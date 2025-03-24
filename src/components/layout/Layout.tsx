import { LayoutProps } from "./layoutDTO/LayoutDTO";
import Menu from "../menu/Menu";

const Layout = ({ children }: LayoutProps) => {
    return ( 
        <div className="w-screen h-screen flex flex-row ">
         <Menu />
         <div id="main_content" className="w-full h-full p-4 overflow-y-auto">
            <div className="flex flex-col w-[900px] h-full mx-auto rounded bg-white  gap-2 border border-neutral-200 overflow-hidden">
               {children}
            </div>
         </div>
      </div>
    );
}
 
export default Layout;