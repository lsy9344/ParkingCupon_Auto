import { test, expect } from '@playwright/test';

test('버튼 2개 클릭', async ({ page }) => {
  await page.goto('http://members.iparking.co.kr/html/login.html#!');  // ✅ 실제 웹사이트로 바꿔야 해요

  await page.click('text=skip');         // ✅ 실제 버튼 텍스트로 바꿔야 해요
  await page.click('#popupCancel');       // ✅ 실제 버튼 텍스트로 바꿔야 해요
});
