const fileInput = document.getElementById('fileInput');
const imgOriginal = document.getElementById('imgOriginal');
const text1 = document.getElementById('text1');

const imgEdited = document.getElementById('imgEdited');
const canvasEdited = document.getElementById('canvasEdited');
const text2 = document.getElementById('text2');

const processBtn = document.getElementById('processBtn');
const saveBtn = document.getElementById('saveBtn');

let originalImageObj = new Image();

// دالة قراءة الصورة المرفوعة
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            imgOriginal.src = event.target.result;
            originalImageObj.src = event.target.result;
            
            imgOriginal.style.display = 'block';
            text1.style.display = 'none';
            
            processBtn.style.display = 'block';
            imgEdited.style.display = 'none';
            text2.style.display = 'block';
            saveBtn.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});

// دالة وضع الخلفية البيضاء
processBtn.addEventListener('click', function() {
    const ctx = canvasEdited.getContext('2d');
    
    canvasEdited.width = originalImageObj.width;
    canvasEdited.height = originalImageObj.height;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasEdited.width, canvasEdited.height);

    ctx.drawImage(originalImageObj, 0, 0);

    imgEdited.src = canvasEdited.toDataURL('image/jpeg', 1.0);
    
    imgEdited.style.display = 'block';
    text2.style.display = 'none';
    
    saveBtn.style.display = 'block';
});

// دالة حفظ الصورة
saveBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'صورة_معدلة_محمد_الحطاب.jpg';
    link.href = imgEdited.src;
    link.click();
});
