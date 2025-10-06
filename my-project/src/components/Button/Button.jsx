
import getButtonStyling from "./getButtonStyling";

const Button = ({ text, onClickHandler, styleType = "primary", type = "button" }) => {
    return (
        <button onClick={onClickHandler} type={type} className={`text-lg ${getButtonStyling(styleType)} text-white  rounded-lg py-[10px] px-[30px] cursor-pointer`}
        >
            {text}
        </button>
    )
}

export default Button