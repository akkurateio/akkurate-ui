import { FormLabel } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

interface IProps {
	label: string
}

const Label: FunctionComponent<IProps> = ({ label }) => {
	return (
		<FormLabel
			fontSize={'xs'}
			lineHeight={'1.2rem'}
			fontWeight={'normal'}
			opacity={0.7}
			m={0}
		>
			{label}
		</FormLabel>
	)
}

export default Label
