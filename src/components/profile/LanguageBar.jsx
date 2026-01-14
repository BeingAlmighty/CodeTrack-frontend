import { useTheme } from '../../context/ThemeContext'

const LanguageBar = ({ language, count, total }) => {
  const { isDark } = useTheme()
  const percentage = total > 0 ? (count / total) * 100 : 0

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          {language}
        </span>
        <span className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {count.toLocaleString()}
        </span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default LanguageBar
