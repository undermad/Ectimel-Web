import MainHeader from "./MainHeader.tsx";
import ParticleImage from "./ParticleImage.tsx";
import {motion} from "framer-motion";

function Home() {

    return (
        <section
            className={"font-medium container w-screen "}>

            <div className={" left-1/2"}>
                <div className={'flex  gap-24 justify-center items-center'}>
                    <motion.div
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        className={"flex flex-col mt-32"}>
                        <div className={"mb-10"}>
                            <p className={"text-9xl mb-2 mr-5"}>Hi, I'm</p>
                            <br/>
                            <div className={"mb-2"}>
                                <MainHeader text="Dominik"/>
                            </div>
                            <br/>
                            <div className={"ml-36"}>
                                <MainHeader text="Tworek"/>
                            </div>
                        </div>
                        <p className={"ml-auto"}>Creative developer</p>
                    </motion.div>
                    <ParticleImage/>
                </div>
            </div>


        </section>
    );
}

export default Home;