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
		<div>
			<button onClick={handleCheckforUpdate}>Check for Update</button>
			<div>{info && <pre>{JSON.stringify(info, null, 2)}</pre>}</div>
		</div>
	)
}
