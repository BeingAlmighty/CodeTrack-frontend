import { useState } from 'react'
import { Container, ErrorMessage } from '../components/common'
import {
  ProfileHeader,
  QuestionStats,
  ContributionStats,
  SubmissionCalendar,
  RecentSubmissions,
  ProfileSkeleton
} from '../components/profile'
import useFetch from '../hooks/useFetch'
import UsernameInput from '../components/profile/UsernameInput'

const API_BASE_URL = 'http://localhost:5000/api/leetcode'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [searchedUsername, setSearchedUsername] = useState('')

  const { data, loading, error } = useFetch(
    searchedUsername ? `${API_BASE_URL}/profile/${searchedUsername}` : null
  )

  const handleSearch = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setSearchedUsername(username.trim())
    }
  }

  return (
    <Container>
      <UsernameInput
        username={username}
        setUsername={setUsername}
        onSubmit={handleSearch}
        loading={loading}
      />
      <ProfileContent
        data={data}
        loading={loading}
        error={error}
        username={searchedUsername}
      />
    </Container>
  )
}

const ProfileContent = ({ data, loading, error, username }) => {
  if (!username) {
    return <WelcomeState />
  }

  if (loading) {
    return <ProfileSkeleton />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!data) {
    return null
  }

  return (
    <div className="space-y-6">
      <ProfileHeader profile={data.profile} username={username} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <QuestionStats
          allQuestionsCount={data.allQuestionsCount}
          submitStats={data.submitStats}
        />
        <div className="lg:col-span-2">
          <ContributionStats
            contributions={data.contributions}
            globalStats={data.globalStats}
          />
        </div>
      </div>
      <SubmissionCalendar submissionCalendar={data.submissionCalendar} />
      <RecentSubmissions recentSubmissions={data.recentSubmissions} />
    </div>
  )
}

const WelcomeState = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="text-6xl mb-4">🎯</div>
    <h2 className="text-2xl font-bold mb-2">LeetCode Profile Viewer</h2>
    <p className="text-zinc-500">Enter a LeetCode username to view their profile</p>
  </div>
)

export default Profile
