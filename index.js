questions = document.getElementById("questions")
q = document.getElementById("q")
input = document.getElementById("input")
result = document.getElementById('results')
circles = document.getElementById('circles')

Colors = ["#4cd892", "#4cd892", "#4cd892", "#d88870", "#3c88c7", "#3c88c7", "#3c88c7"]
Categories = ["Citizenship","Ethics", "Culture", "Trust", "Vision", "Growth", "Products & Services"]
Answers = []
Index = 0

Complete = false

Render = () => {
	if (!Complete)
	{
		result.style.display = "none"
		questions.style.display = "flex"
		remain = document.getElementById('remaining')
		remain.innerHTML = `Question ${Index} out of ${Categories.length}:`
	} else {
		result.style.display = "flex"
		questions.style.display = "none"

		total = Answers.reduce((a, b) => a + b)
		Answers.unshift(total)

		for (a in Answers)
		{
			console.log(`n${a}`)
			div = document.getElementById(`n${a}`)
			div.innerHTML = Answers[a]
			x = div.getAttribute("transform")
			right = x.split(" ")[1]
			left = x.split(" ")[0].split("(")[1]
			leftn = parseFloat(left)
			if (String(Answers[a]).length == 1)
			{
				leftn += 10
			} else if (String(Answers[a]).length == 3) {
				leftn += 20
			}
			newt = `translate( ${leftn} ${right}`
			div.setAttribute("transform",newt)

		}

	}
}

Submit = () => {
	Num = parseFloat(input.value)
	console.log(Num)
	if (isNaN(Num))
	{
		alert("You must input a number!")
	} else {
		if (Num > 10)
		{
			alert("You must input a number between 0 and 10!")
		}

		Answers.push(Num)
		Advance()
	}
	input.value = ""
}

input.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		// event.preventDefault()
		Submit()
	}
})

Advance = () => {
	q.innerHTML = `How would you rate your <span style="font-weight:bold; color:${Colors[Index]}">${Categories[Index]}? </span>`
	Index += 1
	if (Index > Categories.length)
	{
		Complete = true
	}
	input.focus()
	Render()
}

Reload = () => {
	location.reload()
}

Advance()