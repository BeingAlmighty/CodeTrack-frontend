import { useTheme } from '../../context/ThemeContext'
import { Card } from '../ui'

const QuestionStats = ({ allQuestionsCount, submitStats }) => {
  const { isDark } = useTheme()

  const getDifficultyData = (difficulty) => {
    const total = allQuestionsCount?.find(q => q.difficulty === difficulty)?.count || 0
    const solved = submitStats?.acSubmissionNum?.find(s => s.difficulty === difficulty)?.count || 0
    return { total, solved }
  }

  const easy = getDifficultyData('Easy')
  const medium = getDifficultyData('Medium')
  const hard = getDifficultyData('Hard')
  const all = getDifficultyData('All')

  return (
    <Card className="p-6">
      <div className="flex items-center gap-6">
        <SolvedCircle 
          solved={all.solved} 
          total={all.total} 
          easy={easy.solved}
          medium={medium.solved}
          hard={hard.solved}
          isDark={isDark} 
        />
        <div className="flex-1 space-y-3">
          <DifficultyRow
            label="Easy"
            solved={easy.solved}
            total={easy.total}
            bgColor={isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'}
            fillColor="bg-emerald-500"
            textColor="text-emerald-500"
            isDark={isDark}
          />
          <DifficultyRow
            label="Medium"
            solved={medium.solved}
            total={medium.total}
            bgColor={isDark ? 'bg-amber-500/20' : 'bg-amber-100'}
            fillColor="bg-amber-500"
            textColor="text-amber-500"
            isDark={isDark}
          />
          <DifficultyRow
            label="Hard"
            solved={hard.solved}
            total={hard.total}
            bgColor={isDark ? 'bg-red-500/20' : 'bg-red-100'}
            fillColor="bg-red-500"
            textColor="text-red-500"
            isDark={isDark}
          />
        </div>
      </div>
    </Card>
  )
}

const DifficultyRow = ({ label, solved, total, bgColor, fillColor, textColor, isDark }) => {
  const percentage = total > 0 ? (solved / total) * 100 : 0

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className={`text-sm font-medium ${textColor}`}>{label}</span>
        <div className="flex items-center gap-1">
          <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {solved}
          </span>
          <span className={`text-xs ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            /{total}
          </span>
        </div>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${bgColor}`}>
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${fillColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

const SolvedCircle = ({ solved, total, easy, medium, hard, isDark }) => {
  const easyPercent = total > 0 ? (easy / total) * 100 : 0
  const mediumPercent = total > 0 ? (medium / total) * 100 : 0
  const hardPercent = total > 0 ? (hard / total) * 100 : 0
  
  const circumference = 2 * Math.PI * 52
  
  const easyOffset = circumference
  const easyDash = (easyPercent / 100) * circumference
  
  const mediumOffset = easyOffset - easyDash
  const mediumDash = (mediumPercent / 100) * circumference
  
  const hardOffset = mediumOffset - mediumDash
  const hardDash = (hardPercent / 100) * circumference

  return (
    <div className="relative w-36 h-36 flex-shrink-0">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke={isDark ? '#27272a' : '#e4e4e7'}
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="#ef4444"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${hardDash} ${circumference}`}
          strokeDashoffset={-hardOffset + circumference}
          className="transition-all duration-1000"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${mediumDash} ${circumference}`}
          strokeDashoffset={-mediumOffset + circumference}
          className="transition-all duration-1000"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="#22c55e"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${easyDash} ${circumference}`}
          strokeDashoffset={0}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {solved}
        </span>
        <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          Solved
        </span>
      </div>
    </div>
  )
}

export default QuestionStats
