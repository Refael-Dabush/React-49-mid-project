/* eslint-disable react/prop-types */
import './Button.css';

function Button({clickButton, title, style}) {

    const handelClick = () => {
        clickButton()
    }

    return <button className={'button-style ' + style} onClick={handelClick}>{title}</button>
}

export default Button;