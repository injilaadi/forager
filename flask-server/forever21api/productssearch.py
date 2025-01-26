import requests

url = "https://apidojo-forever21-v1.p.rapidapi.com/products/search"

querystring = {"query":"jackets","rows":"60","start":"0","color_groups":"black"}

headers = {
	"x-rapidapi-key": "8d50b69a9emshad4b6475b1208c9p12773cjsn9ff55d29b0f9",
	"x-rapidapi-host": "apidojo-forever21-v1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())