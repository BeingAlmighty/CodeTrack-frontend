import { useTheme } from '../../context/ThemeContext'
import { Card } from '../ui'

const ContributionStats = ({ contributions, globalStats }) => {
  const { isDark } = useTheme()

  const totalSubmissions = globalStats?.totalSubmissionNum?.[0]?.submissions || 0
  const acceptedSubmissions = globalStats?.acSubmissionNum?.[0]?.submissions || 0
  const acceptanceRate = totalSubmissions > 0
    ? ((acceptedSubmissions / totalSubmissions) * 100).toFixed(1)
    : 0

  return (
    <Card className="p-6 h-full">
      <div className="grid grid-cols-2 gap-4 h-full">
        <StatCard
          icon={<SubmissionIcon />}
          label="Total Submissions"
          value={totalSubmissions.toLocaleString()}
          isDark={isDark}
        />
        <StatCard
          icon={<AcceptedIcon />}
          label="Accepted"
          value={acceptedSubmissions.toLocaleString()}
          highlight
          isDark={isDark}
        />
        <StatCard
          icon={<RateIcon />}
          label="Acceptance Rate"
          value={`${acceptanceRate}%`}
          highlight
          isDark={isDark}
        />
        <StatCard
          icon={<ContribIcon />}
          label="Contribution Points"
          value={contributions?.points?.toLocaleString() || '0'}
          isDark={isDark}
        />
      </div>
    </Card>
  )
}

const StatCard = ({ icon, label, value, highlight, isDark }) => (
  <div className={`p-4 rounded-xl ${isDark ? 'bg-zinc-800/50' : 'bg-zinc-50'}`}>
    <div className={`mb-2 ${highlight ? 'text-emerald-500' : isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
      {icon}
    </div>
    <div className={`text-2xl font-bold mb-0.5 ${highlight ? 'text-emerald-500' : isDark ? 'text-white' : 'text-zinc-900'}`}>
      {value}
    </div>
    <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
      {label}
    </div>
  </div>
)

const SubmissionIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const AcceptedIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const RateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
)

const ContribIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
)

export default ContributionStats
