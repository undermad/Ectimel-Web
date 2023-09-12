import {AnimationControls, motion, useAnimationControls} from "framer-motion";
import {useState} from "react";

interface TextSpanProps {
    children: React.ReactNode,
}

const RubberAnim = ({children}: TextSpanProps) => {
    const controls: AnimationControls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const rubberBand = (): void => {
        controls.start({
            transform: [
                "scale3d(1,1,1)",      //1
                "scale3d(0.2,1.7,1)",  //2
                "scale3d(1.4,0.8,1)",  //3
                "scale3d(0.8,1.2,1)",  //4
                "scale3d(1.2,0.94,1)", //5
                "scale3d(1,1,1)",      //6
            ],
            transition: {
                times: [0, .4, .6, .8, .9, 1]
            }
        });

        setIsPlaying(true);
    }

    return (
        <motion.span className={"inline-block hover:text-ectimel-yellow"}
                     animate={controls}
                     onAnimationComplete={() => setIsPlaying(false)}
                     onMouseOver={() => {
                         if (!isPlaying) {
                             rubberBand();
                         }
                     }}>
            {children}
        </motion.span>
    );
};

export default RubberAnim;