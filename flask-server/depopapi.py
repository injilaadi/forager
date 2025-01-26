import http.client

conn = http.client.HTTPSConnection("depop-thrift.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "Sign Up for Key",
    'x-rapidapi-host': "depop-thrift.p.rapidapi.com"
}

conn.request("GET", "/getProductBySlug", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))