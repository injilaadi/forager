import http.client
import json

def get_depop_product_image(slug):
    conn = http.client.HTTPSConnection("depop-thrift.p.rapidapi.com")

    headers = {
        'x-rapidapi-key': "8d50b69a9emshad4b6475b1208c9p12773cjsn9ff55d29b0f9",
        'x-rapidapi-host': "depop-thrift.p.rapidapi.com"
    }

    # Construct the URL to include the slug in the query
    endpoint = f"/getProductBySlug?slug={slug}"
    
    # Send the GET request
    conn.request("GET", endpoint, headers=headers)

    # Get the response from the API
    res = conn.getresponse()
    data = res.read()

    # Check if the response was successful (status code 200)
    if res.status == 200:
        try:
            # Parse the JSON data
            product_data = json.loads(data.decode("utf-8"))
            
            # Extract the image URL (assuming it's under the 'images' field)
            # This may vary based on the exact response structure of the Depop API
            image_url = product_data.get("images", [None])[0]
            
            if image_url:
                return image_url
            else:
                return "No image found for this product."
        except json.JSONDecodeError:
            return "Error: Failed to decode JSON response."
    else:
        return f"Error: Unable to fetch data from Depop API. Status code {res.status}"

# Example usage

slug = "some-product-slug"  # Replace with an actual product slug from Depop

image_url = get_depop_product_image(slug)
print(image_url)
