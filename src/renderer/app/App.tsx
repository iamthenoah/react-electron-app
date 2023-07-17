import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useElectron from '../hooks/use-electron'

const Button = styled.div<{ active?: boolean }>(({ active }) => ({
	color: active ? 'green' : 'red',
	cursor: 'pointer'
}))

export default () => {
	const [active, setActive] = useState(false)
	const { handle } = useElectron()

	useEffect(() => {
		handle('message', console.log)
	}, [])

	return (
		<Button active={active} onClick={() => setActive(!active)}>
			Hello World!
		</Button>
	)
}
