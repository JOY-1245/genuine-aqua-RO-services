# Google Sheets Integration Guide

This guide explains how to set up a Google Sheet and deploy a Google Apps Script to capture contact form inquiries from your landing page.

---

## Step 1: Create a Google Sheet

1. Open your web browser and go to [Google Sheets](https://sheets.google.com).
2. Create a new blank spreadsheet.
3. Rename the spreadsheet to something descriptive, e.g., `Genuine Aqua Leads`.
4. Set up the column headers in the first row (Row 1):
   * **Column A**: `Timestamp`
   * **Column B**: `Name`
   * **Column C**: `Phone`
   * **Column D**: `Email`
   * **Column E**: `Service Interest`
   * **Column F**: `Message`

---

## Step 2: Open Apps Script Editor

1. Inside your new Google Sheet, look at the top menu bar.
2. Click on **Extensions** > **Apps Script**.
3. A new tab will open containing the script editor.
4. Delete any code currently inside the editor window (e.g., `function myFunction() { ... }`).

---

## Step 3: Copy and Paste the Code

Copy the entire JavaScript code block below and paste it into the script editor (`Code.gs`):

```javascript
// Google Apps Script to capture and append lead details from Genuine Aqua RO Tech website
function doPost(e) {
  try {
    // Parse the incoming JSON post request body
    var requestData = JSON.parse(e.postData.contents);
    
    // Open the sheet (automatically opens the active sheet this script is attached to)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the row containing lead details
    sheet.appendRow([
      requestData.timestamp || new Date().toLocaleString(),
      requestData.name,
      requestData.phone,
      requestData.email || "N/A",
      requestData.service,
      requestData.message
    ]);
    
    // Return a CORS-compliant success JSON response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (error) {
    // Return error information if something goes wrong
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS OPTIONS requests from browser fetch API
function doOptions(e) {
  var output = ContentService.createTextOutput();
  return output.setMimeType(ContentService.MimeType.TEXT);
}
```

5. Click the **Save** icon (disk icon) at the top of the editor window.

---

## Step 4: Deploy the Web App

To make the script accessible to your website, you must deploy it as a Web App:

1. Click on the blue **Deploy** button at the top right of the editor.
2. Select **New deployment**.
3. Click the gear icon next to "Select type" and choose **Web app**.
4. Configure the deployment settings:
   * **Description**: `Genuine Aqua Form Handler`
   * **Execute as**: `Me (your-gmail-address@gmail.com)`
   * **Who has access**: **`Anyone`** *(IMPORTANT: Choosing 'Anyone' is critical, otherwise the browser will block the submissions).*
5. Click the **Deploy** button.
6. If prompted, click **Authorize Access**, select your Google account, click on *Advanced* (small link), and click *Go to Untitled project (unsafe)* to approve the sheet access permissions.
7. Once successfully deployed, a window will pop up showing the **Web app URL**.
8. Click **Copy** to save the URL to your clipboard.

---

## Step 5: Update the Website Code

Now, link the copied URL to your website:

1. Open the [index.js](file:///c:/Users/JOY/OneDrive/Desktop/Genuine%20Aqua%20services/index.js) file.
2. Find the configuration section at the top of the file:
   ```javascript
   // --- CONFIGURATION ---
   // Paste your deployed Google Apps Script Web App URL here after deploying code.gs
   const GOOGLE_SCRIPT_URL = ""; 
   ```
3. Paste your copied Web App URL inside the double quotes:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb...your-script-id.../exec"; 
   ```
4. Save the [index.js](file:///c:/Users/JOY/OneDrive/Desktop/Genuine%20Aqua%20services/index.js) file.

---

### Testing Your Integration

Open [index.html](file:///c:/Users/JOY/OneDrive/Desktop/Genuine%20Aqua%20services/index.html) in your browser, scroll down to the contact form, fill out the details, and press **Submit Request**. 
Open your Google Sheet—you should see the details populate in the sheet within a few seconds!
