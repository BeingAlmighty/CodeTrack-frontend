import { useTheme } from '../../context/ThemeContext'

const Container = ({ children, className = '' }) => {
  const { isDark } = useTheme()

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
}

export default Container
