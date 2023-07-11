import { useState } from 'react'
import styled from '@emotion/styled'

const Button = styled.div<{ active?: boolean }>(({ active }) => ({
	color: active ? 'green' : 'red',
	cursor: 'pointer'
}))

export default () => {
	const [active, setActive] = useState(false)

	return (
		<Button active={active} onClick={() => setActive(!active)}>
			Hello World!
		</Button>
	)
}
