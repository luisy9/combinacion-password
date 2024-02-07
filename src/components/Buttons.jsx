export const Buttons = ({ secret, checkPassword }) => {
  return (
    <div className="w-20 h-20 bg-red-500 m-5 border-none rounded-lg 
    cursor-pointer hover:bg-red-400" onClick={() => checkPassword(secret)}></div>
  )
}

export default Buttons
