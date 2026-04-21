const btn = document.getElementById("musicBtn");
const icon = document.getElementById("btnIcon");

// إنشاء عنصر الصوت برمجياً لضمان استجابة المتصفح
const audio = new Audio("https://server8.mp3quran.net/lhdan/002.mp3");
audio.preload = "auto";

let isPlaying = false;

btn.addEventListener("click", () => {
    if (!isPlaying) {
        // تشغيل الصوت
        audio.play().then(() => {
            icon.textContent = "🔊";
            isPlaying = true;
            console.log("الصوت يعمل الآن");
        }).catch(err => {
            console.log("خطأ في التشغيل: ", err);
            alert("برجاء الضغط مرة أخرى للبدء");
        });
    } else {
        // إيقاف مؤقت
        audio.pause();
        icon.textContent = "🔇";
        isPlaying = false;
    }
});

// لزيادة التأكيد: لو الصوت خلص يرجع الأيقونة لـ صامت
audio.onended = () => {
    icon.textContent = "🔇";
    isPlaying = false;
};
