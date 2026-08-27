import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20 md:mt-0">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Desarrollo soluciones web completas, desde la arquitectura y experiencia de usuario hasta el backend, bases de datos e integración de servicios. Me enfoco en crear aplicaciones modernas, escalables y orientadas a resolver necesidades reales de negocio.</p>
                    <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"><a href="https://wa.me/51954309429?text=Hola%20Brandon%2C%20vi%20tu%20portafolio%20y%20me%20gustaria%20conversar%20contigo%20sobre%20una%20oportunidad%20laboral." target="blank">Contacta conmigo</a></button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;