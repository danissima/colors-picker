import Color from './Color'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f}) =>
	<div className="color-list">
		{(colors.length === 0) ?
			<p>No colors listed. (Add a color)</p> :
			colors.map(color => 
				<Color key={color.id} 
					{...color} 
					onRemove={() => onRemove(color.id)}
					onRate={(rating) => onRate(color.id, rating)} />)

		}
	</div>
export default ColorList