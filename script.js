const audio = document.getElementById("mainAudio");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("btnIcon");

let isPlaying = false;

// وظيفة التشغيل والإيقاف عند الضغط
btn.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play().then(() => {
            icon.textContent = "🔊";
            isPlaying = true;
        }).catch(err => {
            console.log("تعذر التشغيل: ", err);
            alert("إضغط مرة أخرى للتشغيل");
        });
    } else {
        audio.pause();
        icon.textContent = "🔇";
        isPlaying = false;
    }
});

// إعدادات إضافية لضمان عمل الملف
audio.volume = 0.9;
