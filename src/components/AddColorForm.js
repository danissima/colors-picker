
// const logColor = (title, color) =>
// 	console.log(`New Color: ${title} | ${color}`)

const AddColorForm = ({onNewColor=f=>f}) => {
	let _title, _color
	const submit = e => {
		e.preventDefault();
		onNewColor(_title.value, _color.value)
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}
	return (
		<form onSubmit={submit}>
			<input type="text" placeholder="color title..." required ref={input => _title = input} />
			<input type="color" required ref={input => _color = input} />
			<button>ADD</button>
		</form>
	)
}

export default AddColorForm