let tempKey: string | null = null
function objectToArray(obj: any, arr: any = []) {
	if (typeof obj === "object") {
		for (var key in obj) {
			if (isNaN(Number(key)))
				tempKey = key
			if (typeof obj[key] === "object") {
				objectToArray(obj[key], arr)
			} else if (obj[key].includes('This field'))
				arr.push(`${tempKey}: ${obj[key]}`)
		}
		return arr
	}
	arr.push(obj)

	return arr
}

export default objectToArray