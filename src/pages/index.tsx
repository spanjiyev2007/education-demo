import { useState } from "react";
import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from "../components";

const Index = () => {
	const [isClick, setIsClick] = useState(false);
	const [rating, setRating] = useState<number>(2)

	return (
		<div>
			<Heading tag="h1">Hello</Heading>
			<Text size="m">Text</Text>
			<Tag size='s' color='red'>Red</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag>primary</Tag>
			<Button appearance="primary">primary</Button>
			<Button appearance="ghost">ghost</Button>
			<Button appearance='ghost' arrow={isClick ? 'down' : 'right'} onClick={() => setIsClick(prev => !prev)}>
				Arrow
			</Button>
			<Button appearance="ghost" arrow="down" >Arrow Down</Button>

			<br />
			<Input placeholder="Enter" />
			<div>
				<TextArea placeholder="Message" />
			</div>
			<br />
			<Rating rating={4} />
			<br />
			<Rating rating={rating} isEditabled={true} setRating={setRating} />
			<br />
			<Card color='white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam quibusdam nulla cum ipsa explicabo aperiam doloremque! Itaque ducimus amet aspernatur? Hic minima in inventore laudantium numquam doloribus accusantium voluptatibus.</Card>
			<Card color='primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam quibusdam nulla cum ipsa explicabo aperiam doloremque! Itaque ducimus amet aspernatur? Hic minima in inventore laudantium numquam doloribus accusantium voluptatibus.</Card>
		</div>
	)
};

export default Index;