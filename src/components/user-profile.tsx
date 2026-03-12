import { Avatar } from '@/components'
import { Text } from '@/components/ui'

export default function UserProfile() {
  return (
    <div className={'group flex flex-wrap items-center gap-2'}>
      <Avatar />
      <Text className="invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        @tomisloading
      </Text>
    </div>
  )
}
