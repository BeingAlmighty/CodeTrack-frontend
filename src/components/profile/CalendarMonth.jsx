import { useTheme } from '../../context/ThemeContext'

const CalendarMonth = ({ months }) => {
  const { isDark } = useTheme()

  return (
    <div className="flex mb-1 ml-5">
      {months.map((month, index) => (
        <div
          key={index}
          className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}
          style={{
            marginLeft: index === 0 ? `${month.weekIndex * 16}px` : undefined,
            width: index < months.length - 1
              ? `${(months[index + 1].weekIndex - month.weekIndex) * 16}px`
              : 'auto'
          }}
        >
          {month.name}
        </div>
      ))}
    </div>
  )
}

export default CalendarMonth
