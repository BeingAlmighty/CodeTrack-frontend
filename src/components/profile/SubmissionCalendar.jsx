import { useMemo } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { Card } from '../ui'
import CalendarDay from './CalendarDay'
import CalendarMonth from './CalendarMonth'

const SubmissionCalendar = ({ submissionCalendar }) => {
  const { isDark } = useTheme()

  const calendarData = useMemo(() => {
    if (!submissionCalendar) return {}
    try {
      const parsed = typeof submissionCalendar === 'string'
        ? JSON.parse(submissionCalendar)
        : submissionCalendar
      
      const dateMap = {}
      Object.entries(parsed).forEach(([timestamp, count]) => {
        const date = new Date(parseInt(timestamp) * 1000)
        const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
        dateMap[dateKey] = (dateMap[dateKey] || 0) + count
      })
      return dateMap
    } catch {
      return {}
    }
  }, [submissionCalendar])

  const { weeks, months, maxCount } = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const startDate = new Date(today)
    startDate.setDate(startDate.getDate() - 365)
    startDate.setDate(startDate.getDate() - startDate.getDay())

    const weeks = []
    const months = []
    let currentWeek = []
    let currentMonth = -1
    let maxCount = 0

    const current = new Date(startDate)
    while (current <= today) {
      const dateKey = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`
      const count = calendarData[dateKey] || 0
      
      maxCount = Math.max(maxCount, count)

      if (current.getMonth() !== currentMonth) {
        currentMonth = current.getMonth()
        months.push({
          name: current.toLocaleDateString('en-US', { month: 'short' }),
          weekIndex: weeks.length
        })
      }

      currentWeek.push({
        date: new Date(current),
        count,
        dateKey
      })

      if (currentWeek.length === 7) {
        weeks.push(currentWeek)
        currentWeek = []
      }

      current.setDate(current.getDate() + 1)
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek)
    }

    return { weeks, months, maxCount }
  }, [calendarData])

  const totalSubmissions = Object.values(calendarData).reduce((a, b) => a + b, 0)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          Submission Calendar
        </h2>
        <span className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {totalSubmissions.toLocaleString()} submissions in the last year
        </span>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <CalendarMonth months={months} />
          <div className="flex gap-1">
            <CalendarWeekdays isDark={isDark} />
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((day, dayIndex) => (
                    <CalendarDay
                      key={dayIndex}
                      day={day}
                      maxCount={maxCount}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <CalendarLegend isDark={isDark} />
        </div>
      </div>
    </Card>
  )
}

const CalendarWeekdays = ({ isDark }) => {
  const days = ['', 'Mon', '', 'Wed', '', 'Fri', '']
  return (
    <div className="flex flex-col gap-1 mr-2">
      {days.map((day, i) => (
        <div
          key={i}
          className={`w-3 h-3 text-xs flex items-center ${
            isDark ? 'text-zinc-500' : 'text-zinc-400'
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  )
}

const CalendarLegend = ({ isDark }) => (
  <div className="flex items-center justify-end gap-2 mt-2">
    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Less</span>
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map(level => (
        <div
          key={level}
          className={`w-3 h-3 rounded-sm ${getIntensityClass(level, isDark)}`}
        />
      ))}
    </div>
    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>More</span>
  </div>
)

const getIntensityClass = (level, isDark) => {
  const classes = isDark
    ? ['bg-zinc-800', 'bg-emerald-900', 'bg-emerald-700', 'bg-emerald-500', 'bg-emerald-400']
    : ['bg-zinc-200', 'bg-emerald-200', 'bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600']
  return classes[level] || classes[0]
}

export { getIntensityClass }
export default SubmissionCalendar
