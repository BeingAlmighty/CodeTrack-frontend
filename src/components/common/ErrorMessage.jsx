import { useTheme } from '../../context/ThemeContext'

const ErrorMessage = ({ message }) => {
  const { isDark } = useTheme()

  return (
    <div
      className={`p-4 rounded-lg border ${
        isDark
          ? 'bg-red-900/20 border-red-900 text-red-400'
          : 'bg-red-50 border-red-200 text-red-600'
      }`}
    >
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ErrorMessage
