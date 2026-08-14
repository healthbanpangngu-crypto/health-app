// ==========================================
// การตั้งค่าการเชื่อมต่อ (Configuration)
// ==========================================

// 1. รหัส LIFF ID สำหรับ LINE Login
const LIFF_ID = "2010563543-9lX9zYFk";

// 2. ฐานข้อมูล Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBhp4u-c0pRxhkfapr1c0gjgVLTzn4TvUA",
  authDomain: "health-app-3800a.firebaseapp.com",
  projectId: "health-app-3800a",
  storageBucket: "health-app-3800a.firebasestorage.app",
  messagingSenderId: "992057901349",
  appId: "1:992057901349:web:59b16d3e66cee51d6b5acc"
};

// 3. API สำหรับส่งแจ้งเตือนผ่าน LINE Bot (ได้จากเฟส 3)
const API_URL = "https://script.google.com/macros/s/AKfycbw6mxBtn77nNB0sBRFea1AThMz0O0VTQYIGvw51A2b6EqRUP_Iyb811wSUZhCk8S2yeJA/exec";

// 4. การตั้งค่าระบบเบื้องต้นของหน่วยงานใหม่
const DEFAULT_CONFIGS = {
    HOSPITAL_NAME: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านปางงู", 
    VILLAGE_COUNT: 10,
    SYSTEM_NAME: "อสม.สามารถ (Orsamo Smart)",
    DIAPER_PRICE: 9.50,
    UNDERPAD_PRICE: 6.00
};

// ==========================================
// 🛡️ DIGITAL WATERMARK & DEVELOPER CREDIT
// (รูปแบบ Sidebar / Menu)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    function injectCreditToSidebar() {
        const sidebarNav = document.querySelector('aside nav');
        if (sidebarNav && !document.getElementById('dev-credit-sidebar')) {
            const creditDiv = document.createElement("div");
            creditDiv.id = "dev-credit-sidebar";
            creditDiv.className = "mt-auto pt-8 pb-4 px-4 text-center select-none pointer-events-none";
            creditDiv.innerHTML = `
                <div class="border-t border-slate-700/50 pt-4">
                    <p style="font-size: 11px; color: #94a3b8; font-weight: bold; font-family: 'Sarabun', sans-serif;">Powered by Orsomo Smart</p>
                    <p style="font-size: 9px; color: #64748b; margin-top: 4px; line-height: 1.4; font-family: 'Sarabun', sans-serif;">
                        Designed & Developed by<br>
                        <span style="color: #cbd5e1;">Suppawut Asunee</span><br>
                        Public Health Technical Officer
                    </p>
                </div>
            `;
            sidebarNav.appendChild(creditDiv);
        }
    }
    setTimeout(injectCreditToSidebar, 500); 

    const observer = new MutationObserver(function(mutations) {
        const sidebarNav = document.querySelector('aside nav');
        if (sidebarNav && !document.getElementById('dev-credit-sidebar')) {
            injectCreditToSidebar();
        }
    });
    if(document.body) { observer.observe(document.body, { childList: true, subtree: true }); }
});
