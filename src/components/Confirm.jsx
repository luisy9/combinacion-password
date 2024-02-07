export const Confirm = ({ confirmPassword }) => {
    return (
        <button onClick={confirmPassword} className="rounded-lg px-3 py-1 cursor-pointer
         bg-green-400 hover:bg-green-300 hover:-translate-y-0.5 transform transition
         focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-50 focus:ring-green-600 active:bg-green-600">
            Confirm Password
        </button>
    )
}

export default Confirm
