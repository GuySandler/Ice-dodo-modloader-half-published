import os

inputData = [
    { "diff": 1, "id": "tut1", "name": "Welcome Map", "num": 0 },
    { "diff": 2, "id": "castle", "name": "Castle", "num": 1 },
    { "diff": 2, "id": "ice2", "name": "Snowboarder", "num": 2 },
    { "diff": 2, "id": "ravine", "name": "Ravine", "num": 3 },
    { "diff": 3, "id": "ice1", "name": "Icy Path", "num": 4 },
    { "diff": 4, "id": "motor", "name": "Motor", "num": 5 },
    { "diff": 4, "id": "floating_fortress", "name": "Floating Fortress", "num": 6 },
    { "diff": 5, "id": "cone2", "name": "The Red Hats", "num": 7 },
    { "diff": 5, "id": "cone3", "name": "Dangerous Zone", "num": 8 },
    { "diff": 5, "id": "tenet", "name": "Tenet", "num": 9 },
    { "diff": 6, "id": "cone1", "name": "4D Demon Cinema", "num": 10 },
    { "diff": 8, "id": "inverted_playground", "name": "Inverted Playground", "num": 11 }
]

def GetFileContent(folderPath, id):
    filename = os.path.join(folderPath, f"{id}.js")
    content = ""
    if os.path.exists(filename):
        with open(filename, 'r') as file:
            # print(f"Content of {id}.js:")
            content = file.read()
            # print(content)
        return content
    else:
        print(f"File {id}.js not found in {folderPath}\n")


folderPath = "./maps"
cupName = "dodoCup"

# print(type(GetFileContent(folderPath, "tut1")))
with open(f"{cupName}.json", 'w') as file:
    file.write("[\n")
    iteraton = 0
    for entry in inputData:
        if iteraton+1 == len(inputData):
            file.write("\t\"" + GetFileContent(folderPath, entry['id']).replace("\n", "").replace("\"", "'") + "\"\n")
        else:
            file.write("\t\""+GetFileContent(folderPath, entry['id']).replace("\n", "").replace("\"", "'")+"\",\n")
        iteraton+=1
    file.write("]")
