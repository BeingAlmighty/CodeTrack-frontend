import { useTheme } from '../../context/ThemeContext'
import { Card, Badge } from '../ui'
import SubmissionItem from './SubmissionItem'

const RecentSubmissions = ({ recentSubmissions }) => {
  const { isDark } = useTheme()
  const submissions = recentSubmissions?.slice(0, 10) || []

  if (submissions.length === 0) {
    return (
      <Card className="p-6">
        <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Recent Submissions
        </h2>
        <EmptyState isDark={isDark} />
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Recent Submissions
        </h2>
        <Badge>{submissions.length} recent</Badge>
      </div>
      <div className="space-y-2">
        {submissions.map((submission, index) => (
          <SubmissionItem key={index} submission={submission} />
        ))}
      </div>
    </Card>
  )
}

const EmptyState = ({ isDark }) => (
  <div className={`text-center py-8 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    <p>No recent submissions</p>
  </div>
)

export default RecentSubmissions
