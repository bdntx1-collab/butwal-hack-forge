import jsPDF from 'jspdf';

export const generateCodeOfConductPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, maxWidth);
    
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, margin, yPosition);
      yPosition += fontSize * 0.5;
    });
    
    yPosition += 5;
  };

  // Header
  doc.setFillColor(242, 140, 29); // Orange color
  doc.rect(0, 0, pageWidth, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Code of Conduct', pageWidth / 2, 20, { align: 'center' });
  
  yPosition = 40;
  
  // Subtitle
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Hack Day Butwal', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 7;
  doc.text('Effective Date: November 13, 2025', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  // Summary
  addText('Summary', 16, true, [242, 140, 29]);
  addText('Be respectful towards other people and try to be good. Not even once in a lifetime, harassment and abusive behavior are allowed. If you witness or feel that someone is making you or others uncomfortable, or that you are in danger, whether it is physically or online, then report it. Everyone has the right to a supportive, inclusive, and respectful environment.', 11);

  // Our Commitment
  addText('Our Commitment', 16, true, [242, 140, 29]);
  addText('Butwal Hacks aims to provide a safe and supportive environment for all teenage participants (under 18) at Hack Day Butwal. We promise that every young person, regardless of gender, age, sexual orientation, disability, physical appearance, race, religion, nationality, socio-economic background, or any other personal characteristic, should be able to discover, invent, and collaborate without discrimination or harassment. This Code of Conduct outlines the organization\'s values and the expected behaviors at the event as well as all the associated activities.', 11);

  // Expected Behavior
  addText('Expected Behavior', 16, true, [242, 140, 29]);
  const expectedBehaviors = [
    'In your conversations with others, be respectful, empathetic, and open-minded.',
    'Try to really understand what the other people are saying and also consider their perspective.',
    'Interact with others in a way that is courteous and respectful.',
    'Do not interfere with others\' personal or private lives or try to control them.',
    'If you want to take someone\'s photo or share their work, then get their permission first.',
    'Encourage and support your co-learners in their efforts to acquire knowledge and create things.',
    'Choose to be a positive contributor in workshops, discussions, and collaborative spaces.'
  ];
  expectedBehaviors.forEach((behavior, index) => {
    addText(`• ${behavior}`, 10);
  });

  // Unacceptable Behavior
  addText('Unacceptable Behavior', 16, true, [220, 38, 38]);
  addText('Some examples of possible behavior that may not be accepted at Hack Day Butwal are:', 11);
  const unacceptableBehaviors = [
    'Harassment, e.g., insulting or discriminating comments related to gender, age, sexual orientation, disability, race, religion, appearance, or background.',
    'Making use of sexually charged words, pictures, or acts, e.g., the name of the projects, presentations, or team identifiers.',
    'Intimidation, unwanted touching, spying, or threatening behavior.',
    'Publishing or distributing sexually explicit, violent, or hateful material.',
    'Disrupting the events, presentations, or collaborative sessions that have been organized previously.',
    'Giving out or threatening to give out someone\'s private information (doxxing).',
    'Bullying, exclusionary behavior, or any action that makes another participant feel that they are not safe or that they are not welcome.',
    'Besides, staff, volunteers, mentors, and organizers ought not to wear sexually suggestive clothes or do anything that could be considered displeasing or immodest.'
  ];
  unacceptableBehaviors.forEach((behavior) => {
    addText(`• ${behavior}`, 10);
  });
  addText('If someone tells you that your words or actions make them uncomfortable (even if you didn\'t mean to), please stop right away. Respect is not optional; it is a requirement.', 10, true);

  // Scope
  addText('Scope', 16, true, [242, 140, 29]);
  addText('The present Code of Conduct is mandatory for everyone who is in any way related to Hack Day Butwal. Participants, mentors, judges, volunteers, organizers, sponsors, and guests are all covered by these rules. These rules control the behavior of people at the event location, during the trip provided by the organizers, at the social events related to the event, and in all the online spaces connected with the event (e.g., communication platforms, shared workspaces, or social media groups).', 11);

  // Reporting Concerns
  addText('Reporting Concerns', 16, true, [242, 140, 29]);
  addText('In case you witness or get to know about a behavior that is against this Code of Conduct or if you feel uncomfortable or unsafe, you should definitely get in touch with someone immediately. You can inform about your situation by:', 11);
  const reportingMethods = [
    'Directly addressing a Butwal Hacks organizer or volunteer (check for staff badges or team members who are designated).',
    'Locating the Safety & Support Desk at the event venue.',
    'Dispatching a note to support@butwalhacks.com.'
  ];
  reportingMethods.forEach((method, index) => {
    addText(`${index + 1}. ${method}`, 10);
  });
  addText('Every single report is treated very seriously, handled confidentially, and with great care. We realize that it might be a hard thing to talk about, especially if you are a young participant, but we are here to listen without making any judgments.', 11);
  addText('Our team members are ready to help you by:', 11, true);
  const helpMethods = [
    'Giving you the support you need right away or if you want, taking you along.',
    'Getting in touch with the proper guardians, school authorities, or local law enforcement, when necessary.',
    'Making sure to take the steps necessary for your safety and comfort for the rest of the event.'
  ];
  helpMethods.forEach((method) => {
    addText(`• ${method}`, 10);
  });

  // Enforcement
  addText('Enforcement', 16, true, [242, 140, 29]);
  addText('In a case where an individual violates the regulations outlined in this Code of Conduct, the subsequent handling of such a case will be conducted in a timely and fair manner very much in accordance with the facts of the case. Based on the severity and nature of the issue, Butwal Hacks may only choose to carry out some of the actions from the list below which is not exhaustive:', 11);
  const enforcementActions = [
    'Officially warning.',
    'Temporarily limiting someone\'s access to certain parts of the event or some activities.',
    'Forcibly removing a person without their consent to a refund or participation in any other event.',
    'Informing the parents or legal guardians if the participant is a minor.',
    'Getting the police or other external authorities involved in case of serious situations.'
  ];
  enforcementActions.forEach((action) => {
    addText(`• ${action}`, 10);
  });
  addText('We are putting the safety of our participants first, especially those who are minors, above everything else.', 11, true);

  // Final Note
  addText('Final Note', 16, true, [242, 140, 29]);
  addText('Hack Day Butwal is a place where young technologists are given the necessary environment to be curious, collaborate, and come up with creative ideas. By following this Code of Conduct, we create a community where every teenage participant can thrive and innovate safely.', 11);
  addText('— The Butwal Hacks Team', 11, true);

  // Contact
  yPosition += 10;
  addText('Contact', 16, true, [242, 140, 29]);
  addText('If you want to know more or need help, please get in touch with us at support@butwalhacks.com', 11);

  // Save the PDF
  doc.save('Hack_Day_Butwal_Code_of_Conduct.pdf');
};
