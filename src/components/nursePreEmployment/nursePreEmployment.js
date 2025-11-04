
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import jsPDF from 'jspdf';
import { icons } from './logobase64';
import Cookies from 'js-cookie';
import api from '../api/api'; // <-- Your Axios instance
import "./nursePreEmployment.css";

function NursePreEmployment() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [numRows, setNumRows] = useState(1);
  const [laborers, setLaborers] = useState(Array(1).fill({}));
  const [errors, setErrors] = useState(Array(1).fill({}));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [approvedLaborers, setApprovedLaborers] = useState([]);
  const [pendingLaborers, setPendingLaborers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('approved');
  const [selectedLaborer, setSelectedLaborer] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Helper to get both siteId and userId from cookies and send as headers
  const getAuthHeaders = () => {
    const siteId = Cookies.get('siteId');
    const userId = Cookies.get('userId');
    return {
      ...(siteId && { "x-site-id": siteId }),
      ...(userId && { "x-user-id": userId }),
    };
  };

  const camelToSnake = (key) => key.replace(/([A-Z])/g, '_$1').toLowerCase();
  const camelToSnakeObj = (obj) => {
    const snakeObj = {};
    Object.keys(obj).forEach(key => {
      const snakeKey = camelToSnake(key);
      snakeObj[snakeKey] = obj[key];
    });
    return snakeObj;
  };

  const snakeToCamel = (key) => key.replace(/(_[a-z])/g, g => g[1].toUpperCase());
  const snakeToCamelObj = (obj) => {
    const camelObj = {};
    Object.keys(obj).forEach(key => {
      const camelKey = snakeToCamel(key);
      camelObj[camelKey] = obj[key];
    });
    return camelObj;
  };

  const handleNumRowsChange = (newNum) => {
    const num = Math.max(1, Math.min(10, parseInt(newNum) || 1));
    setNumRows(num);
    if (num > laborers.length) {
      const additional = Array(num - laborers.length).fill({});
      setLaborers([...laborers, ...additional]);
      const additionalErrors = Array(num - laborers.length).fill({});
      setErrors([...errors, ...additionalErrors]);
    } else if (num < laborers.length) {
      setLaborers(laborers.slice(0, num));
      setErrors(errors.slice(0, num));
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedLaborers = [...laborers];
    updatedLaborers[index] = { ...updatedLaborers[index], [field]: value };
    setLaborers(updatedLaborers);
  };

  const handleFileChange = (index, field, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      handleInputChange(index, field, file);
    } else {
      alert("File size must be less than 10 MB");
    }
  };

  const handleEdit = (laborer) => {
    const camel = snakeToCamelObj(laborer);
    camel.identificationMark1 = Array.isArray(camel.identificationMark1) ? camel.identificationMark1 : (typeof camel.identificationMark1 === 'string' ? JSON.parse(camel.identificationMark1) : []);
    camel.identificationMark2 = Array.isArray(camel.identificationMark2) ? camel.identificationMark2 : (typeof camel.identificationMark2 === 'string' ? JSON.parse(camel.identificationMark2) : []);
    const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
    let policE = "None";
    const reverseMap = { pallor: "Pallor", lymphadenopathy: "Lymphadenopathy", icterus: "Icterus", cyanosis: "Cyanosis", edema: "Edema" };
    for (let p of polices) {
      if (camel[p] === "Yes") {
        policE = reverseMap[p];
        break;
      }
    }
    camel.policE = policE;

    // Format dates for input type="date"
    const formatDate = (dateStr) => {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return '';
      return date.toISOString().split('T')[0];
    };
    camel.date = formatDate(camel.date);
    camel.dateOfBirth = formatDate(camel.dateOfBirth);

    setLaborers([camel]);
    setNumRows(1);
    setErrors([{}]);
    setIsPopupOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requiredFieldKeys = fields.filter(f => f.required).map(f => f.key);
    let newErrors = laborers.map(() => ({}));
    let hasErrors = false;
    laborers.forEach((laborer, index) => {
      requiredFieldKeys.forEach(key => {
        const value = laborer[key];
        let isEmpty;
        if (key === 'identificationMark1' || key === 'identificationMark2') {
          isEmpty = !Array.isArray(value) || value.length === 0;
        } else {
          isEmpty = !value || (typeof value === 'string' ? value.trim() === '' : false);
        }
        if (isEmpty) {
          newErrors[index][key] = 'Required';
          hasErrors = true;
        }
      });
    });
    setErrors(newErrors);
    if (hasErrors) {
      alert("Please fill all required fields marked in red.");
      setIsSubmitting(false);
      return;
    }
    if (laborers.every(l => !l.name || !l.name.trim())) {
      alert("Please fill at least one laborer's name to submit.");
      setIsSubmitting(false);
      return;
    }

    try {
      const processedLaborers = laborers
        .map((laborer, index) => {
          if (!laborer.name || !laborer.name.trim()) return null;
          const proc = camelToSnakeObj(laborer);
          const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
          polices.forEach((p) => (proc[p] = "No"));
          if (proc.polic_e && proc.polic_e !== "" && proc.polic_e !== "None") {
            const mapping = {
              Pallor: "pallor",
              Lymphadenopathy: "lymphadenopathy",
              Icterus: "icterus",
              Cyanosis: "cyanosis",
              Edema: "edema",
            };
            const field = mapping[proc.polic_e];
            if (field) proc[field] = "Yes";
          }
          delete proc.polic_e;
          proc.identification_mark1 = JSON.stringify(Array.isArray(proc.identification_mark1) ? proc.identification_mark1 : []);
          proc.identification_mark2 = JSON.stringify(Array.isArray(proc.identification_mark2) ? proc.identification_mark2 : []);
          return proc;
        })
        .filter(l => l !== null);

      const formData = new FormData();
      formData.append("data", JSON.stringify(processedLaborers));
      laborers.forEach((laborer, i) => {
        const heightFile = laborer.heightPhobiaImage;
        if (heightFile instanceof File) {
          formData.append("heightPhobiaImage", heightFile);
        }
        const deformityFile = laborer.physicalDeformityImage;
        if (deformityFile instanceof File) {
          formData.append("physicalDeformityImage", deformityFile);
        }
      });

      const response = await api.post("/nurse-pre-employment", formData, {
        headers: getAuthHeaders(),  // Sends x-site-id + x-user-id
        withCredentials: true,
      });

      if (response.status === 200 || response.status === 201) {
        const result = response.data;
        alert(`${processedLaborers.length} laborer(s) saved successfully! Laborer IDs: ${result.laborer_ids?.join(", ") || "Generated"}`);
        setIsPopupOpen(false);
        setLaborers(Array(1).fill({}));
        setNumRows(1);
        setErrors(Array(1).fill({}));
        fetchLaborers();
      } else {
        throw new Error(response.data?.error || "Failed to save");
      }
    } catch (error) {
      const msg = error.response?.data?.error || error.message || "Unknown error";
      alert(`Error: ${msg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchLaborers = async () => {
    try {
      const response = await api.get("/nurse-pre-employment", {
        headers: getAuthHeaders(),  // Sends x-site-id + x-user-id
        withCredentials: true,
      });

      if (response.status === 200) {
        const data = response.data;
        const approved = data.filter(l => l.status === 'approve');
        const pending = data.filter(l => l.status === 'pending');
        setApprovedLaborers(approved);
        setPendingLaborers(pending);
      }
    } catch (error) {
      console.error("Error fetching laborers:", error);
    }
  };

  useEffect(() => {
    fetchLaborers();
  }, []);

  const openDetailsModal = (laborer) => {
    setSelectedLaborer(laborer);
    setIsDetailsOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsOpen(false);
    setSelectedLaborer(null);
  };

  const calculateAge = (dobString) => {
    if (!dobString) return 0;
    const birthDate = new Date(dobString);
    const today = new Date();
    if (birthDate > today) return 0;
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const downloadPDF = async (laborerData) => {
    try {
      let clientName = '';
      let siteName = '';
      if (laborerData.site_id) {
        const clientResponse = await api.get("/clients", {
          headers: getAuthHeaders(),  // Sends x-site-id + x-user-id
          withCredentials: true,
        });

        if (clientResponse.status === 200) {
          const clients = clientResponse.data;
          const clientWithSite = clients.find(c => c.sites.some(s => s.site_id === laborerData.site_id));
          if (clientWithSite) {
            clientName = clientWithSite.client_name || '';
            const site = clientWithSite.sites.find(s => s.site_id === laborerData.site_id);
            siteName = site ? site.site_name : '';
          }
        }
      }

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let yPos = 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Form XVIII", pageWidth / 2, yPos, { align: 'center' });
      yPos += 10;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("[See rule 250(c)]", pageWidth / 2, yPos, { align: 'center' });
      yPos += 15;
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      const title = "CERTIFICATE OF MEDICAL EXAMINATION";
      const textWidth = doc.getTextWidth(title);
      const textX = (pageWidth - textWidth) / 2;
      const textY = yPos - 5;
      doc.text(title, pageWidth / 2, textY, { align: 'center' });
      doc.setLineWidth(0.5);
      doc.line(textX, textY + 2, textX + textWidth, textY + 2);
      yPos += 20;
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.2);
      const tableTop = yPos - 20;
      const tableLeft = 35;
      const tableWidth = pageWidth - 70;
      const col1Width = 15;
      const contentLeft = tableLeft + col1Width + 5;
      const contentWidth = tableWidth - col1Width;
      const standardRowHeight = 12;
      const subRowHeight = 8;
      const lineHeight = 1;
      const cellPadding = 5;
      const gap = 3;
      const drawHLine = (y) => {
        doc.line(tableLeft, y, tableLeft + tableWidth, y);
      };
      const drawContentHLine2 = (y) => {
        const extraWidth = 0.2;
        const moveLeft = -15;
        const startX = tableLeft - moveLeft;
        const endX = tableLeft + tableWidth + extraWidth;
        doc.line(startX, y, endX, y);
      };
      const drawLeftVLine = (startY, endY) => {
        doc.line(tableLeft, startY, tableLeft, endY);
      };
      const drawNumVLine = (startY, endY) => {
        doc.line(tableLeft + col1Width, startY, tableLeft + col1Width, endY);
      };
      const drawRightVLine = (startY, endY) => {
        doc.line(tableLeft + tableWidth, startY, tableLeft + tableWidth, endY);
      };
      drawHLine(tableTop);
      let currentY = tableTop + subRowHeight;
      doc.text("1.", tableLeft + 2, currentY + cellPadding);
      doc.text("Certificate Serial No", contentLeft, currentY + cellPadding);
      const labelWidth1 = doc.getTextWidth("Certificate Serial No");
      const valueX1 = contentLeft + labelWidth1 + gap;
      doc.text(laborerData.certificate_serial_no || '', valueX1, currentY + cellPadding, { maxWidth: contentWidth - labelWidth1 - gap });
      currentY += subRowHeight;
      drawContentHLine2(currentY);
      currentY += lineHeight;
      doc.text("Date", contentLeft, currentY + cellPadding);
      const labelWidth2 = doc.getTextWidth("Date");
      const valueX2 = contentLeft + labelWidth2 + gap;
      doc.text(laborerData.date ? new Date(laborerData.date).toLocaleDateString() : '', valueX2, currentY + cellPadding, { maxWidth: contentWidth - labelWidth2 - gap });
      currentY += subRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("2.", tableLeft + 2, currentY + cellPadding);
      const nameText = `Name ${laborerData.name || ''} Son/daughter of ${(laborerData.parentage || '')}`;
      const nameSplit = doc.splitTextToSize(nameText, contentWidth - 10);
      let nameY = currentY;
      nameSplit.forEach((line, idx) => {
        doc.text(line, contentLeft, nameY + cellPadding);
        nameY += subRowHeight;
      });
      currentY = nameY;
      drawContentHLine2(currentY);
      currentY += lineHeight;
      const idMark1 = Array.isArray(laborerData.identification_mark1) ? laborerData.identification_mark1.flat().join(', ') : '';
      const idMark2 = Array.isArray(laborerData.identification_mark2) ? laborerData.identification_mark2.flat().join(', ') : '';
      doc.text("Identification Marks", contentLeft, currentY + cellPadding);
      currentY += subRowHeight;
      doc.text(`1. ${idMark1 || ''}`, contentLeft, currentY + cellPadding, { maxWidth: contentWidth - 10 });
      currentY += subRowHeight;
      doc.text(`2. ${idMark2 || ''}`, contentLeft, currentY + cellPadding, { maxWidth: contentWidth - 10 });
      currentY += subRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("3.", tableLeft + 2, currentY + standardRowHeight / 2);
      doc.text("Fathers Name", contentLeft, currentY + cellPadding);
      const labelWidth3 = doc.getTextWidth("Fathers Name");
      const valueX3 = contentLeft + labelWidth3 + gap;
      doc.text(laborerData.parentage || '', valueX3, currentY + cellPadding, { maxWidth: contentWidth - labelWidth3 - gap });
      currentY += standardRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("4.", tableLeft + 2, currentY + standardRowHeight / 2);
      doc.text("Sex", contentLeft, currentY + cellPadding);
      const labelWidth4 = doc.getTextWidth("Sex");
      const valueX4 = contentLeft + labelWidth4 + gap;
      doc.text(laborerData.sex || 'N/A', valueX4, currentY + cellPadding);
      currentY += standardRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("5.", tableLeft + 2, currentY + cellPadding);
      doc.text("Residence", contentLeft, currentY + cellPadding);
      const labelWidth5 = doc.getTextWidth("Residence");
      const residenceStartX = contentLeft + labelWidth5 + gap;
      const residenceText = doc.splitTextToSize(laborerData.residence || '', contentWidth - labelWidth5 - gap);
      let resY = currentY;
      residenceText.forEach((line) => {
        doc.text(line, residenceStartX, resY + cellPadding);
        resY += subRowHeight;
      });
      currentY = Math.max(currentY + standardRowHeight, resY);
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("6.", tableLeft + 2, currentY + cellPadding);
      doc.text("Date Of Birth If Available :", contentLeft, currentY + cellPadding);
      const labelWidth6a = doc.getTextWidth("Date Of Birth If Available :");
      const valueX6a = contentLeft + labelWidth6a + gap;
      doc.text(laborerData.date_of_birth ? new Date(laborerData.date_of_birth).toLocaleDateString() : '', valueX6a, currentY + cellPadding, { maxWidth: contentWidth - labelWidth6a - gap });
      currentY += subRowHeight;
      doc.text("And/Or Certificate Age :", contentLeft, currentY + cellPadding);
      const labelWidth6b = doc.getTextWidth("And/Or Certificate Age :");
      const valueX6b = contentLeft + labelWidth6b + gap;
      doc.text(String(laborerData.certificate_age || ''), valueX6b, currentY + cellPadding, { maxWidth: contentWidth - labelWidth6b - gap });
      currentY += subRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("7.", tableLeft + 2, currentY + cellPadding);
      doc.text("Physical fitness", contentLeft, currentY + cellPadding);
      currentY += subRowHeight;
      const genderRef = laborerData.sex === 'Male' ? 'Son' : 'Son/Daughter/Wife';
      const ageStr = String(laborerData.certificate_age || '');
      const certText = `I hereby certify that I have personally examined(${laborerData.name || ''}) ${genderRef} Of ${(laborerData.parentage || '')} residing At ${(laborerData.residence || '')} who is desirous of being employed in building and construction work and that his/her age as nearly as can be ascertained from my examination is ${ageStr} years and that he/she is fit for employment in building and construction work as an adult/adolescent.`;
      const certSplitWidth = contentWidth * 0.8;
      const certSplit = doc.splitTextToSize(certText, certSplitWidth);
      while (certSplit.length < 8) certSplit.push('');
      if (certSplit.length > 8) certSplit.length = 8;
      let certY = currentY;
      certSplit.forEach((line) => {
        doc.text(line, contentLeft, certY + cellPadding);
        certY += subRowHeight;
      });
      currentY = certY;
      drawHLine(currentY);
      currentY += lineHeight;
      doc.text("8.", tableLeft + 2, currentY + cellPadding);
      doc.text("Reason for", contentLeft, currentY + cellPadding);
      currentY += subRowHeight;
      let reasonText1 = '(1) Refusal certificate';
      let reasonText2 = '(2) Certificate being revoked';
      if (laborerData.reason_for === 'Refusal Certificate') reasonText1 = '(1) Refusal certificate';
      else if (laborerData.reason_for === 'Certificate Being Revoked') reasonText2 = '(2) Certificate being revoked';
      doc.text(reasonText1, contentLeft, currentY + cellPadding);
      currentY += subRowHeight;
      doc.text(reasonText2, contentLeft, currentY + cellPadding);
      currentY += subRowHeight;
      drawHLine(currentY);
      currentY += lineHeight;
      drawLeftVLine(tableTop, currentY);
      drawNumVLine(tableTop, currentY);
      drawRightVLine(tableTop, currentY);
      yPos = currentY + 10;
      doc.setFontSize(11);
      doc.setLineWidth(0.1);
      doc.text("Signature/Left hand thumb impression", tableLeft, yPos);
      doc.text("of building worker", tableLeft, yPos + 6);
      const rightX = tableLeft + tableWidth / 1.5;
      doc.text("Signature & seal", rightX, yPos);
      doc.text("Medical Inspector/CMO", rightX, yPos + 6);
      yPos += 18;
      doc.setFontSize(10);
      doc.text("Note: 1. In case of physical disability should be clearly stated.", tableLeft, yPos);
      yPos += 8;
      doc.text("2. Functional/productive abilities physical disability should also be stated if clearly stated.", tableLeft, yPos);
      yPos += 20;
      doc.addPage();
      let page2Y = 5;
      try {
        doc.addImage('/images/about2.png', 'JPG', 20, page2Y, 40, 35);
      } catch (imgErr) {
        console.warn("Logo image not found:", imgErr);
      }
      const iconSize = 4;
      const iconGap = 2;
      const contactLeft = pageWidth - 80;
      const textLeft = contactLeft + iconSize + iconGap;
      let contactY = page2Y;
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      try {
        doc.addImage(icons.location, 'PNG', contactLeft, contactY + 3, iconSize, iconSize);
      } catch (err) {
        console.warn("Location icon not found:", err);
      }
      const locationLine1 = "Pune: 9, Sapna Arts, Mayur Colony, Kothrud";
      const locationLine2 = "Mumbai: Monash Building, IIT Powai";
      doc.text(locationLine1, textLeft, contactY + 6);
      doc.text(locationLine2, textLeft, contactY + 10);
      contactY += 12;
      try {
        doc.addImage(icons.website, 'PNG', contactLeft, contactY, iconSize, iconSize);
      } catch (err) {
        console.warn("Website icon not found:", err);
      }
      doc.text("www.healthcop.in", textLeft, contactY + 4);
      contactY += 8;
      try {
        doc.addImage(icons.phone, 'PNG', contactLeft, contactY, iconSize, iconSize);
      } catch (err) {
        console.warn("Phone icon not found:", err);
      }
      doc.text("+91 9822491691", textLeft, contactY + 4);
      contactY += 8;
      try {
        doc.addImage(icons.email, 'PNG', contactLeft, contactY, iconSize, iconSize);
      } catch (err) {
        console.warn("Email icon not found:", err);
      }
      doc.text("drmrunmayeem@healthcop.in", textLeft, contactY + 4);
      contactY += 8;
      page2Y = contactY + 5;
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("HEALTHCHECKUP GENERAL", pageWidth / 2, page2Y, { align: 'center' });
      page2Y += 8;
      const today = new Date().toLocaleDateString();
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Date: ${today}`, pageWidth - 35, page2Y - 5);
      page2Y += 8;
      doc.setFontSize(12);
      const checkupDate = laborerData.date ? new Date(laborerData.date).toLocaleDateString() : today;
      const laborerName = laborerData.name || '';
      const doctorName = 'Dr. Mrunmayee';
      const age = calculateAge(laborerData.date_of_birth);
      const sex = laborerData.sex || 'Male';
      const genderPronoun = sex === "Male" ? "He" : "She";
      const hisHer = sex === "Male" ? "his" : "her";
      const paragraphText = ` Project ${clientName} : ${siteName}                                                                          Religion: Not Applicable Certified that ${doctorName} has examined Mr/Ms. ${laborerName} Age: ${age} years on (${today}) General & Physical examination of Mr./Ms. ${laborerName} did not reveal any abnormality. ${genderPronoun} does not suffer from any acute/chronic skin or contagious disease like tetanus, typhoid, cholera or any other infectious disease. ${hisHer} eye is normal with/without glasses. In Dr’s opinion, Mr/Ms. ${laborerName} is physically and mentally fit for working elsewhere at a construction site.`;
      const paragraphLines = doc.splitTextToSize(paragraphText, pageWidth - 40);
      let paraY = page2Y;
      paragraphLines.forEach((line) => {
        doc.text(line, 20, paraY);
        paraY += 6;
      });
      page2Y = paraY + 5;
      doc.setFont("helvetica", "bold");
      doc.text("Physical examination", pageWidth / 2, page2Y, { align: 'center' });
      doc.setFont("helvetica", "normal");
      page2Y += 8;
      const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
      const shortMap = { pallor: 'P', lymphadenopathy: 'L', icterus: 'I', cyanosis: 'C', edema: 'E' };
      let policeRemarks = polices.filter(p => laborerData[p] === "Yes").map(p => `${shortMap[p]}:Yes`).join(', ');
      if (policeRemarks === '') policeRemarks = 'All No';
      const policeRow = ['P/O/L/I/C/E', policeRemarks, '', ''];
      let tableData = [
        ['Height', String(laborerData.height || '') + ' cm', 'Epilepsy', laborerData.known_case_of_epilepsy || ''],
        ['Weight', String(laborerData.weight || '') + ' kg', 'Frequent Headache', laborerData.frequent_headache || ''],
        ['BMI', String(laborerData.bmi || ''), 'Head Phobia', laborerData.height_phobia || ''],
        ['Body Temp', String(laborerData.body_temp || '') + ' Fahrenheit', '', ''],
        ['Vision', `${laborerData.near_vision || ''} / ${laborerData.far_vision || ''}`, 'Limping Gait', laborerData.limping_gait || ''],
        ['BP', String(laborerData.bp || '') + ' MM/Hg', 'Physical Deformity', laborerData.physical_deformity || ''],
        ['Pulse', String(laborerData.pulse || '') + ' /MIN', 'Flat Foot', laborerData.flat_foot || ''],
        policeRow,
        ['SYSTEMIC : CVS,CNS,P/A,RS', laborerData.systemic || '', 'Mental Depression', laborerData.mental_depression || ''],
        ['Sugar Level', String(laborerData.sugar_level || ''), 'Blood Group', laborerData.blood_group || ''],
      ];
      let tableY = page2Y;
      const table2Left = 15;
      const table2Width = pageWidth - 30;
      const colWidths = [60, 50, 40, 30];
      const cellPadding2 = 5;
      const textLineHeight = 4;
      const topPadding = 7;
      const bottomPadding = 2;
      const drawHLine2 = (y) => doc.line(table2Left, y, table2Left + table2Width, y);
      const drawVLine2 = (x, startY, endY) => doc.line(x, startY, x, endY);
      const getCellHeight = (text, maxWidth) => {
        const splitText = doc.splitTextToSize(text || '', maxWidth);
        return Math.max(standardRowHeight, topPadding + bottomPadding + splitText.length * textLineHeight);
      };
      const drawWrappedCell = (text, x, y, maxWidth) => {
        const splitText = doc.splitTextToSize(text || '', maxWidth);
        splitText.forEach((line, i) => {
          doc.text(line, x + cellPadding2, y + topPadding + i * textLineHeight);
        });
      };
      drawHLine2(tableY);
      let headerY = tableY;
      let currentX = table2Left;
      const headerMaxWidth1 = colWidths[0] - 2 * cellPadding2;
      const headerMaxWidth2 = colWidths[1] - 2 * cellPadding2;
      const headerMaxWidth3 = colWidths[2] - 2 * cellPadding2;
      const headerMaxWidth4 = colWidths[3] - 2 * cellPadding2;
      drawWrappedCell("Parameter", currentX, headerY, headerMaxWidth1);
      currentX += colWidths[0];
      drawWrappedCell("REMARKS", currentX, headerY, headerMaxWidth2);
      currentX += colWidths[1];
      drawWrappedCell("PARAMETER", currentX, headerY, headerMaxWidth3);
      currentX += colWidths[2];
      drawWrappedCell("YES/NO", currentX, headerY, headerMaxWidth4);
      let vStart = tableY;
      currentX = table2Left;
      drawVLine2(currentX, vStart, vStart + standardRowHeight);
      currentX += colWidths[0];
      drawVLine2(currentX, vStart, vStart + standardRowHeight);
      currentX += colWidths[1];
      drawVLine2(currentX, vStart, vStart + standardRowHeight);
      currentX += colWidths[2];
      drawVLine2(currentX, vStart, vStart + standardRowHeight);
      drawVLine2(table2Left + table2Width, vStart, vStart + standardRowHeight);
      tableY += standardRowHeight;
      drawHLine2(tableY);
      tableData.forEach((row) => {
        let rowY = tableY;
        let maxRowHeight = standardRowHeight;
        const rowMaxWidth1 = colWidths[0] - 2 * cellPadding2;
        const rowMaxWidth2 = colWidths[1] - 2 * cellPadding2;
        const rowMaxWidth3 = colWidths[2] - 2 * cellPadding2;
        const rowMaxWidth4 = colWidths[3] - 2 * cellPadding2;
        const h1 = getCellHeight(row[0], rowMaxWidth1);
        const h2 = getCellHeight(row[1], rowMaxWidth2);
        const h3 = getCellHeight(row[2], rowMaxWidth3);
        const h4 = getCellHeight(row[3], rowMaxWidth4);
        maxRowHeight = Math.max(h1, h2, h3, h4);
        let drawX = table2Left;
        drawWrappedCell(row[0], drawX, rowY, rowMaxWidth1);
        drawX += colWidths[0];
        drawWrappedCell(row[1], drawX, rowY, rowMaxWidth2);
        drawX += colWidths[1];
        drawWrappedCell(row[2], drawX, rowY, rowMaxWidth3);
        drawX += colWidths[2];
        drawWrappedCell(row[3], drawX, rowY, rowMaxWidth4);
        drawHLine2(rowY + maxRowHeight);
        drawX = table2Left;
        drawVLine2(drawX, rowY, rowY + maxRowHeight);
        drawX += colWidths[0];
        drawVLine2(drawX, rowY, rowY + maxRowHeight);
        drawX += colWidths[1];
        drawVLine2(drawX, rowY, rowY + maxRowHeight);
        drawX += colWidths[2];
        drawVLine2(drawX, rowY, rowY + maxRowHeight);
        drawVLine2(table2Left + table2Width, rowY, rowY + maxRowHeight);
        tableY += maxRowHeight;
      });
      page2Y = tableY + 10;
      doc.text("ALLERGIES : Medical history of past 3 years :Admitted to Hospital – Yes/No :", 20, page2Y);
      doc.text(laborerData.medical_history || '', 168, page2Y);
      page2Y += 8;
      doc.text("Any other health related information:", 20, page2Y);
      doc.text(laborerData.other_health_info || '', 90, page2Y);
      if (laborerData.other_health_details) {
        page2Y += 8;
        const otherSplit = doc.splitTextToSize(laborerData.other_health_details, pageWidth - 40);
        doc.text(otherSplit, 20, page2Y);
        page2Y += (otherSplit.length * 8);
      }
      const date = new Date().toISOString().split('T')[0];
      const fileName = `laborer_${laborerData.laborer_id || laborerData.id}_${date}.pdf`;
      doc.save(fileName);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF");
    }
  };

  const identificationOptions = [
    "Birthmark", "Scar", "Tattoos", "Mole", "Freckles", "Dimples", "Piercings",
    "Hair Color", "Scars from surgery", "Gap between teeth", "Wart", "Keloid",
    "Burn Mark", "Cut Mark", "Facial Asymmetry"
  ];

  const descriptions = {
    Birthmark: "A birthmark is an identification mark on candidates skin that has been present since birth.",
    "Scar": "A scar is an identification mark left on the candidate's skin following an accident or wound that has healed.",
    Tattoos: "Tattoos are designs or patterns made permanent by putting ink into the skin.",
    Mole: "A mole is a small, harmless, dark spot on the skin.",
    Freckles: "Freckles are small, light-brown spots on the skin that form when melanin builds up.",
    Dimples: "Dimples are minor dents or hollows on the face or chin.",
    Piercings: "Piercings are permanent holes or openings made in the body so jewelry, like earrings or nose rings, can be worn.",
    "Hair Color": "Hair colors that are unusual or stand out, whether they are dyed or happen naturally.",
    "Scars from surgery": "Scars are marks left on the body after surgery.",
    "Gap between teeth": "A space or gap between two teeth that can be seen.",
    Wart: "A wart is a small, rough growth on the skin caused by a virus.",
    Keloid: "A keloid is a raised scar that grows beyond the original wound.",
    "Burn Mark": "A burn mark is a scar resulting from a burn injury.",
    "Cut Mark": "A cut mark is a scar from a cutting injury.",
    "Facial Asymmetry": "Facial asymmetry is a noticeable difference in the sides of the face."
  };

  const MultiSelectField = ({ value, options, onChange, error }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [customInput, setCustomInput] = useState('');
    const [dropdownStyle, setDropdownStyle] = useState({});
    const wrapperRef = useRef(null);
    const selectedDisplayRef = useRef(null);
    const dropdownRef = useRef(null);
    const filteredOptions = options.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));
    const toggleOption = (opt) => {
      const newValue = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
      onChange(newValue);
    };
    const handleCustomAdd = (custom) => {
      if (custom) {
        if (options.includes(custom)) {
          toggleOption(custom);
        } else if (!value.includes(custom)) {
          const newValue = [...value, custom];
          onChange(newValue);
        }
      }
      setCustomInput('');
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target) &&
            dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    const handleToggle = () => {
      setIsOpen(!isOpen);
      if (!isOpen && selectedDisplayRef.current) {
        const rect = selectedDisplayRef.current.getBoundingClientRect();
        setDropdownStyle({
          position: 'fixed',
          top: `${rect.bottom}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          zIndex: 10010
        });
        setSearchTerm('');
      }
    };
    const dropdownContent = (
      <div ref={dropdownRef} className="npe-dropdown-content" style={dropdownStyle}>
        <input
          type="text"
          placeholder="Type to search (e.g., ta for Tattoos)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="npe-search-input"
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
        <div className="npe-options-scroll">
          {filteredOptions.length > 0 ? (
            filteredOptions.map(opt => (
              <label
                key={opt}
                className="npe-option-label"
                title={descriptions[opt]}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={value.includes(opt)}
                  onChange={() => toggleOption(opt)}
                />
                {opt}
              </label>
            ))
          ) : (
            <div className="npe-no-options">No options found</div>
          )}
        </div>
        <div className="npe-custom-input-wrapper">
          <input
            type="text"
            placeholder="Add custom mark..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCustomAdd(e.target.value.trim());
              }
            }}
            onBlur={(e) => handleCustomAdd(e.target.value.trim())}
            className="npe-custom-input"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    );
    return (
      <div ref={wrapperRef} className="npe-multiselect-wrapper">
        <div ref={selectedDisplayRef} className="npe-selected-display" onClick={handleToggle}>
          {value.length > 0 ? value.join(', ') : 'Select marks...'}
        </div>
        {error && <div className="npe-error-msg">Required</div>}
        {isOpen && createPortal(dropdownContent, document.body)}
      </div>
    );
  };

  const fields = [
    { label: "Name of Labour", key: "name", type: "text", widthClass: "wide", required: true },
    { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium", required: true },
    { label: "Date", key: "date", type: "date", widthClass: "medium", required: true },
    { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide", required: true },
    { label: "Identification Mark 1", key: "identificationMark1", type: "multiselect", options: identificationOptions, widthClass: "medium" },
    { label: "Identification Mark 2", key: "identificationMark2", type: "multiselect", options: identificationOptions, widthClass: "medium" },
    { label: "Sex", key: "sex", type: "select", options: ["", "Male", "Female", "Not Prefer to Say"], widthClass: "narrow", required: true },
    { label: "Residence", key: "residence", type: "text", widthClass: "wide", required: true },
    { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
    { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
    { label: "Reason for", key: "reasonFor", type: "select", options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"], widthClass: "medium" },
    { label: "Height", key: "height", type: "number", widthClass: "narrow" },
    { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
    { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Near Vision", key: "nearVision", type: "select", options: ["", "Normal", "Abnormal", "Uses Specs"], widthClass: "narrow" },
    { label: "Far Vision", key: "farVision", type: "select", options: ["", "Normal", "Abnormal", "Uses Specs"], widthClass: "narrow" },
    { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
    { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
    { label: "Systemic", key: "systemic", type: "select", options: ["", "Within Normal Limits", "Abnormal"], widthClass: "medium" },
    { label: "Epilepsy", key: "knownCaseOfEpilepsy", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Headache", key: "frequentHeadache", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Limping Gait", key: "limpingGait", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Deformity", key: "physicalDeformity", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Flat Foot", key: "flatFoot", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Depression", key: "mentalDepression", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Height Phobia", key: "heightPhobia", type: "select", options: ["", "Yes", "No", "Not Applicable"], disabled: (laborer) => laborer.sex === "Female", widthClass: "medium" },
    { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Blood Group", key: "bloodGroup", type: "select", options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], widthClass: "narrow" },
    { label: "P/O/L/I/C/E", key: "policE", type: "select", options: ["", "None", "Pallor", "Lymphadenopathy", "Icterus", "Cyanosis", "Edema"], widthClass: "medium" },
    { label: "Medical History", key: "medicalHistory", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Other Health Info", key: "otherHealthInfo", type: "select", options: ["", "Nil", "Yes"], widthClass: "narrow" },
    { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
  ];

  const filteredApprovedLaborers = approvedLaborers.filter(laborer =>
    laborer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(laborer.laborer_id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="npe-container">
      <div className="npe-header">
        <h1 className="npe-title">Pre-Employment Dashboard</h1>
        <button
          className="npe-open-form-button"
          onClick={() => setIsPopupOpen(true)}
        >
          Enter Laborer Data
        </button>
      </div>

      <div style={{ padding: '10px', background: '#f0f0f0', margin: '10px 0', borderRadius: '5px', fontSize: '14px' }}>
        <strong>Current Site:</strong> {Cookies.get('siteName') || 'Not Selected'} (ID: {Cookies.get('siteId') || 'N/A'})
      </div>

      <div className="npe-tabs-container">
        <div className="npe-tabs">
          <button className={activeTab === 'approved' ? 'npe-tab-active' : ''} onClick={() => setActiveTab('approved')}>
            Approved Laborers
          </button>
          <button className={activeTab === 'pending' ? 'npe-tab-active' : ''} onClick={() => setActiveTab('pending')}>
            Pending Laborers
          </button>
        </div>
        {activeTab === 'approved' && (
          <div className="npe-status-table-container">
            <div className="npe-table-header-row">
              <h2>Approved Laborers</h2>
              <input
                type="text"
                placeholder="Search by Name or Laborer ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="npe-search-bar"
              />
            </div>
            <table className="npe-status-table">
              <thead>
                <tr>
                  <th>Labor Name</th>
                  <th>Laborer ID</th>
                  <th>Details</th>
                  <th>PDF Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredApprovedLaborers.map((laborer) => (
                  <tr key={laborer.id}>
                    <td>{laborer.name}</td>
                    <td>{laborer.laborer_id}</td>
                    <td>
                      <button onClick={() => openDetailsModal(laborer)}>View Details</button>
                    </td>
                    <td>
                      <button onClick={() => downloadPDF(laborer)}>Download PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'pending' && (
          <div className="npe-status-table-container">
            <h2>Pending Laborers</h2>
            <table className="npe-status-table">
              <thead>
                <tr>
                  <th>Labor Name</th>
                  <th>Laborer ID</th>
                  <th>Details</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {pendingLaborers.map((laborer) => (
                  <tr key={laborer.id}>
                    <td>{laborer.name}</td>
                    <td>{laborer.laborer_id}</td>
                    <td>
                      <button onClick={() => openDetailsModal(laborer)}>View Details</button>
                    </td>
                    <td>
                      <button onClick={() => handleEdit(laborer)}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {isPopupOpen && (
        <div className="npe-popup-overlay">
          <div className="npe-popup-content">
            <h2>Laborer Data Entry (Up to 10 Laborers)</h2>
            <div className="npe-form-container">
              <div className="npe-num-rows">
                <label>Number of Laborers (1-10):</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={numRows}
                  onChange={(e) => handleNumRowsChange(e.target.value)}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="npe-scrollable-table">
                  <div className="npe-form-table">
                    <div className="npe-table-header">
                      <div className="npe-table-cell">Laborer</div>
                      {fields.map((field, index) => (
                        <div key={index} className={`npe-table-cell npe-${field.widthClass}`} title={field.label}>
                          {field.label}
                        </div>
                      ))}
                    </div>
                    {laborers.map((laborer, index) => (
                      <div key={index} className="npe-table-row">
                        <div className="npe-table-cell">Laborer {index + 1}</div>
                        {fields.map((field, fieldIndex) => (
                          <div key={fieldIndex} className={`npe-table-cell npe-${field.widthClass} ${field.type === 'multiselect' ? 'npe-multiselect-cell' : ''}`}>
                            {field.type === "select" ? (
                              <select
                                value={laborer[field.key] || ""}
                                onChange={(e) => handleInputChange(index, field.key, e.target.value)}
                                disabled={field.disabled && field.disabled(laborer)}
                                className="npe-select-field"
                              >
                                {field.options.map((option, optIndex) => (
                                  <option key={optIndex} value={option}>{option || "Select"}</option>
                                ))}
                              </select>
                            ) : field.type === "multiselect" ? (
                              <MultiSelectField
                                value={Array.isArray(laborer[field.key]) ? laborer[field.key] : []}
                                options={field.options}
                                onChange={(selected) => handleInputChange(index, field.key, selected)}
                                error={errors[index] && errors[index][field.key]}
                              />
                            ) : field.type === "file" ? (
                              <input
                                type="file"
                                accept={field.accept}
                                onChange={(e) => handleFileChange(index, field.key, e)}
                                className="npe-file-field"
                              />
                            ) : (
                              <input
                                type={field.type}
                                step={field.step}
                                value={laborer[field.key] || ""}
                                onChange={(e) => handleInputChange(index, field.key, e.target.value)}
                                className="npe-input-field"
                              />
                            )}
                            {errors[index] && errors[index][field.key] && (
                              <div className="npe-error-msg">Required</div>
                            )}
                            {field.key === "otherHealthInfo" && laborer.otherHealthInfo === "Yes" && (
                              <textarea
                                value={laborer.otherHealthDetails || ""}
                                onChange={(e) => handleInputChange(index, "otherHealthDetails", e.target.value)}
                                placeholder="Provide details"
                                className="npe-textarea-field"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="npe-form-actions">
                  <button type="button" onClick={() => setIsPopupOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isDetailsOpen && (
        <div className="npe-modal-overlay">
          <div className="npe-modal-content">
            <h3>Details for {selectedLaborer?.name}</h3>
            <div className="npe-details-grid">
              {Object.entries(selectedLaborer || {}).map(([key, value]) => (
                <div key={key}>
                  <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {Array.isArray(value) ? value.join(', ') : value || 'N/A'}
                </div>
              ))}
            </div>
            <button onClick={closeDetailsModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NursePreEmployment;