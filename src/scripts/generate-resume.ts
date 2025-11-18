import React from 'react';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import * as fs from 'fs';
import * as path from 'path';
import resume from '../config/resume';
import { homedir } from 'os';

// Format YC batch like in experience.tsx
const formatYCBatch = (batch: string): string => {
  const parts = batch.split(' ');
  const season = parts[0];
  const year = parts[1];
  
  const seasonMap: { [key: string]: string } = {
    'Summer': 'S',
    'Spring': 'X',
    'Fall': 'F',
    'Winter': 'W'
  };
  
  const seasonLetter = seasonMap[season] || season.charAt(0);
  return `${seasonLetter}${year.slice(-2)}`;
};

// ATS-friendly styles - using standard fonts, simple layout, no tables
const styles = StyleSheet.create({
  page: {
    padding: 50,
    paddingTop: 40,
    paddingBottom: 40,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#000000',
  },
  // Header section
  header: {
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  contactItem: {
    fontSize: 9,
    marginRight: 12,
    color: '#333333',
  },
  // Section styles
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottom: '1 solid #000000',
    paddingBottom: 2,
  },
  // Summary section
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  // Education section
  educationBlock: {
    marginBottom: 4,
  },
  institutionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  dates: {
    fontSize: 9,
    color: '#333333',
  },
  degree: {
    fontSize: 10,
    marginBottom: 1,
  },
  minor: {
    fontSize: 9,
    color: '#333333',
  },
  // Test Scores section
  testScoresBlock: {
    marginBottom: 4,
  },
  testScoreRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  testName: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    marginRight: 8,
  },
  testScore: {
    fontSize: 10,
  },
  // Experience section
  experienceBlock: {
    marginBottom: 12,
  },
  companyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  positionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  position: {
    fontSize: 10,
  },
  experienceDates: {
    fontSize: 9,
    color: '#333333',
  },
  location: {
    fontSize: 9,
    color: '#555555',
    marginBottom: 3,
  },
  description: {
    fontSize: 10,
    lineHeight: 1.5,
    marginTop: 2,
  },
  // Skills section - tag-like display
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillTag: {
    fontSize: 9,
    backgroundColor: '#f0f0f0',
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 3,
    textAlign: 'center',
  },
});

// Resume Document Component using createElement
const ResumeDocument = () =>
  React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: 'A4', style: styles.page },
      // Header with name and contact info
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.name }, resume.name),
        React.createElement(
          View,
          { style: styles.contactRow },
          React.createElement(Text, { style: styles.contactItem }, resume.contacts.email),
          React.createElement(Text, { style: styles.contactItem }, resume.contacts.phone),
          React.createElement(Text, { style: styles.contactItem }, resume.contacts.location)
        ),
        React.createElement(
          View,
          { style: styles.contactRow },
          React.createElement(Text, { style: styles.contactItem }, resume.contacts.linkedin),
          React.createElement(Text, { style: styles.contactItem }, resume.contacts.website)
        )
      ),

      // Summary Section
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Professional Summary'),
        React.createElement(Text, { style: styles.summary }, resume.summary)
      ),

      // Skills Section
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Skills'),
        React.createElement(
          View,
          { style: styles.skillsContainer },
          ...resume.skills.map((skill, index) =>
            React.createElement(Text, { key: index, style: styles.skillTag }, skill)
          )
        )
      ),

      // Experience Section
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Professional Experience'),
        ...resume.experience.map((exp, index) =>
          React.createElement(
            View,
            { key: index, style: styles.experienceBlock },
            React.createElement(
              View,
              { style: styles.companyRow },
              React.createElement(
                Text,
                { style: styles.company },
                exp.yc ? `${exp.company} (YC ${formatYCBatch(exp.yc.batch)})` : exp.company
              ),
              React.createElement(
                Text,
                { style: styles.experienceDates },
                `${exp.start_date} - ${exp.end_date}`
              )
            ),
            React.createElement(
              View,
              { style: styles.positionRow },
              React.createElement(
                Text,
                { style: styles.position },
                exp.position
              )
            ),
            React.createElement(Text, { style: styles.location }, exp.location),
            React.createElement(Text, { style: styles.description }, exp.description)
          )
        )
      ),

      // Education Section
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Education'),
        React.createElement(
          View,
          { style: styles.educationBlock },
          React.createElement(
            View,
            { style: styles.institutionRow },
            React.createElement(Text, { style: styles.institution }, resume.education.institution),
            React.createElement(
              Text,
              { style: styles.dates },
              `${resume.education.start} - ${resume.education.end}`
            )
          ),
          React.createElement(Text, { style: styles.degree }, resume.education.major),
          React.createElement(Text, { style: styles.minor }, resume.education.minor)
        )
      ),

      // Test Scores Section
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Test Scores'),
        React.createElement(
          View,
          { style: styles.testScoresBlock },
          React.createElement(
            View,
            { style: styles.testScoreRow },
            React.createElement(Text, { style: styles.testName }, 'SAT:'),
            React.createElement(
              Text,
              { style: styles.testScore },
              `Total: ${resume.exams.sat.total} (Reading & Writing: ${resume.exams.sat.RW}, Math: ${resume.exams.sat.M})`
            )
          )
        )
      )
    )
  );

// Main function to generate the PDF
async function generateResume() {
  try {
    console.log('🚀 Generating ATS-friendly resume PDF...');

    // Create the PDF
    const doc = React.createElement(ResumeDocument);
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();

    // Convert blob to buffer
    const buffer = await blob.arrayBuffer();
    const nodeBuffer = Buffer.from(buffer);

    // Determine output path
    const desktopPath = path.join(homedir(), 'Desktop');
    const outputPath = path.join(desktopPath, 'Bohdan Agarkov.pdf');

    // Ensure the desktop directory exists
    if (!fs.existsSync(desktopPath)) {
      console.error('❌ Desktop directory not found. Saving to current directory instead.');
      const fallbackPath = path.join(process.cwd(), 'Bohdan_Agarkov_Resume.pdf');
      fs.writeFileSync(fallbackPath, new Uint8Array(nodeBuffer));
      console.log(`✅ Resume generated successfully at: ${fallbackPath}`);
      return;
    }

    // Write the PDF file
    fs.writeFileSync(outputPath, new Uint8Array(nodeBuffer));
  } catch (error) {
    console.error('❌ Error generating resume:', error);
    process.exit(1);
  }
}

// Run the generator
if (require.main === module) {
  generateResume();
}

export { generateResume, ResumeDocument };
