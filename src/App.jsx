import { useState } from 'react';
import Buttons from './components/Buttons';
import { PASSWORD } from './utils/PASSWORD';
import Confirm from './components/Confirm';

export const App = () => {
    const [color, setColor] = useState([]);
    let arrayButtonsSelected = [];

    function checkPassword(secret, index) {
        //OK esto esta bien, pero me molaria hacerlo de otra manera!
        if (!arrayButtonsSelected[index]) {
            arrayButtonsSelected.push({ [index]: true })
        }
        const arraySinDuplicados = arrayButtonsSelected;

        /* Esto es para desestructurar el arraySinDuplicados, y mandar un 
        nuevo array de el color para que se añada tambien al State */
        setColor([...color, ...arraySinDuplicados]);
    }

    function confirmPassword() {

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
                                    checkPassword={checkPassword} color={color} />
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
