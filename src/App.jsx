import { useState } from 'react';
import Buttons from './components/Buttons';
import { PASSWORD } from './utils/PASSWORD';
import Confirm from './components/Confirm';

export const App = () => {
    const [value, setValue] = useState();
    function checkPassword(secret) {
        console.log(secret);
    }

    function confirmPassword() {

    }

    return (
        <div>
            <h1>Password</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3">
                    {
                        PASSWORD.map(e =>
                            <>
                                <Buttons secret={e}
                                    checkPassword={checkPassword} />
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
