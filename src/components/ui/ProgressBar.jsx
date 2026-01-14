import { useTheme } from '../../context/ThemeContext'

const ProgressBar = ({ value, max, color = 'bg-emerald-500', className = '' }) => {
  const { isDark } = useTheme()
  const percentage = max > 0 ? (value / max) * 100 : 0

  return (
    <div
      className={`w-full h-2 rounded-full overflow-hidden ${
        isDark ? 'bg-zinc-800' : 'bg-zinc-200'
      } ${className}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
