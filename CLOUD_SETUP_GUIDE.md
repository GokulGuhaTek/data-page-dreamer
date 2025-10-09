# External Cloud Storage Setup Guide

This guide explains how to configure your external cloud storage endpoint for the GuhaTek job application form.

## Overview

The application form is configured to submit data to your own external cloud storage service (AWS, Azure, Google Cloud, or any custom backend). The form does NOT use Lovable Cloud or any internal storage.

## Configuration

### 1. Set Your Cloud Endpoint

You need to set your external API endpoint URL. There are two ways to do this:

#### Option A: Using Environment Variable (Recommended for Production)

Create a file named `.env` in your project root with:

```env
VITE_CLOUD_ENDPOINT=https://your-backend-api.com/api/applications
```

**Important:** Add `.env` to your `.gitignore` file to avoid committing sensitive URLs.

#### Option B: Direct Code Update (For Testing)

Edit `src/components/JobApplicationForm.tsx` and update line 72:

```javascript
const CLOUD_ENDPOINT = "https://your-backend-api.com/api/applications";
```

### 2. Backend Endpoint Requirements

Your backend API endpoint must:

- Accept `POST` requests
- Handle `multipart/form-data` content type
- Process two parts in the payload:
  1. **`data`** - JSON blob containing applicant information
  2. **`resume`** - File upload (PDF, DOC, DOCX, TXT, or RTF)

### 3. Data Structure

The JSON data sent in the `data` field contains:

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "contactNumber": "+91 9876543210",
  "linkedinProfile": "linkedin.com/in/johndoe",
  "interestedPosition": "Site Reliability Engineer",
  "currentRole": "Senior Developer",
  "currentOrganization": "Tech Corp",
  "totalExperience": "5",
  "currentLocation": "Bangalore",
  "locationPreference": "Any",
  "currentCTC": "1200000",
  "expectedCTC": "1500000",
  "noticePeriod": "30",
  "currentlyInNotice": "no",
  "immediateJoiner": "no",
  "otherOffersInHand": "no",
  "offeredCTC": "",
  "certifications": "AWS Certified",
  "referredBy": "",
  "additionalInfo": "Looking forward to joining",
  "submittedAt": "2025-10-09T12:30:00.000Z"
}
```

## Backend Implementation Examples

### AWS Lambda + S3

```javascript
// AWS Lambda handler
exports.handler = async (event) => {
  const formData = JSON.parse(event.body);
  
  // Store JSON in S3
  await s3.putObject({
    Bucket: 'applications-bucket',
    Key: `applications/${formData.email}-${Date.now()}.json`,
    Body: JSON.stringify(formData.data),
    ContentType: 'application/json'
  }).promise();
  
  // Store resume in S3
  await s3.putObject({
    Bucket: 'resumes-bucket',
    Key: `resumes/${formData.email}-${Date.now()}.pdf`,
    Body: formData.resume,
  }).promise();
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: 'Application received' })
  };
};
```

### Azure Functions + Blob Storage

```javascript
// Azure Function
module.exports = async function (context, req) {
  const formData = req.body;
  
  // Store in Azure Blob Storage
  const blobService = azure.createBlobService();
  
  await blobService.createBlockBlobFromText(
    'applications',
    `${formData.email}-${Date.now()}.json`,
    JSON.stringify(formData.data)
  );
  
  context.res = {
    status: 200,
    body: { success: true, message: 'Application received' }
  };
};
```

### Google Cloud Functions + Cloud Storage

```javascript
// Google Cloud Function
exports.handleApplication = async (req, res) => {
  const formData = req.body;
  
  // Store in Cloud Storage
  const bucket = storage.bucket('applications-bucket');
  const file = bucket.file(`applications/${formData.email}-${Date.now()}.json`);
  
  await file.save(JSON.stringify(formData.data), {
    contentType: 'application/json',
  });
  
  res.status(200).json({ success: true, message: 'Application received' });
};
```

### Node.js/Express Custom Backend

```javascript
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/api/applications', upload.single('resume'), async (req, res) => {
  try {
    // Parse the JSON data
    const applicationData = JSON.parse(req.body.data);
    
    // File is available at req.file
    const resumeFile = req.file;
    
    // Store data in your database
    await database.applications.create({
      ...applicationData,
      resumePath: resumeFile.path
    });
    
    res.json({ success: true, message: 'Application received' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000);
```

## Form Validation

The form includes built-in validation for:

### Mandatory Fields (marked with *)
- Full Name (1-100 characters)
- Email (valid email format, max 255 characters)
- Contact Number (max 20 characters)
- Resume Upload (PDF, DOC, DOCX, TXT, RTF)
- Interested Position (must select from dropdown)
- Total Years of Experience (numeric value)

### Optional Fields
- LinkedIn Profile
- Current Role
- Current Organization
- Current Location
- Location Preference
- Current CTC
- Expected CTC
- Notice Period
- Currently in Notice
- Immediate Joiner
- Other Offers in Hand
- Offered CTC
- Certifications
- Referred By
- Additional Comments

## Error Handling

The form displays:
- Field-level validation errors below each field
- Success toast message on successful submission
- Error toast message if submission fails
- Loading state during submission (button shows "Submitting...")

## Security Considerations

1. **CORS Configuration**: Your backend must allow requests from your frontend domain
2. **Rate Limiting**: Implement rate limiting to prevent spam submissions
3. **File Validation**: Validate file types and sizes on the backend
4. **Data Sanitization**: Sanitize all user inputs before storage
5. **Authentication**: Consider adding authentication if needed
6. **HTTPS**: Always use HTTPS endpoints in production

## Testing

To test the integration:

1. Set up a test endpoint (you can use services like webhook.site for initial testing)
2. Fill out the form with test data
3. Check your backend logs to verify data receipt
4. Verify data is correctly stored in your cloud storage

## Support

For issues or questions:
- Check browser console for error messages
- Verify your backend endpoint is accessible
- Test your endpoint with tools like Postman or curl
- Review backend logs for any errors

## Migration

To migrate to a different cloud provider:
1. Set up the new backend endpoint
2. Update the `VITE_CLOUD_ENDPOINT` environment variable
3. Deploy the changes
4. No code changes needed in the frontend
