import { useEffect, useState } from 'react'
import { useElectron } from '@/hooks/use-electron'
import styled from '@emotion/styled'

const Button = styled.div<{ active?: boolean }>(({ active }) => ({
  color: active ? 'green' : 'red',
  cursor: 'pointer',
  width: 'fit-content',
  userSelect: 'none'
}))

export default () => {
  const electron = useElectron()
  const [info, setInfo] = useState<any>(null)

  useEffect(() => {
    electron.handle('message', (_: any, message: any) => console.log(message))
  }, [])

  const handleCheckforUpdate = async () => {
    setInfo(await electron.invoke('check-for-update'))
  }

  return (
    <Button active={!!info} onClick={handleCheckforUpdate}>
      Check for Update
    </Button>
  )
}
