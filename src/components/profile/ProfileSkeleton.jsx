import { Skeleton, Card } from '../ui'

const ProfileSkeleton = () => (
  <div className="space-y-6">
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <Skeleton className="w-28 h-28 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-6 w-40" />
        </div>
      </div>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-32 w-32 mx-auto rounded-full" />
        <div className="space-y-4 mt-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </Card>
      <Card className="p-6 md:col-span-2">
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      </Card>
    </div>
    <Card className="p-6">
      <Skeleton className="h-6 w-48 mb-4" />
      <Skeleton className="h-32 w-full" />
    </Card>
    <Card className="p-6">
      <Skeleton className="h-6 w-48 mb-4" />
      <div className="space-y-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </Card>
  </div>
)

export default ProfileSkeleton
