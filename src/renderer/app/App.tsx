import { useEffect, useState } from 'react'

export default () => {
	const [info, setInfo] = useState<any>(null)

	useEffect(() => {
		window.app.on('message', (_: any, message: any) => console.log(message))
	}, [])

	const handleCheckforUpdate = async () => {
		window.app.invoke('check-for-update').then(setInfo)
	}

	return (
		<button style={{ color: info ? 'green' : 'red' }} onClick={handleCheckforUpdate}>
			Check for Update
		</button>
	)
}
