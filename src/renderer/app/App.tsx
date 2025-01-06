import { useEffect, useState } from 'react'
import { useElectron } from '@/hooks/use-electron'

export default () => {
  const electron = useElectron()
  const [info, setInfo] = useState<any>(null)

  useEffect(() => {
    electron.on('message', (_: any, message: any) => console.log(message))
  }, [])

  const handleCheckforUpdate = async () => {
    setInfo(await electron.invoke('check-for-update'))
  }

  return (
    <button style={{ color: info ? 'green' : 'red' }} onClick={handleCheckforUpdate}>
      Check for Update
    </button>
  )
}
