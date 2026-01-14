import { useTheme } from '../../context/ThemeContext'

const Card = ({ children, className = '' }) => {
  const { isDark } = useTheme()

  return (
    <div
      className={`rounded-lg border ${
        isDark
          ? 'bg-zinc-900 border-zinc-800'
          : 'bg-white border-zinc-200'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
