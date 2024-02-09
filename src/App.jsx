import { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import { PASSWORD } from './utils/PASSWORD';
import Confirm from './components/Confirm';

export const App = () => {
    const [color, setColor] = useState([]);
    const [toggle, setToggle] = useState([]);
    const [actualBox, setActualBox] = useState({});
    const [arrayNormal, setArrayNormal] = useState([]);

    //Cada vez que cambia la variable toggle se disparar el useEffect
    useEffect(() => {
        mountPasswordToBeChecked();
    }, [toggle])

    function passObjectToggle(secret, index) {
        //Logica para poder hacer un toggle de los boxes
        /* Codigo mejorado para llamar una vez el setToggle */
        setToggle(toggle => {
            return { [index]: !toggle[index] };
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
        //Primero añadirlo al setArrayNormal
        //Luego guardar el toggle en el setActualBox
        /* Entonces la segunda vez que se clicke un box se comprobara si es el mismo box que esta en el actualBox que es el
        ultimo añadido, y mirar si el indice es el mismo y luego si el valor es distinto se reemplazan, pero si el indice es distinto se añade
        directamente, pero si el indice es igual y el valor igual no se añade nada o se podria remplazar tambien */
        // setArrayNormal(arrayNormal => );

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
