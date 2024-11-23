import { test } from '@playwright/test';
import { execSync } from 'child_process';

test('Open VS Code and run Playwright test in terminal on newly opened VS Code', async ({ page, context }) => {
  // Bước 1: Mở Visual Studio Code tại thư mục dự án của bạn
  execSync('code D://playwright//playwright-automation-testing'); // Thay thế với đường dẫn thực tế đến thư mục của bạn

  execSync('code --task "Run Playwright Tests"');
});
