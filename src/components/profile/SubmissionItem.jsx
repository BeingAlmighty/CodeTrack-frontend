import { useTheme } from '../../context/ThemeContext'
import { Badge } from '../ui'

const SubmissionItem = ({ submission }) => {
  const { isDark } = useTheme()

  const getStatusVariant = (status) => {
    if (status?.toLowerCase().includes('accepted')) return 'success'
    return 'default'
  }

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return ''
    const date = new Date(parseInt(timestamp) * 1000)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
        isDark ? 'hover:bg-zinc-800/50' : 'hover:bg-zinc-100'
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className={`font-medium truncate ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {submission.title}
        </div>
        <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {formatTimestamp(submission.timestamp)}
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <Badge variant={getStatusVariant(submission.statusDisplay)}>
          {submission.statusDisplay}
        </Badge>
        {submission.lang && (
          <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            {submission.lang}
          </span>
        )}
      </div>
    </div>
  )
}

export default SubmissionItem
