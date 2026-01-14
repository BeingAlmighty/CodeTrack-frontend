import { useTheme } from '../../context/ThemeContext'

const Skeleton = ({ className = '' }) => {
  const { isDark } = useTheme()

  return (
    <div
      className={`animate-pulse rounded ${
        isDark ? 'bg-zinc-800' : 'bg-zinc-200'
      } ${className}`}
    />
  )
}

export default Skeleton
