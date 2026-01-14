const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-zinc-800 text-zinc-300',
    easy: 'bg-emerald-900/30 text-emerald-400',
    medium: 'bg-yellow-900/30 text-yellow-400',
    hard: 'bg-red-900/30 text-red-400',
    success: 'bg-emerald-900/30 text-emerald-400'
  }

  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
