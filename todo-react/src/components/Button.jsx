// Component:

const Button = (props) => {

  const {
    className = '',
    type = 'button',
    children,
  } = props // Props destructuring


  // Render:

  return (
    <button className={`${className}`} type={type}>
      {children}
    </button>
  )
}

export default Button