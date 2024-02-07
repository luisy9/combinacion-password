export const Buttons = ({ secret, index, checkPassword, color }) => {

  const isClicked = color ? 'blue' : 'red';
  // console.log(color)

  return (
    <div className="w-20 h-20 m-5 border-none rounded-lg 
    cursor-pointer hover:bg-red-400"
    value={index}
    style={{ backgroundColor: isClicked }} 
    onClick={() => checkPassword(secret, index)}><p className="text-white">{index}</p></div>
  )
}

export default Buttons
