import type {FC, PropsWithChildren} from "react";
import mainLogo from '../../assets/logo-nautik-removebg-preview.png';
const LoginLayout: FC<PropsWithChildren> = ()=>{
    return (
        <>
            <main className="h-[100vh] w-full flex content-center align-middle  justify-center items-center text-white">
            <section className="max-w-7xl flex content-center justify-center align-center items-center text-center bg-principal-blue  h-2/3 w-2/3 rounded-md shadow-[]">
                <section className=" h-full flex align-middle  bg-linear-90 from-white to-principal-blue w-8/12">
                    <img alt="Nautik-logo" className=" w-8/12 object-contain" src={mainLogo}/>
                </section>

                <section className="w-4/12">
                    <div className="p-2 m-2 border border-white   text-white" >
                        <input type="text" className="w-[95%] outline-0" placeholder="Enter your email"/>
                    </div>
                    <div className="p-2 m-2 border border-white ">
                        <input type="password" className="w-[95%] outline-0" placeholder="Enter your password"/>
                    </div>
                    <div className="p-2 m-2 border bg-white hover:cursor-pointer mt-10 text-principal-blue ">
                        <button  className="w-[95%] hover:cursor-pointer outline-0">Enter</button>
                    </div>
                </section>
            </section>
            </main>
        </>
    )



}

export default LoginLayout