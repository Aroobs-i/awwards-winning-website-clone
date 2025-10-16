
const Button = ({ title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button 
    id={id} 
    className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-violet-50`}
    >
       {leftIcon && <span className="flex items-center">{leftIcon}</span>}
       <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          {title}
       </span>
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  )
}

export default Button