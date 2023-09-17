import { Heading, Tag, Text } from "../components";

const Index = () => {
	return (
		<div>
			<Heading tag="h1">Hello</Heading>
			<Text size="m">Text</Text>
			<Tag size='s' color='red'>Red</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag>primary</Tag>
		</div>
	)
};

export default Index;