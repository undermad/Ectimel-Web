import {motion} from "framer-motion";
import {useState} from "react";


function Projects() {
    const [move, setMove] = useState<boolean>(false);


    return (
        <div className={"container w-screen flex justify-center items-center flex-col gap-3"}>
            <motion.div
                animate={{
                    y: -100,
                    x: move ? 100 : -100,
                    scale: 1,
                }}
                transition={{type: "tween", duration: 1}}
                // transition={{ type: "spring", bounce: 2, duration: 2}}
                // transition={{ type: "inertia", velocity: 50}}
                initial={{scale: 0}}

                onClick={() => setMove(!move)}
                className={"w-20 h-20 border-2"}></motion.div>
            <motion.div

                // whileHover={{ scale: 2}}
                // whileDrag={{ scale: 2}}
                // drag="x" dragConstraints={{ left: 200 }}

                className={"w-20 h-20 border-2"}></motion.div>

            <motion.div
                animate={{
                    rotate: [0, 100, 200, 360, 0],
                    x: [0, 100, 200, 300, -100]
            }}
                transition={{type: "tween", duration: 2, repeat: Infinity}}


                className={"w-20 h-20 border-2"}></motion.div>
        </div>
    );
}

export default Projects;