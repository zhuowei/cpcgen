import sys
def compileCFG(data, outfile):
	print("function generateSentence() {", file=outfile)
	# for each data bit, parse
	lines = data.split("\n")
	curLine = "";
	firstOne = None
	for line in lines:
		line = line.strip()
		'''if line == "":
			outName = process(curLine, outfile);
			if firstOne is None:
				firstOne = outName
			curLine = ""
			continue;'''
		a = line.split("#")[0].strip()
		if len(a) == 0:
			continue
		if "::=" in a:
			outName = process(curLine, outfile)
			if firstOne is None:
				firstOne = outName
			curLine = ""
		curLine += a
	if "::=" in curLine:
		outName = process(curLine, outfile)
		if firstOne is None:
			firstOne = outName
		curLine = ""
	print("return gen_"  + firstOne + "();", file=outfile)
	print("}", file=outfile)

def process(line, outfile):
	line = line.strip()
	if len(line) == 0:
		return
	print("//" + line, file=outfile)
	constructParts = line.split("::=")
	constructName = constructParts[0].strip()
	constructChoices = [a.strip() for a in constructParts[1].split("|")]
	print("function gen_" + constructName + "() {", file=outfile)
	print("var choice = Math.floor(Math.random() * " + str(len(constructChoices)) + ");", file=outfile);
	print("switch(choice) {", file=outfile);
	for index in range(len(constructChoices)):
		print("case " + str(index) + ":", file=outfile)
		print("return " + processChoice(constructChoices[index]) + ";", file=outfile)
	print("}", file=outfile)
	print("}", file=outfile)
	return constructName

def processChoice(choice):
	choice = choice.replace("\\", "\\\\").replace("'", "\\'")
	outstr = "'"
	while len(choice) > 0:
		bracketIn = choice.find("<")
		if bracketIn < 0:
			outstr += choice
			break
		outstr += choice[0:bracketIn]
		bracketRem = choice[bracketIn + 1:]
		bracketOut = bracketRem.find(">")
		bracketName = bracketRem[0:bracketOut]
		outstr += "' + gen_" + bracketName + "() + '"
		choice = bracketRem[bracketOut + 1:]
	return outstr + "'"

with open(sys.argv[1], "r") as infile, open(sys.argv[2], "w") as outfile:
	data = infile.read()
	compileCFG(data, outfile)