import { useTheme } from '../../context/ThemeContext'
import { ProgressBar } from '../ui'

const StatItem = ({ label, solved, total, color, textColor }) => {
  const { isDark } = useTheme()
  const percentage = total > 0 ? ((solved / total) * 100).toFixed(1) : 0

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-sm font-medium ${textColor}`}>{label}</span>
        <span className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {solved} / {total}
        </span>
      </div>
      <ProgressBar value={solved} max={total} color={color} />
    </div>
  )
}

export default StatItem
