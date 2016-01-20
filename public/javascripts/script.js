var form = document.getElementById('fileForm');
var fileSelect = document.getElementById('file-select');
var uploadButton = document.getElementById('upload-button');

form.onsubmit = function(event) {
	event.preventDefault();
	// Update button text.
	uploadButton.innerHTML = 'Uploading...';
	// Get the selected files from the input.
	var files = fileSelect.files;	
	// Create a new FormData object.
	var formData = new FormData();
	// Loop through each of the selected files.
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		// Check the file type.
		if (!file.type.match('image.*')) {
			continue;
		}
		// Add the file to the request.
		formData.append('photos[]', file, file.name);
	}
	// Set up the request.
	var xhr = new XMLHTTPRequest();
	// Open the connection.
	xhr.open('POST', 'public/php/images.php', true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			uploadButton.innerHTML = 'Upload';
		}
		else {
			alert('there was an error uploading');
		}
	}
	xhr.send(formData);
	
}