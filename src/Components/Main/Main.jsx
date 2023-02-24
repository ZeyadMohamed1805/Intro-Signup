import "../../Styles/Main/Main.css";
import Description from "../Description/Description";
import Form from "../Form/Form";

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <Description />
                <Form />
            </div>
        </main>
    )
}

export default Main;