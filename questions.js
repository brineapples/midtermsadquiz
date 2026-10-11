// Each item: [question, CORRECT answer, wrong, wrong, wrong]
// The app places the correct answer at a balanced A/B/C/D position (or shuffles it).
window.QUESTIONS = [
  // ---- Analyst role ----
  ["Which of the following best defines the primary role of a Systems Analyst?", "Understanding business problems and determining system requirements", "Writing efficient back-end software code", "Managing project budgets and network infrastructure hardware", "Managing daily database backups"],
  ["When translating user needs to developers, the Systems Analyst acts as a:", "Communication bridge", "Database administrator", "Project sponsor", "Quality assurance tester"],
  ["In the university enrollment example, converting \"Students need an easier way to enroll\" into \"The system shall allow students to enroll in available courses online\" is an example of:", "Defining a system requirement", "Performing adaptive maintenance", "Conducting a feasibility study", "Creating an ERD"],
  ["Which requirement-gathering method involves watching operational staff carry out their daily workflows?", "Observation", "Questionnaires", "Document analysis", "System prototyping"],
  ["Which maintenance type focuses on updating software because the operating environment or laws changed?", "Adaptive Maintenance", "Corrective Maintenance", "Perfective Maintenance", "Preventive Maintenance"],
  ["What is the main distinction between a Systems Analyst and a Programmer?", "The analyst determines what the system should do, while the programmer determines how to build it technically.", "The analyst writes the code, while the programmer designs the user interface.", "The programmer leads stakeholder meetings, while the analyst conducts unit testing.", "There is no functional difference between the two roles."],
  ["Which SDLC phase focuses on answering the core question: \"Why do we need a new system?\"", "Planning", "Design", "Analysis", "Maintenance"],
  ["Which modeling diagram maps the structural database entities and their interactions?", "Entity-Relationship Diagram (ERD)", "Use Case Diagram", "Context Diagram", "Activity Diagram"],
  ["A Systems Analyst is best described as a professional who:", "Studies an organization's business processes and information needs to help design information systems", "Writes and maintains all of the organization's source code", "Installs and repairs network hardware", "Tests software only after it is released"],
  ["Which of the following is NOT the primary responsibility of a systems analyst?", "Simply writing code", "Understanding organizational problems", "Bridging organizational needs with technical execution", "Determining what the system needs to do"],
  ["What is the primary focus of a systems analyst?", "Understanding organizational problems/requirements and determining what the system needs to do", "Choosing the fastest programming language", "Maintaining servers and routers", "Designing company logos"],
  ["Who studies the problem and determines what the system should do?", "Systems Analyst", "Programmer", "Hardware vendor", "Database backup operator"],
  ["Who builds the solution and determines how to implement it technically?", "Programmer", "Systems Analyst", "Registrar", "Project stakeholder"],
  ["Which activity belongs to the programmer rather than the systems analyst?", "Writes and maintains code", "Gathers and defines requirements", "Analyzes business processes", "Creates system models"],
  ["Which activity belongs to the systems analyst rather than the programmer?", "Gathers and defines requirements", "Develops software", "Implements requirements", "Writes and maintains code"],
  ["Which role communicates directly with users and stakeholders?", "Systems Analyst", "Programmer", "Compiler", "Hardware technician"],
  ["Must a systems analyst be the best programmer on the team?", "No, but they must understand technology well enough to communicate effectively with technical professionals", "Yes, because they must review all code", "Yes, because they implement the requirements", "No, and they do not need any technical knowledge at all"],
  ["The systems analyst acts as a mediator between:", "Non-technical business stakeholders and technical development teams", "Only management and the finance department", "Only developers and testers", "Only users and customers"],

  // ---- Communication across stakeholders ----
  ["When communicating with management, the systems analyst discusses:", "Business goals and budget", "Operational pain points", "Structured technical requirements", "Schedule and project progress"],
  ["When communicating with users, the systems analyst identifies:", "Operational needs and pain points", "Business goals and budget", "Source code reviews", "Structured technical requirements"],
  ["When communicating with developers, the systems analyst provides:", "Structured technical requirements", "Business goals and budget", "Operational pain points", "Schedule and project progress"],
  ["When communicating with designers, the systems analyst collaborates on:", "System interface and user experience (UX)", "Budget approval", "Database backups", "Hardware procurement"],
  ["When communicating with the project team, the systems analyst coordinates:", "Schedule and project progress", "Business goals and budget", "Operational pain points", "Interface design"],
  ["A registrar says, \"We need a faster enrollment process.\" Which is the best systems analyst translation for the developer?", "The system shall allow students to search available courses, select courses, submit enrollment, and receive an enrollment confirmation.", "Make the website faster.", "Hire more registrar staff.", "Rewrite the whole database."],

  // ---- Responsibilities ----
  ["Which question would a systems analyst ask when investigating a current situation?", "What problem exists, why does it exist, and who is affected?", "Which programming language is currently most popular?", "How many servers does the vendor sell?", "Who wrote the original code?"],
  ["Which of the following is a typical inefficiency found when analyzing existing processes?", "Duplicate data entry", "Fast processing times", "Accurate reports", "Too many security controls"],
  ["Which of these problems would an analyst look for when studying current workflows?", "Lost forms and human errors", "Faster report generation", "Fully automated data entry", "Shorter processing times"],
  ["What does defining system requirements involve?", "Converting vague user statements into precise system specs", "Writing code from the specs", "Testing the finished software", "Backing up user data"],
  ["Which is a precise system requirement?", "The system shall allow students to enroll in available courses online.", "Students need an easier way to enroll.", "Enrollment should feel nicer.", "The registrar wants things faster."],
  ["Which of these is a vague user statement rather than a system requirement?", "Students need an easier way to enroll.", "The system shall allow students to enroll in available courses online.", "The system shall let students search available courses.", "The system shall send an enrollment confirmation."],
  ["Which responsibility uses visual diagrams to illustrate system function and structure?", "Model the system", "Evaluate alternatives", "Communicate with stakeholders", "Support system design"],
  ["Which responsibility involves assessing potential solution avenues?", "Evaluate alternatives", "Model the system", "Gather requirements", "Define system requirements"],
  ["Which responsibility involves collaborating with designers and developers so implementation meets business requirements?", "Support system design", "Gather requirements", "Evaluate alternatives", "Model the system"],
  ["Which responsibility maintains active alignment throughout the development life cycle?", "Communicate with stakeholders", "Analyze existing processes", "Model the system", "Evaluate alternatives"],

  // ---- Techniques, diagrams, alternatives ----
  ["Which of the following is NOT a requirements gathering technique?", "Compiling source code", "Interviews", "Questionnaires", "Observation"],
  ["Which technique involves direct conversations with stakeholders to collect detailed requirements?", "Interviews", "Observation", "Document analysis", "Questionnaires"],
  ["Reviewing existing forms, reports, and records to understand how a process works is called:", "Document analysis", "Observation", "Workshops", "Questionnaires"],
  ["Which technique collects written responses from many stakeholders using a prepared set of questions?", "Questionnaires", "Observation", "Meetings", "Document analysis"],
  ["Which of the following is listed as a requirements gathering technique?", "Workshops", "Code refactoring", "Load testing", "Database indexing"],
  ["Which diagram is a high-level visual model of system boundaries and external interfaces?", "Context Diagram", "Entity-Relationship Diagram", "Class Diagram", "Sequence Diagram"],
  ["Which diagram illustrates how data moves through processes, stores, and external entities?", "Data Flow Diagram (DFD)", "Entity-Relationship Diagram (ERD)", "Context Diagram", "Use Case Diagram"],
  ["Which graphical model maps data structures and relationships within a database system?", "Entity-Relationship Diagram (ERD)", "Data Flow Diagram (DFD)", "Activity Diagram", "Sequence Diagram"],
  ["Which of the following is NOT a system modeling diagram used by analysts?", "Pie chart of quarterly sales", "Class Diagram", "Sequence Diagram", "Use Case Diagram"],
  ["Which of these is among the visual models analysts use to show system behavior and architecture?", "Activity Diagram", "Wiring diagram", "Circuit schematic", "Floor plan"],
  ["Which is NOT one of the alternatives an analyst might evaluate for a slow university enrollment process?", "Cancel enrollment for all students", "Improve the existing system", "Develop a new web application", "Adopt a cloud-based solution"],
  ["Purchasing an existing commercial enrollment system is an example of:", "Evaluating an alternative solution", "Corrective maintenance", "Creating an ERD", "Preventive maintenance"],
  ["Which of the following is NOT a factor used to evaluate alternative solutions?", "The programmer's favorite color", "Cost", "Security", "Usability"],
  ["Which of the following is an evaluation factor when comparing alternative solutions?", "Security", "Office wall color", "The programmer's age", "Number of coffee machines"],

  // ---- Skills ----
  ["Which skill matters \"to understand problems and identify solutions\"?", "Analytical Thinking", "Teamwork", "Documentation", "Creativity"],
  ["Which skill matters \"to communicate with users and developers\"?", "Communication", "Interviewing", "Teamwork", "Technical Knowledge"],
  ["Which skill matters \"to identify and address system problems\"?", "Problem-Solving", "Creativity", "Documentation", "Business Knowledge"],
  ["Which skill matters \"to gather detailed requirements\"?", "Interviewing", "Critical Thinking", "Documentation", "Teamwork"],
  ["Which skill matters \"to evaluate alternative solutions\"?", "Critical Thinking", "Creativity", "Teamwork", "Business Knowledge"],
  ["Which skill matters \"to understand available technologies\"?", "Technical Knowledge", "Business Knowledge", "Communication", "Interviewing"],
  ["Which skill matters \"to clearly record requirements and analysis\"?", "Documentation", "Creativity", "Teamwork", "Critical Thinking"],
  ["Which skill matters \"to work with different stakeholders\"?", "Teamwork", "Documentation", "Technical Knowledge", "Analytical Thinking"],
  ["Which skill matters \"to understand organizational processes\"?", "Business Knowledge", "Technical Knowledge", "Creativity", "Interviewing"],
  ["Which skill matters \"to develop possible solutions\"?", "Creativity", "Documentation", "Business Knowledge", "Teamwork"],

  // ---- SDLC overview ----
  ["What is the Systems Development Life Cycle (SDLC)?", "A structured process used to plan, analyze, design, develop, implement, and maintain information systems", "A programming language used by analysts", "A type of database diagram", "A tool for testing network hardware"],
  ["Which pair of core questions does the SDLC address?", "\"What problem are we trying to solve?\" and \"How should we develop a system that solves the problem?\"", "\"Who wrote the code?\" and \"When was it deployed?\"", "\"How much does it cost?\" and \"Who pays for it?\"", "\"What language is used?\" and \"Which server hosts it?\""],
  ["Which sequence is the complete 7-phase SDLC model?", "Planning, Analysis, Design, Develop, Test, Deploy, Maintenance", "Analysis, Planning, Design, Test, Develop, Deploy, Maintenance", "Planning, Design, Analysis, Develop, Deploy, Test, Maintenance", "Planning, Analysis, Develop, Design, Test, Maintenance, Deploy"],
  ["Which sequence is the simplified 5-phase SDLC model?", "Planning, Analysis, Design, Implement, Maintenance", "Analysis, Planning, Design, Implement, Maintenance", "Planning, Design, Analysis, Maintenance, Implement", "Planning, Analysis, Implement, Design, Maintenance"],
  ["In the simplified 5-phase model, the Implement phase encompasses:", "Develop, Test, and Deploy", "Planning, Analysis, and Design", "Design, Test, and Maintenance", "Analysis, Develop, and Maintenance"],
  ["How many phases are in the complete SDLC model?", "7", "4", "5", "9"],
  ["How many phases are in the simplified SDLC model?", "5", "7", "3", "6"],

  // ---- Guided questions ----
  ["Which guided question belongs to the Planning phase?", "Why build it?", "What is needed?", "How to build it?", "How to keep it reliable?"],
  ["Which guided question belongs to the Analysis phase?", "What is needed?", "Why build it?", "How to build it?", "How to keep it reliable?"],
  ["Which guided question belongs to the Design phase?", "How will the system meet the requirements?", "Why do we need a new system?", "What does the organization and its users need?", "How do we keep the system useful and reliable?"],
  ["Which guided question belongs to the Maintenance phase?", "How do we keep the system useful and reliable?", "Why do we need a new system?", "What is needed?", "How will the system meet the requirements?"],

  // ---- Phase details ----
  ["In which phase does the organization identify a problem or opportunity and determine whether a development project should be pursued?", "Planning", "Analysis", "Design", "Maintenance"],
  ["Which is a major activity of the Planning phase?", "Conduct preliminary feasibility analysis", "Write the production code", "Deploy to users", "Fix runtime bugs"],
  ["Which of these tasks is part of the Planning phase?", "Identify stakeholders and define project scope", "Design the database schema", "Perform unit testing", "Apply operating system patches"],
  ["Which phase determines what the system must do by gathering, analyzing, and documenting requirements?", "Analysis", "Planning", "Design", "Maintenance"],
  ["Which phase includes studying the existing system and analyzing business processes?", "Analysis", "Planning", "Design", "Maintenance"],
  ["Which is a major activity of the Analysis phase?", "Define functional and non-functional requirements", "Select technologies", "Develop prototypes", "Deploy the system"],
  ["Which are system models created during the Analysis phase?", "Context Diagrams, DFDs, ERDs, and Use Cases", "Source code files", "Test scripts", "Backup schedules"],
  ["Which phase bridges high-level business goals and technical design?", "Analysis", "Planning", "Maintenance", "Deploy"],
  ["Which phase transforms analysis requirements into a detailed technical blueprint for the system?", "Design", "Planning", "Maintenance", "Analysis"],
  ["Which is a major activity of the Design phase?", "Design system architecture and database", "Interview users about their pain points", "Estimate project resources", "Fix reported bugs"],
  ["In which phase are technologies selected and prototypes developed?", "Design", "Planning", "Maintenance", "Analysis"],
  ["Designing user interfaces (UI), inputs, and outputs happens in which phase?", "Design", "Analysis", "Planning", "Maintenance"],
  ["In the Implementation phase, code is written, tested for quality assurance, and:", "Deployed into operational environments", "Archived permanently", "Converted into ERDs", "Replaced by the planning phase"],
  ["Which phase fixes bugs, resolves customer issues, manages software changes, and monitors performance, security, and user experience?", "Maintenance", "Planning", "Design", "Analysis"],

  // ---- Maintenance ----
  ["How many major types of maintenance does the SDLC describe?", "4", "3", "5", "2"],
  ["Which type of maintenance fixes errors and defects?", "Corrective Maintenance", "Adaptive Maintenance", "Perfective Maintenance", "Preventive Maintenance"],
  ["Improving existing features and performance based on user feedback is:", "Perfective Maintenance", "Corrective Maintenance", "Adaptive Maintenance", "Preventive Maintenance"],
  ["Making changes to reduce potential future problems is:", "Preventive Maintenance", "Corrective Maintenance", "Adaptive Maintenance", "Perfective Maintenance"],
  ["An operating system update forces changes to the system. Which maintenance type is this?", "Adaptive Maintenance", "Corrective Maintenance", "Perfective Maintenance", "Preventive Maintenance"],
  ["Modifying a system to comply with a new law is an example of:", "Adaptive Maintenance", "Corrective Maintenance", "Perfective Maintenance", "Preventive Maintenance"],
  ["Fixing a defect that causes the system to crash is an example of:", "Corrective Maintenance", "Adaptive Maintenance", "Perfective Maintenance", "Preventive Maintenance"],

  // ---- Requirements ----
  ["Declarative statements defining specific features, behaviors, or services a system must perform are called:", "Functional requirements", "Non-functional requirements", "Context diagrams", "Corrective maintenance"],
  ["Standards defining system operational qualities such as security, usability, reliability, and performance are called:", "Non-functional requirements", "Functional requirements", "Entity-relationship diagrams", "Adaptive maintenance"],
  ["Which is an example of a non-functional requirement?", "The system must be secure and reliable.", "The system shall let students submit a request.", "The system shall display a confirmation.", "The system shall let staff process requests."],
  ["Which is an example of a functional requirement?", "The system shall allow students to submit an enrollment.", "The system must have high performance.", "The system must be user-friendly.", "The system must be reliable."],

  // ---- Classroom activity ----
  ["In the manual certificate request process, what is the first step?", "Student goes to the registrar's office", "Student pays the fee", "Registrar processes the request", "Student collects the certificate"],
  ["In the manual process, what does the student do right after filling out the paper request form?", "Submits the form", "Pays the required fee", "Waits for processing", "Collects the certificate"],
  ["In the manual process, what happens right after the student pays the required fee?", "Student waits for the registrar to process the request", "Student fills out a paper form", "Student goes to the registrar's office", "Student returns to collect the certificate"],
  ["How many functional requirements are required in the \"You are the Systems Analyst!\" activity?", "10", "5", "7", "15"],
  ["How many stakeholders and how many problems are required in the activity?", "5 stakeholders and 5 problems", "10 stakeholders and 5 problems", "5 stakeholders and 10 problems", "3 stakeholders and 3 problems"],
  ["What is the submission deadline for the activity?", "10:30 am September 1, Tuesday", "10:30 am September 11, Tuesday", "10:00 am September 1, Monday", "1:30 pm September 1, Tuesday"]
];
