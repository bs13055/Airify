# Airify — Air Quality. Made Personal.

**เว็บไซต์งาน GP1: https://bs13055.github.io/Airify/**

Repository นี้เป็นเว็บ Airify ใหม่ แยกจากตัวทดลองที่ชื่อ airify-test ประกอบด้วย:

- [หน้าหลัก](https://bs13055.github.io/Airify/)
- [ทีมสมาชิก](https://bs13055.github.io/Airify/about.html)
- [Airify Health](https://bs13055.github.io/Airify/try.html)

## Source and checks

หน้าเว็บอยู่ที่ราก repository ใน `index.html`, `about.html`, `try.html` และ `assets/` ใช้ Bootstrap ที่รวมไว้ในโปรเจกต์ ไม่ต้อง build React หรือรัน backend

GitHub Pages เผยแพร่จาก branch `main` ที่ `/` มี `.nojekyll` สำหรับ static HTML รัน `node scripts/check-gp1.cjs` เพื่อตรวจไฟล์ ลิงก์ภายใน ข้อมูลทีม และการจัดการข้อผิดพลาด

## Data and privacy

Airify Health เรียกข้อมูลแบบจำลอง PM2.5 และ AQI จาก Open-Meteo / CAMS โดยตรง พยากรณ์ที่คำนวณต่อโดย Airify มีป้ายทดลอง ค่าประเมินไม่ใช่การตรวจวัดจากร่างกายหรือคำแนะนำทางการแพทย์ ข้อมูลตัวอย่างบนหน้าแนะนำระบุว่าเป็นข้อมูลสาธิต

ชื่อ การตั้งค่า สถานที่ และสถานการณ์ที่ผู้ใช้กดบันทึกเก็บเฉพาะในเบราว์เซอร์ ไม่มีบัญชีออนไลน์ ระบบชำระเงิน หรือบริการออก API Key แพ็กเกจเป็นแนวคิดบริการในอนาคต

## Assets

สมาชิก 5 คนพร้อมลิงก์ Resume ที่ผู้ใช้ให้มา รูปของ Watcharakorn ใช้รูปโปรไฟล์จากหน้า Resume ที่ระบุ ภาพประกอบกรุงเทพฯ สร้างด้วย OpenAI ImageGen สำหรับโครงงาน รูปสวนมี provenance ใน `assets/airify-bangkok-park.provenance.json` ส่วนภาพเมืองยามเย็นเป็นภาพเมืองกรุงเทพฯ ยาม blue hour ไม่มีข้อความหรือคน

Bootstrap มี license ใน `assets/vendor/bootstrap/LICENSE` แผนที่ใช้ Leaflet และ OpenStreetMap ตาม attribution ที่แสดงในแอป
