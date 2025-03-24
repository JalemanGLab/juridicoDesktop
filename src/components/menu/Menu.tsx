
import logoZolug from '/images/logos/zolug_b.svg'
import MenuItem from "./MenuItem";
import MenuAgent from "./MenuAgent";
import MenuAdmin from "./MenuAdmin";
import { HiOutlinePower } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
   const navigate = useNavigate();
   const closeSession = () => {
      navigate('/login');
   }
   return (
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
         <div className="flex flex-col w-full">
            <div className="inline-flex size-16 items-center justify-center">
               <span className="grid size-10 place-content-center ">
                  <img src={logoZolug} alt="" className="w-full" />
               </span>
            </div>
            <div className="flex flex-col border-t border-neutral-100 pt-4 gap-4">
               <MenuAgent />
               <MenuAdmin />
            </div>
         </div>
         <div className="sticky inset-x-0 bottom-0 border-t border-neutral-100 bg-white p-2">
            <MenuItem text="Salir"  onClick={closeSession} childrenIcon={<HiOutlinePower />} />
         </div>
      </div>
   );
}

export default Menu;