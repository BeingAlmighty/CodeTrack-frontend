import { useTheme } from '../../context/ThemeContext'

const LoadingSpinner = ({ size = 'md' }) => {
  const { isDark } = useTheme()
  
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} border-2 border-t-emerald-500 rounded-full animate-spin ${
          isDark ? 'border-zinc-700' : 'border-zinc-300'
        }`}
      />
    </div>
  )
}

export default LoadingSpinner
