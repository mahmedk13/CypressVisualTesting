Pre-requisite:

1. Node 12 or 14


Steps to execute:
1. Open the command prompt
2. Navigate to Folder root directory
3. Install dependencies by running "npm install"
4. a) If you want to run execution on Chrome then run "npm run triggerChromeTests" command
   b) If you want to run execution on Firefox then run "npm run triggerFFTests" command
   c) If you want to run execution on Headless mode then run "npm run triggerHeadlessTests" command
5. Navigate to /cypress/reports to see executon report index.html
6. Navigate to /cypress/videos to view execution video

Note: Visual Testing may not work properly in headless mode or other browsers. So prefer execution on Chrome browser.