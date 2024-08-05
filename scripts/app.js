document.addEventListener('DOMContentLoaded', function() {
    function setupFileInput(fileInputId, imageContainerId) {
        const fileInput = document.getElementById(fileInputId);
        const imageContainer = document.getElementById(imageContainerId);

        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imageContainer.innerHTML = ''; // Clear previous images
                    imageContainer.appendChild(img);
                };
                
                reader.onerror = function() {
                    console.error("Failed to read file!");
                };

                reader.readAsDataURL(file);
            }
        });

        document.querySelector(`label[for="${fileInputId}"]`).addEventListener('click', function() {
            fileInput.click();
        });
    }

    // Setup each file input and image container
    setupFileInput('file-upload1', 'image-container1');
    setupFileInput('file-upload2', 'image-container2');
    setupFileInput('file-upload3', 'image-container3');
    setupFileInput('file-upload4', 'image-container4');
});