import { Feather } from '@expo/vector-icons'
import { Stack } from 'expo-router'

import { colors } from '@/theme'
import UserDetails from '@/components/UserDetails'
import SeparatorLine from '@/components/SeparatorLine'
import UserData from '@/components/UserData'
import ScrollViewWrapper from '@/components/ScrollViewWrapper'

export default function Page() {
  return (
    <ScrollViewWrapper style={{ paddingHorizontal: 20 }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Feather
              name='more-horizontal'
              size={24}
              color={colors.palette.neutral100}
              style={{
                marginRight: 20,
              }}
            />
          ),
        }}
      />
      <UserDetails />
      <SeparatorLine />
      <UserData />
    </ScrollViewWrapper>
  )
}
