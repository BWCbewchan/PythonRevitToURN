document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var form = e.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', form.action, true);

    xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
            var percentComplete = (e.loaded / e.total) * 100;
            document.getElementById('progressBar').style.width = percentComplete + '%';
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Files successfully uploaded and processed');
        } else {
            alert('An error occurred!');
        }
    };

    xhr.send(formData);
});
