# the_Trailblazers
NIROG 
(A Systematic Patient Treatment Model in Govt. Hospitals of  INDIA)


NIROG MODEL FEATURES ---

1.**Online Appointment Booking**: Allows patients to schedule appointments with Doctors of specific hospitals selected by patient itself during the booking, reducing in-person queuing in the government hospitals of INDIA.

2.**Advanced Doctor Detection System**: Utilizing computer vision technology, cameras installed in the doctor's cabinet monitor occupancy, dynamically updating availability status and streamlining appointment scheduling, thereby enhancing clinic efficiency.

3.**E-Prescription System**: Doctors issue digital prescriptions accessible via the "MY PRESCRIPTION" section in the patient portal. Patients can also upload past prescriptions for the doctor's review, centralizing important documents and eliminating paperwork at government hospitals.

4.**E-Report System**: Enables doctors to issue digital reports that patients can access via " MY REPORTS'' provided to the patient in the dashboard . It provides the facility of keeping the important documents of the patient at one place . No paperwork is required to be carried by the patient in the Government hospitals.

5.**Integration of DOXXAB**: Incorporates a specialized chatbot system to assist patients in understanding their symptoms, potential causes, and preliminary diagnoses. By leveraging algorithms and training mechanisms, DOXXAB offers insights into possible health issues and can forward reports to assigned doctors upon patient request, streamlining the consultation process and enhancing efficiency in healthcare delivery.

6.**Call Bot Integration**: Patients can book appointments via a call bot, providing basic details like name, age, and symptoms. A severity score is generated and sent to the doctor portal, aiding in assessment before appointments. This streamlines booking, enhances efficiency, and aids in preparedness for healthcare providers.

Future Features to be integrated:

1.**Feedback System**: Implement a user-friendly feedback system to gather patient experiences and improve service delivery. If the patient is unhappy with the medications; doctor availability and hospital services ; he/she can rate the services and can change the hospital for the next checkup. This ensures efficient and top notch healthcare facilities are provided to the patient.

2.**Health Data Management**: Enhanced data management systems can be implemented to securely store and analyze patient health data. This data can be utilized for research purposes, epidemiological studies, and healthcare planning, contributing to evidence-based decision-making and public health interventions.

3.**Advanced Technology Integration**: With the arrival of , the NIROG model can incorporate cutting-edge technologies such as artificial intelligence, machine learning, and predictive analytics. These technologies can further streamline processes, improve diagnosis accuracy, and personalize patient treatment plans.
![WhatsApp Image 2024-03-10 at 09 56 02_f6502202](https://github.com/Sourabh-awasthy/the_Trailblazers/assets/147153342/89ecb3ab-9908-4906-bd53-b862a14e9946)


Challenges we ran into -

1.**Complex Integration and Backend Development**: Developing backend systems for both patient and doctor panels posed significant challenges due to the need for seamless integration and functionality across multiple platforms. Ensuring smooth data flow and communication between different components while maintaining security and scalability added complexity to the development process.

2.**Limited Time Access to Gemini's Open AI API Key**: Integrating a chatbot into the system using a time-limited access to Gemini's OpenAI API key presented a challenge in terms of optimizing the usage of the limited resource. Balancing the functionality and scope of the chatbot within the given constraints required careful planning and resource management.

3.**Unique Token Number System for Patient Online Booking**: Implementing a unique token number system for patients during online booking presented challenges in terms of designing an efficient algorithm to generate and manage these tokens. Ensuring that each token is unique, secure, and easily retrievable from the backend server required meticulous planning and testing.

4.**Integration of Advanced Doctor Detection System Using Computer Vision**: Incorporating an advanced doctor detection system using computer vision technology posed challenges related to algorithm complexity, data processing, and real-time performance. Ensuring accurate and reliable detection of doctors from various input sources while minimizing false positives and optimizing resource usage required thorough testing and optimization of the computer vision algorithms.

5.**Incorporating Smooth user flow Interface and Experience for the Patient**: Making the portal easy to use involved learning how Patients navigate, making it accessible, and smooth access to all features of the portal.


![image](https://github.com/Sourabh-awasthy/the_Trailblazers/assets/147153342/4efb0d77-60b3-4e4e-9c69-6af08d9e532e)

Running the project:

1.Frontend Setup:
- Navigate to the frontend directory in your terminal.
- Run the command npm install to install the necessary dependencies.
- After the installation completes, start the local development server by running npm start. - - This will launch the frontend application on a local host server.

2.Backend Setup:

- Switch to the backend directory in your terminal.
- Execute npm install to install the required Node.js dependencies.
- Set up the environment file (.env) with
- ```bash
  DATABASE_URL=mongodb+srv://nirognith:5U4C05yyMObcg6lz@nirog.4ijff5z.mongodb.net/?retryWrites=true&w=majority&appName=NIrog
  JWT_KEY=nirog_nith
  PORT=8080
  ```
-Install mongodb compass application & paste the above url and connect to the project to see the database live (default is test)
- Start the backend server by running node server.js.

3.Adds Folder Setup:

- Access the appropriate directory for the "adds" folder in your terminal.
- Install the Python dependencies listed in the requirements.txt file by executing pip install -r requirements.txt.

4.Overall Setup:

- In the main terminal, ensure you're in the root directory of your project.
- Run pip install -r requirements.txt to install any remaining Python dependencies needed for the project.
