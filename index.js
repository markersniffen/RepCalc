questions = document.getElementById("questions")
q = document.getElementById("q")
input = document.getElementById("input")
result = document.getElementById('results')


Qs = ["How old are you?", "When did you last go running", "Do you work out?"]
As = []
Index = 0


Complete = false

Render = () => {
	if (!Complete)
	{
		result.style.display = "none"
		questions.style.display = "flex"
	} else {
		FinalText = "You're answers were: "
		for (a in As)
		{
			FinalText = `${FinalText} ${As[a]}`
		}
		result.innerHTML = FinalText
		result.style.display = "flex"
		questions.style.display = "none"
	}
}

Submit = () => {
	As.push(input.value)
	input.value = ""
	Advance()
}

Advance = () => {
	q.innerHTML = Qs[Index]
	Index += 1
	if (Index > Qs.length)
	{
		Complete = true
	}
	Render()
}


Advance()