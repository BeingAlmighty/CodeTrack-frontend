import { useTheme } from '../../context/ThemeContext'
import { Card } from '../ui'
import LanguageBar from './LanguageBar'

const LanguageStats = ({ submitStats }) => {
  const { isDark } = useTheme()
  const languages = submitStats?.acSubmissionNum || []
  
  const languageData = languages
    .filter(lang => lang.difficulty === 'All' && lang.submissions > 0)
    .slice(0, 5)

  if (languageData.length === 0) return null

  return (
    <Card className="p-6">
      <h2 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
        Languages Used
      </h2>
      <div className="space-y-3">
        {languageData.map((lang, index) => (
          <LanguageBar
            key={index}
            language={lang.lang || 'Unknown'}
            count={lang.submissions}
            total={languages[0]?.submissions || 1}
          />
        ))}
      </div>
    </Card>
  )
}

export default LanguageStats
