from flask import Flask, request, jsonify
from PIL import Image
import io

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert_image():
    # Check if an image file was uploaded
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})

    file = request.files['file']

    # Check if the file is a valid image
    if file.filename == '':
        return jsonify({'error': 'Invalid file'})

    try:
        # Load and process the image
        image = Image.open(file)
        # Apply your image-to-anime conversion logic here using a pre-trained model
        # converted_image = your_conversion_function(image)
        # Replace the above line with your own conversion function

        # Create a file-like object to store the converted image
        converted_image_io = io.BytesIO()
        # Save the converted image to the file-like object in JPEG format
        converted_image.save(converted_image_io, format='JPEG')
        converted_image_io.seek(0)

        # Return the converted image as a response
        return jsonify({'image': converted_image_io.getvalue().hex()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run()
