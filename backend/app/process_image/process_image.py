import pytesseract
from PIL import Image
import io

def process_image(image) -> str:
    """Process an uploaded image and extract the text from the image."""
    # Convert the image to a PIL image object if it's not already
    if not isinstance(image, Image.Image):
        image = io.BytesIO(image)
        image = Image.open(image)
    # Extract text from the image
    text = pytesseract.image_to_string(image)
    print(text)
    return text