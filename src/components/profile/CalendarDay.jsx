import { useTheme } from '../../context/ThemeContext'
import { getIntensityClass } from './SubmissionCalendar'

const CalendarDay = ({ day, maxCount }) => {
  const { isDark } = useTheme()

  const getLevel = (count) => {
    if (count === 0) return 0
    if (maxCount === 0) return 0
    const ratio = count / maxCount
    if (ratio < 0.25) return 1
    if (ratio < 0.5) return 2
    if (ratio < 0.75) return 3
    return 4
  }

  const level = getLevel(day.count)
  const formattedDate = day.date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <div
      className={`w-3 h-3 rounded-sm cursor-pointer transition-transform hover:scale-125 ${getIntensityClass(level, isDark)}`}
      title={`${formattedDate}: ${day.count} submission${day.count !== 1 ? 's' : ''}`}
    />
  )
}

export default CalendarDay
