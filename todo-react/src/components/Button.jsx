// Component:

const Button = (props) => {

  const {
    className = '',
    type = 'button',
    children,
    onClick,
  } = props // Props destructuring


  // Render:

  return (
    <button 
      className={`${className}`} 
      type={type}
      onClick={onClick}
      >
      {children}
    </button>
  )
}

export default Button