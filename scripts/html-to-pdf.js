const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle0' });

  // nav, footer 태그만 숨기기
  await page.evaluate(() => {
    document.querySelectorAll('nav').forEach(nav => {
      nav.style.display = 'none';
    });
    document.querySelectorAll('footer').forEach(footer => {
      footer.style.display = 'none';
    });
  });

  await page.pdf({
    path: 'resume.pdf',
    printBackground: true,
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });

  await browser.close();
  console.log('PDF 저장 완료: resume.pdf');
})();
