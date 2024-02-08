import { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import { PASSWORD } from './utils/PASSWORD';
import Confirm from './components/Confirm';

export const App = () => {
    const [color, setColor] = useState([]);
    const [toggle, setToggle] = useState([]);
    const [counter, setCounter] = useState(null);
    const [arrayNormal, setArrayNormal] = useState([]);

    //Cada vez que cambia la variable toggle se disparar el useEffect
    useEffect(() => {
        mountPasswordToBeChecked();
    }, [toggle])

    function passObjectToggle(secret, index) {
        //Logica para poder hacer un toggle de los boxes
        /* Codigo mejorado para llamar una vez el setToggle */
        setToggle(toggle => {
            const newToggle = { [index]: !toggle[index] };
            return newToggle;
        })
        
        /* Antiguo codigo que funcionaba pero se llamaba dos veces
        al setToggle() */
        // if (counter != index) {
        //     setToggle({ [index]: true });
        //     setCounter(index);
        // } else {
        //     setToggle({ [index]: false });
        //     setCounter(null);
        // }
    }

    function mountPasswordToBeChecked() {
        console.log('holaaaaa')
        // if(arrayNormal.length === 0){
        setArrayNormal(arrayNormal => [...arrayNormal, toggle]);
        console.log(arrayNormal)
        // }
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
