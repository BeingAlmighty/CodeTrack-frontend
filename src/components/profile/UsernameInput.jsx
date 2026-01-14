import { useTheme } from '../../context/ThemeContext'
import { LoadingSpinner } from '../common'

const UsernameInput = ({ username, setUsername, onSubmit, loading }) => {
  const { isDark } = useTheme()

  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="flex gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter LeetCode username..."
            className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
              isDark
                ? 'bg-zinc-900 border-zinc-700 text-white placeholder-zinc-500 focus:border-emerald-500'
                : 'bg-white border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-emerald-500'
            }`}
          />
          <SearchIcon isDark={isDark} />
        </div>
        <button
          type="submit"
          disabled={loading || !username.trim()}
          className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            loading || !username.trim()
              ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
              : 'bg-emerald-500 text-white hover:bg-emerald-600'
          }`}
        >
          {loading ? <LoadingSpinner size="sm" /> : 'Search'}
        </button>
      </div>
    </form>
  )
}

const SearchIcon = ({ isDark }) => (
  <svg
    className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
      isDark ? 'text-zinc-500' : 'text-zinc-400'
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

export default UsernameInput
