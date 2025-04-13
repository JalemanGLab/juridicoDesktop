import logoZolug from '/images/logos/zolug_w.svg'
import logoCodelab from '/images/logos/codelab_w.svg'
import { IoDocumentTextOutline, IoLogInOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import user01 from '/images/user_agen/user_agen_01.jpg'
import user02 from '/images/user_agen/user_agen_02.jpg'
import user03 from '/images/user_agen/user_agen_03.jpg'
import user04 from '/images/user_agen/user_agen_04.jpg'
import user05 from '/images/user_agen/user_agen_05.jpg'
import ControllerButtonWhite from '../../components/buttons/ControllerButtonWhite/ControllerButtonWhite'
import ControllerInputBasic from '../../components/inputs/ControllerInputBasic/ControllerInputBasic'
import usePageLogin from './usePageLogin'
import ControllerInputPass from '../../components/inputs/ControllerInputPass/ControllerInputPass';
import ControllerButtonForm from '../../components/buttons/ControllerButtonForm/ControllerButtonForm';

const PageLogin = () => {
	const { 
		register, 
		handleSubmit, 
		errors, 
		onSubmit,
		isLoading,
		Toaster
	 } = usePageLogin();

	return (
		<div className='flex flex-row w-screen h-screen'>
			<img src={logoCodelab} alt="" className=" fixed top-5 left-5 w-[100px] z-10" />

			<div className='flex flex-col w-full h-full bg-zinc-800 justify-center items-center p-5'>
				<div className="w-full flex flex-col max-w-[600px] gap-5">
					<img src={logoZolug} alt="" className="w-32" />
					<div className=" mt-10 space-y-4">
						<h3 className="text-white text-3xl font-bold">Gestion Cartera</h3>
						<p className="text-neutral-300">
							Optimiza y acelera el crecimiento de tu negocio con nuestras soluciones especializadas en gestión de procesos
						</p>
						<div className="flex items-center -space-x-2 overflow-hidden">
							<img src={user01} className="w-10 h-10 rounded-full border-2 border-white" />
							<img src={user02} className="w-10 h-10 rounded-full border-2 border-white" />
							<img src={user03} className="w-10 h-10 rounded-full border-2 border-white" />
							<img src={user04} className="w-10 h-10 rounded-full border-2 border-white" />
							<img src={user05} className="w-10 h-10 rounded-full border-2 border-white" />
							<p className="text-sm text-neutral-300 font-medium translate-x-5">
								300+ agentes usan nuestros sistemas
							</p>
						</div>
					</div>


					<div className='w-40 h-10'>
						<ControllerButtonWhite
							childrenIcon={<IoDocumentTextOutline />}
							onClick={() => { }}
							label="Documentación" />
					</div>


				</div>
			</div>

			<div  className='flex flex-col w-[600px] h-full justify-center items-start p-5 text-neutral-800'>


				<div className='w-full flex flex-col gap-1'>
					<h2 className="text-2xl font-bold ">
						Nombre de la empresa
					</h2>
					<p className="text-sm  text-neutral-600">
						Ingrese a su cuenta
					</p>
				</div>


				<form className="w-full mt-10 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} autoComplete="off" >

					<div className='w-full flex flex-col gap-1'>
						<label className='text-sm text-neutral-800  font-semibold'>
							Documento
						</label>
						<ControllerInputBasic
							name="identification"
							inputType="number"
							childrenIcon={<FaRegAddressCard />}
							rules={{ required: true, maxLength: 10 }}
							register={register}
							errors={errors}
						/>
					</div>

					<div className='w-full flex flex-col gap-1'>
						<label className='text-sm text-neutral-800  font-semibold'>
							Usuario
						</label>
						<ControllerInputBasic
							name="username"
							inputType="text"
							childrenIcon={<MdPerson />}
							rules={{ required: true }}						
							register={register}
							errors={errors}
						/>
					</div>

					<div className='w-full flex flex-col gap-1'>
						<label className='text-sm text-neutral-800  font-semibold'>
							Contraseña
						</label>
						<ControllerInputPass
							name="password"
							inputType="password"
							register={register}
							errors={errors}
							rules={{ required: true }}
						/>
						
					</div>

					<div className='w-full flex justify-end pt-5'>
						<div className='w-40 '>
							<ControllerButtonForm
								label="Iniciar Sesión"
								loader={isLoading}
								children={<IoLogInOutline />}
							/>
							
						</div>
					</div>


				</form>

			</div>
			<Toaster
				position="top-right"
				reverseOrder={false}
			/>

		</div>
	);
}

export default PageLogin;