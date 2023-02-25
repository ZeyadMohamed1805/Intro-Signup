import "../../Styles/Description/Description.css";
import { animate, motion } from "framer-motion";

const Description = () => {
    return (
        <motion.section initial={{x: "-150%"}} animate={{x: 0}} transition={{duration: 1}}>
            <h1>Learn to code by watching others</h1>
            <p>
                See how experienced developers solve problems in real time.
                Watching scripted tutorials is great, but undestanding how
                developers think is invaluable.
            </p>
        </motion.section>
    )
}

export default Description;