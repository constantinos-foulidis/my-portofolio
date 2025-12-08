import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface CVData {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  portfolio: string;
  education: {
    period: string;
    institution: string;
  }[];
  experience: {
    period: string;
    company: string;
    position: string;
    responsibilities: string[];
  }[];
  skills: {
    frontend: string[];
    mobile: string[];
    other: string[];
    tv: string[];
  };
  languages: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private defaultCV: CVData = {
    name: 'Konstantinos Foulidis',
    title: 'Lead Front-end Developer',
    phone: '6948682906',
    email: 'constantine.foulidis@gmail.com',
    address: 'Thessaloniki, Theagenous charish 86',
    portfolio: 'http://www.foulidis.innosoft-dev.top/',
    education: [
      {
        period: '2014-2019',
        institution: 'Alexander technological institute, Thessaloniki Department of Information and Electronic Engineering'
      }
    ],
    experience: [
      {
        period: 'Dec 2021 – Present',
        company: 'Netcompany - Intrasoft',
        position: 'Angular developer',
        responsibilities: [
          'Design the structure of new project',
          'Training onboarding of new team members',
          'Development and maintenance of existing projects',
          'Task analysis and estimation of new features',
          'Refactor on boarding',
          'Upgrade existing projects to latest angular',
          'Maintaining custom library'
        ]
      },
      {
        period: 'Apr 2019 – Dec 2021',
        company: 'ARX.NET',
        position: 'Lead Front end developer (Angular)',
        responsibilities: [
          'Lead engineer of one team whose purpose is to maintain and upgrade existing application',
          'Code Reviews',
          'Training onboarding of new team members',
          'Development and maintenance of existing projects',
          'Task analysis and estimation of new features'
        ]
      }
    ],
    skills: {
      frontend: ['JavaScript', 'TypeScript', 'Html', 'CSS', 'SASS', 'AngularJs', 'React', 'Angular8+'],
      mobile: ['Kotlin', 'C#', 'Cordova'],
      other: ['C', 'C++', 'Java', 'Git', 'Unity', 'unityARVR', 'Jira', 'nodejs', 'express', 'mongoDB'],
      tv: ['Tizen', 'WebOs']
    },
    languages: ['English']
  };

  constructor() {}

  getCVData(): CVData {
    return this.defaultCV;
  }

  async generatePDF(cvData: CVData, primaryColor: string = '#4a5568'): Promise<void> {
    const cvElement = this.createCVElement(cvData, primaryColor);
    document.body.appendChild(cvElement);

    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF('p', 'mm', 'a4');
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${cvData.name.replace(/\s/g, '_')}_CV.pdf`);
    } finally {
      document.body.removeChild(cvElement);
    }
  }

  private createCVElement(cvData: CVData, primaryColor: string): HTMLElement {
    const container = document.createElement('div');
    container.style.cssText = `
      width: 210mm;
      min-height: 297mm;
      padding: 0;
      margin: 0;
      background: white;
      font-family: 'Roboto', Arial, sans-serif;
      position: absolute;
      left: -9999px;
      display: flex;
    `;

    container.innerHTML = `
      <div style="width: 35%; background-color: ${primaryColor}; color: white; padding: 40px 30px; box-sizing: border-box;">
        <div style="margin-bottom: 40px;">
          <div style="width: 180px; height: 180px; border-radius: 50%; background-color: rgba(255,255,255,0.1); margin: 0 auto 30px; display: flex; align-items: center; justify-content: center; font-size: 72px; font-weight: bold;">
            ${cvData.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="font-size: 20px; margin-bottom: 20px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Contact</h2>
          <div style="margin-bottom: 15px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 5px;">Phone</strong>
            <p style="margin: 0; font-size: 13px;">${cvData.phone}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 5px;">Email</strong>
            <p style="margin: 0; font-size: 13px; word-break: break-word;">${cvData.email}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 5px;">Address</strong>
            <p style="margin: 0; font-size: 13px;">${cvData.address}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 5px;">Portfolio</strong>
            <p style="margin: 0; font-size: 13px; word-break: break-word;">${cvData.portfolio}</p>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="font-size: 20px; margin-bottom: 20px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Education</h2>
          ${cvData.education.map(edu => `
            <div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; font-size: 12px; font-weight: 600;">${edu.period}</p>
              <p style="margin: 0; font-size: 13px; line-height: 1.4;">${edu.institution}</p>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 40px;">
          <h2 style="font-size: 20px; margin-bottom: 20px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Expertise</h2>
          <div style="margin-bottom: 20px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 8px;">Front-end:</strong>
            <p style="margin: 0; font-size: 12px; line-height: 1.6;">${cvData.skills.frontend.join(', ')}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 8px;">Mobile:</strong>
            <p style="margin: 0; font-size: 12px; line-height: 1.6;">${cvData.skills.mobile.join(', ')}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 8px;">Other:</strong>
            <p style="margin: 0; font-size: 12px; line-height: 1.6;">${cvData.skills.other.join(', ')}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <strong style="font-size: 12px; display: block; margin-bottom: 8px;">TV:</strong>
            <p style="margin: 0; font-size: 12px; line-height: 1.6;">${cvData.skills.tv.join(', ')}</p>
          </div>
        </div>

        <div>
          <h2 style="font-size: 20px; margin-bottom: 20px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 10px;">Language</h2>
          <p style="margin: 0; font-size: 13px;">${cvData.languages.join(', ')}</p>
        </div>
      </div>

      <div style="width: 65%; padding: 40px; box-sizing: border-box;">
        <div style="margin-bottom: 15px;">
          <h1 style="font-size: 42px; margin: 0 0 5px 0; color: #1a202c; font-weight: 700;">${cvData.name}</h1>
        </div>

        <div style="margin-bottom: 50px;">
          <h2 style="font-size: 24px; margin-bottom: 40px; color: ${primaryColor}; font-weight: 600; position: relative; padding-bottom: 15px;">
            Experience
            <span style="position: absolute; bottom: 0; left: 0; width: 60px; height: 3px; background-color: ${primaryColor};"></span>
          </h2>
          ${cvData.experience.map(exp => `
            <div style="margin-bottom: 35px; position: relative; padding-left: 25px;">
              <div style="position: absolute; left: 0; top: 6px; width: 12px; height: 12px; border-radius: 50%; background-color: ${primaryColor};"></div>
              <div style="margin-bottom: 12px;">
                <h3 style="font-size: 16px; margin: 0 0 5px 0; color: #1a202c; font-weight: 600;">${exp.period}</h3>
                <h4 style="font-size: 18px; margin: 0 0 3px 0; color: ${primaryColor}; font-weight: 600;">${exp.company}</h4>
                <p style="margin: 0; font-size: 15px; color: #4a5568; font-weight: 500;">${exp.position}</p>
              </div>
              <div>
                <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #2d3748;">Key responsibilities:</p>
                <ul style="margin: 0; padding-left: 20px; font-size: 13px; line-height: 1.7; color: #4a5568;">
                  ${exp.responsibilities.map(resp => `<li style="margin-bottom: 5px;">${resp}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    return container;
  }
}
