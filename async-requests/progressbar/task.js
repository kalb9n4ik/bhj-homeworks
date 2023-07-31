const progress = document.getElementById( 'progress' );
const form = document.forms['form']

form.addEventListener('submit', (e) => {
	e.preventDefault()
	progress.value = 0.0;
	const formData = new FormData(document.forms.form)
	formData.append('files', file);

	let xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
	

	xhr.upload.addEventListener("load", function () {
        progress.value = 1.0;
    });
    xhr.upload.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            let complete = event.loaded / event.total;
            progress.value = complete.toFixed(2)
        }
    });
    
	xhr.send(formData);
})