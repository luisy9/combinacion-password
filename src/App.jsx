import { useState } from 'react';
import Buttons from './components/Buttons';
import { PASSWORD } from './utils/PASSWORD';
import Confirm from './components/Confirm';

export const App = () => {
    const [color, setColor] = useState([]);
    const [toggle, setToggle] = useState([]);
    const [objectToggles, setObjectToggles] = useState([]);
    const [counter, setCounter] = useState(null);

    function passObjectToggle(secret, index) {
        //Logica para poder hacer un toggle de los boxes
        if (counter != index) {
            setToggle({ [index]: true });
            setCounter(index);
        } else {
            setToggle({ [index]: false });
            setCounter(null)
        }
    }

    function confirmPassword(object) {

    }

    return (
        <div>
            <h1>Password</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3">
                    {
                        PASSWORD.map((e, index) =>
                            <>
                                <Buttons secret={e}
                                    index={index}
                                    passObjectToggle={passObjectToggle} color={color} toggle={toggle} />
                            </>
                        )
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <Confirm confirmPassword={confirmPassword} />
            </div>
        </div>
    )
}

export default App
