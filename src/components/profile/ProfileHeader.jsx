import { useTheme } from '../../context/ThemeContext'
import { Card, Avatar } from '../ui'
import ThemeToggle from '../common/ThemeToggle'

const ProfileHeader = ({ profile, username }) => {
  const { isDark } = useTheme()

  return (
    <Card className="p-0 overflow-hidden">
      <div className={`h-24 ${isDark ? 'bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900' : 'bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100'}`} />
      <div className="px-6 pb-6">
        <div className="flex items-end justify-between -mt-12">
          <div className="flex items-end gap-4">
            <div className={`p-1 rounded-full ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
              <Avatar
                src={profile?.userAvatar}
                alt={username}
                size="xl"
                className="border-4 border-emerald-500"
              />
            </div>
            <div className="pb-2">
              <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                {profile?.realName || username}
              </h1>
              <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                @{username}
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <StatBadge
            icon={<RankIcon />}
            label="Rank"
            value={profile?.ranking?.toLocaleString() || 'N/A'}
            isDark={isDark}
          />
          <StatBadge
            icon={<StarIcon />}
            label="Reputation"
            value={profile?.reputation || 0}
            isDark={isDark}
            highlight
          />
          {profile?.country && (
            <StatBadge
              icon={<LocationIcon />}
              label="Location"
              value={profile.country}
              isDark={isDark}
            />
          )}
        </div>
        {profile?.aboutMe && (
          <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {profile.aboutMe}
          </p>
        )}
        <ProfileLinks profile={profile} isDark={isDark} />
      </div>
    </Card>
  )
}

const StatBadge = ({ icon, label, value, isDark, highlight }) => (
  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
    isDark ? 'bg-zinc-800' : 'bg-zinc-100'
  }`}>
    <span className={highlight ? 'text-emerald-500' : isDark ? 'text-zinc-400' : 'text-zinc-500'}>
      {icon}
    </span>
    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{label}</span>
    <span className={`text-sm font-semibold ${highlight ? 'text-emerald-500' : isDark ? 'text-white' : 'text-zinc-900'}`}>
      {value}
    </span>
  </div>
)

const RankIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ProfileLinks = ({ profile, isDark }) => {
  const links = [
    { key: 'github', label: 'GitHub', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { key: 'twitter', label: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' }
  ]

  const hasLinks = links.some(link => profile?.[link.key + 'Url'])

  if (!hasLinks) return null

  return (
    <div className={`flex items-center gap-2 mt-4 pt-4 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
      {links.map(link => {
        const url = profile?.[link.key + 'Url']
        if (!url) return null
        return (
          <a
            key={link.key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
              isDark 
                ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300' 
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d={link.icon} />
            </svg>
            <span>{link.label}</span>
          </a>
        )
      })}
    </div>
  )
}

export default ProfileHeader
