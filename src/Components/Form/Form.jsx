import "../../Styles/Form/Form.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
    const [paragraphsDisplay, setParagraphsDisplay] = useState({
        0: {display: "none", border: "solid 1px var(--neutral-grayish-blue)", placeholder: "First Name"},
        1: {display: "none", border: "solid 1px var(--neutral-grayish-blue)", placeholder: "Last Name"},
        2: {display: "none", border: "solid 1px var(--neutral-grayish-blue)", placeholder: "Email Address"},
        3: {display: "none", border: "solid 1px var(--neutral-grayish-blue)", placeholder: "Password"}
    });

    const formValidation = (index, value) => {
        let newParagraphsDisplay = {...paragraphsDisplay};

        if (value.length === 0) {
            newParagraphsDisplay[index].display = "block";
            newParagraphsDisplay[index].border = "solid 2px var(--primary-red)";
            newParagraphsDisplay[index].placeholder = "";
        } else {
            newParagraphsDisplay[index].display = "none";
            newParagraphsDisplay[index].border = "solid 1px var(--neutral-grayish-blue)";
        }

        setParagraphsDisplay(newParagraphsDisplay);
    }

    return (
        <motion.section initial={{x: "150%"}} animate={{x: 0}} transition={{duration: 1}}>
            <div className="free">
                <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form action="#">
                <div>
                    <svg display={paragraphsDisplay[0].display} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
                    <input style={{border: `${paragraphsDisplay[0].border}`}} type="text" placeholder={paragraphsDisplay[0].placeholder} onChange={(event) => formValidation(0, event.target.value)} />
                    <p style={{display: `${paragraphsDisplay[0].display}`}}>First Name cannot be empty</p>
                </div>
                <div>
                    <svg display={paragraphsDisplay[1].display} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
                    <input style={{border: `${paragraphsDisplay[1].border}`}} type="text" placeholder={paragraphsDisplay[1].placeholder} onChange={(event) => formValidation(1, event.target.value)} />
                    <p style={{display: `${paragraphsDisplay[1].display}`}}>Last Name cannot be empty</p>
                </div>
                <div>
                <svg display={paragraphsDisplay[2].display} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
                    <input style={{border: `${paragraphsDisplay[2].border}`}} type="email" placeholder={paragraphsDisplay[2].placeholder} onChange={(event) => formValidation(2, event.target.value)} />
                    <p style={{display: `${paragraphsDisplay[2].display}`}}>Email cannot be empty</p>
                </div>
                <div>
                <svg display={paragraphsDisplay[3].display} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>
                    <input style={{border: `${paragraphsDisplay[3].border}`}} type="password" placeholder={paragraphsDisplay[3].placeholder}onChange={(event) => formValidation(3, event.target.value)} />
                    <p style={{display: `${paragraphsDisplay[3].display}`}}>Password cannot be empty</p>
                </div>
                <input type="submit" id="submit" value="CLAIM YOUR FREE TRIAL" />
                <p id="tos">By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></p>
            </form>
        </motion.section>
    )
}

export default Form;