import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen bg-[#1a1a1a] text-white'>
      {/* Navigation */}
      <nav className='flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-10'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center'>
            <span className='text-xl font-bold text-[#1a1a1a]'>LC</span>
          </div>
          <span className='text-2xl font-bold text-white'>LeetCode Buddy</span>
        </div>
        <div className='flex items-center gap-6'>
          <a href='#features' className='text-gray-400 hover:text-amber-500 transition-colors'>Features</a>
          <a href='#how-it-works' className='text-gray-400 hover:text-amber-500 transition-colors'>How It Works</a>
          <button className='bg-amber-500 text-[#1a1a1a] font-semibold px-6 py-2 rounded-lg hover:bg-amber-400 transition-colors'>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section with Code Background */}
      <section className='relative px-8 pt-20 pb-32 max-w-7xl mx-auto'>
        {/* Code Background Pattern */}
        <div className='absolute inset-0 opacity-5 overflow-hidden pointer-events-none select-none'>
          <pre className='text-xs text-green-500 leading-tight whitespace-pre font-mono'>
{`def two_sum(nums, target):
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    return []

class Solution:
    def maxProfit(self, prices):
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
        return max_profit

def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree(root):
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)
    return root`}
          </pre>
        </div>

        <div className='text-center max-w-4xl mx-auto relative z-10'>
          <div className='inline-block mb-6 px-4 py-2 bg-[#2a2a2a] border border-[#3a3a3a] rounded-full'>
            <span className='text-amber-500 text-sm font-medium'>🚀 Your Ultimate LeetCode Companion</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            Master LeetCode with
            <span className='text-amber-500'> Smart Revision</span>
          </h1>
          <p className='text-xl text-gray-400 mb-10 max-w-2xl mx-auto'>
            Track all your solved problems, revisit them with proven spaced repetition methods, 
            and take structured notes to solidify your understanding.
          </p>
          <div className='flex items-center justify-center gap-4 flex-wrap'>
            <button className='bg-amber-500 text-[#1a1a1a] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 hover:scale-105 transition-all'>
              Start Revising Now
            </button>
            <button className='border border-[#3a3a3a] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#2a2a2a] hover:border-amber-500/50 transition-all'>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto relative z-10'>
          <div className='text-center bg-[#242424] p-6 rounded-xl border border-[#3a3a3a]'>
            <div className='text-4xl font-bold text-green-500 mb-2'>2500+</div>
            <div className='text-gray-400'>Problems Supported</div>
          </div>
          <div className='text-center bg-[#242424] p-6 rounded-xl border border-[#3a3a3a]'>
            <div className='text-4xl font-bold text-amber-500 mb-2'>5x</div>
            <div className='text-gray-400'>Better Retention</div>
          </div>
          <div className='text-center bg-[#242424] p-6 rounded-xl border border-[#3a3a3a]'>
            <div className='text-4xl font-bold text-blue-500 mb-2'>100%</div>
            <div className='text-gray-400'>Free to Use</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='px-8 py-24 bg-[#141414]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Everything You Need to
              <span className='text-amber-500'> Excel</span>
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Powerful features designed to help you retain solutions and ace your coding interviews
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>📚</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Problem Library</h3>
              <p className='text-gray-400'>
                All your solved LeetCode problems in one place. Filter by difficulty, topic, or date solved.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>🧠</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Spaced Repetition</h3>
              <p className='text-gray-400'>
                Scientifically proven method to maximize retention. Review problems at optimal intervals.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>📝</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Smart Notes</h3>
              <p className='text-gray-400'>
                Take notes for each problem. Document your approach, key insights, and edge cases.
              </p>
            </div>

            {/* Feature 4 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>📊</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Progress Analytics</h3>
              <p className='text-gray-400'>
                Visualize your progress with detailed stats. Track streaks, patterns, and improvement areas.
              </p>
            </div>

            {/* Feature 5 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Daily Challenges</h3>
              <p className='text-gray-400'>
                Get personalized daily revision challenges based on your weak areas and review schedule.
              </p>
            </div>

            {/* Feature 6 */}
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-amber-500/50 transition-all group'>
              <div className='w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                <span className='text-2xl'>🏷️</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>Custom Tags</h3>
              <p className='text-gray-400'>
                Organize problems with custom tags. Create collections for specific interview prep or topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='how-it-works' className='px-8 py-24 bg-[#1a1a1a] relative'>
        {/* Binary Background */}
        <div className='absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none select-none'>
          <div className='text-green-500 text-xs font-mono leading-none whitespace-nowrap'>
            {Array(30).fill('01001100 01100101 01100101 01110100 01000011 01101111 01100100 01100101 ').join('')}
          </div>
        </div>
        
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              How It
              <span className='text-amber-500'> Works</span>
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Three simple steps to never forget a problem again
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-[#1a1a1a]'>
                1
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Sync Your Problems</h3>
              <p className='text-gray-400'>
                Connect your LeetCode account and automatically import all your solved problems with solutions.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-[#1a1a1a]'>
                2
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Add Notes & Tags</h3>
              <p className='text-gray-400'>
                Document your thought process, add custom tags, and highlight key patterns for each problem.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-[#1a1a1a]'>
                3
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>Revise & Remember</h3>
              <p className='text-gray-400'>
                Get smart reminders to review problems at optimal intervals using spaced repetition science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revision Methods */}
      <section className='px-8 py-24 bg-[#141414]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Proven Revision
              <span className='text-amber-500'> Methods</span>
            </h2>
            <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
              Choose from multiple scientifically-backed techniques
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-purple-600/30 hover:border-purple-600 transition-colors'>
              <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                <span className='text-3xl'>🔄</span> Spaced Repetition
              </h3>
              <p className='text-gray-400 mb-4'>
                Review problems at increasing intervals (1 day → 3 days → 7 days → 14 days) to move knowledge into long-term memory.
              </p>
              <div className='flex gap-2 flex-wrap'>
                <span className='px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30'>Science-backed</span>
                <span className='px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-600/30'>Automated</span>
              </div>
            </div>

            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-blue-600/30 hover:border-blue-600 transition-colors'>
              <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                <span className='text-3xl'>🎲</span> Random Review
              </h3>
              <p className='text-gray-400 mb-4'>
                Simulate real interview conditions by practicing random problems from your solved collection.
              </p>
              <div className='flex gap-2 flex-wrap'>
                <span className='px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30'>Interview Prep</span>
                <span className='px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30'>Challenging</span>
              </div>
            </div>

            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-green-600/30 hover:border-green-600 transition-colors'>
              <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                <span className='text-3xl'>🎯</span> Weak Area Focus
              </h3>
              <p className='text-gray-400 mb-4'>
                AI identifies patterns you struggle with and creates targeted practice sessions to strengthen weak spots.
              </p>
              <div className='flex gap-2 flex-wrap'>
                <span className='px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm border border-green-600/30'>AI-Powered</span>
                <span className='px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm border border-green-600/30'>Personalized</span>
              </div>
            </div>

            <div className='bg-[#1a1a1a] p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-colors'>
              <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                <span className='text-3xl'>⏱️</span> Time-Boxed Drills
              </h3>
              <p className='text-gray-400 mb-4'>
                Practice solving problems under time pressure. Build speed and confidence for timed coding rounds.
              </p>
              <div className='flex gap-2 flex-wrap'>
                <span className='px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm border border-amber-500/30'>Speed Training</span>
                <span className='px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm border border-amber-500/30'>Timed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-8 py-24 bg-[#1a1a1a] relative'>
        {/* Terminal Background */}
        <div className='absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden'>
          <pre className='text-green-500 text-sm font-mono'>
{`┌──────────────────────────────────────────────────────────────────┐
│  LeetCode Buddy - Terminal                                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  $ leetcode-buddy sync                                            │
│  ✓ Syncing problems from LeetCode...                              │
│  ✓ Found 247 solved problems                                      │
│  ✓ Imported 15 new problems since last sync                       │
│                                                                    │
│  $ leetcode-buddy revise --method spaced                          │
│  ✓ Loading revision queue...                                      │
│  ✓ 5 problems due for review today                                │
│                                                                    │
│  Problem 1: Two Sum (Easy) - Last reviewed 7 days ago             │
│  Problem 2: Valid Parentheses (Easy) - Last reviewed 14 days ago  │
│  Problem 3: Merge Intervals (Medium) - Last reviewed 3 days ago   │
│                                                                    │
│  Ready to start? [Y/n]                                            │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘`}
          </pre>
        </div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='bg-[#242424] p-12 md:p-16 rounded-3xl border border-[#3a3a3a]'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Never Forget a Problem?
            </h2>
            <p className='text-gray-400 text-lg mb-10 max-w-2xl mx-auto'>
              Join thousands of developers who are acing their interviews with LeetCode Buddy's smart revision system.
            </p>
            <button className='bg-amber-500 text-[#1a1a1a] font-bold px-10 py-5 rounded-lg text-xl hover:bg-amber-400 hover:scale-105 transition-all'>
              Get Started for Free
            </button>
            <p className='text-gray-500 mt-6 text-sm'>No credit card required • Sync unlimited problems</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-8 py-12 border-t border-[#2a2a2a] bg-[#141414]'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center'>
                <span className='text-sm font-bold text-[#1a1a1a]'>LC</span>
              </div>
              <span className='text-lg font-bold text-white'>LeetCode Buddy</span>
            </div>
            <div className='flex items-center gap-6 text-gray-400 text-sm'>
              <a href='#' className='hover:text-amber-500 transition-colors'>Privacy Policy</a>
              <a href='#' className='hover:text-amber-500 transition-colors'>Terms of Service</a>
              <a href='#' className='hover:text-amber-500 transition-colors'>Contact</a>
            </div>
            <p className='text-gray-500 text-sm'>© 2026 LeetCode Buddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
