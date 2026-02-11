// Component:

const Button = (props) => {

  const {
    className = '',
    type = 'button',
    children,
    onClick,
    isDisabled,
  } = props // Props destructuring


  // Render:

  return (
    <button 
      className={`${className}`} 
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      >
      {children}
    </button>
  )
}

export default Button