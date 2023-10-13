/** @format */

import React, { useState } from "react";
import img from "../../Images/image 17.png";
import img3 from "../../Images/Group 7877.png";
import { Modal } from "react-bootstrap";

const Footer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [termModal, setTermModal] = useState(false);
  const [refundModal, setRefundModal] = useState(false);
  const [disclaimerModal, setDisclaimerModal] = useState(false);
  const [portalShow, setPortalShow] = useState(false);

  // Privacy Policy
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This privacy policy (the "PRIVACY POLICY") applies to your use of
            the website of vyaparkhata hosted at vyaparkhata.com, the Services
            (as defined under the vyaparkhata "Terms of Use") and vyaparkhata
            applications on mobile platforms (Android, Blackberry, Windows
            Phone, iOS etc.) (collectively ("vyaparkhata" or "WEBSITE")), but
            does not apply to any third-party websites that may be linked to
            them, or any relationships you may have with the businesses listed
            on vyaparkhata . The terms "WE", "OUR" and "US" refer to vyaparkhata
            and the terms "YOU", "YOUR" and "USER" refer to you, as a user of
            vyaparkhata. The term "PERSONAL INFORMATION" means information that
            you provide to us that personally identifies you to be contacted or
            identified, such as your name, phone number, email address, and any
            other data that is tied to such information. Our practices and
            procedures in relation to the collection and use of Personal
            Information have been set-out below in order to ensure safe usage of
            the Website for you. We have implemented reasonable security
            practices and procedures that are commensurate with the information
            assets being protected and with the nature of our business. While we
            try our best to provide security that is better than the industry
            standards, because of the inherent vulnerabilities of the internet,
            we cannot ensure or warrant complete security of all information
            that is being transmitted to us by you. By visiting this Website,
            you agree and acknowledge to be bound by this Privacy Policy and you
            hereby consent that we will collect, use, process and share your
            Personal Information in the manner set out hereinbelow. If you do
            not agree with these terms, do not use the Website. It is clarified
            that the terms and conditions that are provided separately, form an
            integral part of your use of this Website and should be read in
            conjunction with this Privacy Policy. Information we collect and how
            we use it We collect, receive and store your Personal Information.
            If you provide your third-party account credentials ("THIRD PARTY
            ACCOUNT INFORMATION") to us, you understand that some content and
            information in those accounts may be transmitted to your account
            with us if you authorise such transmissions and that Third Party
            Account Information transmitted to us shall be covered by this
            Privacy Policy. You may opt to not provide us with certain
            information, however that will restrict you from registering with us
            or availing of some of our features and services. We use
            commercially reasonable efforts to ensure that the collection of
            Personal Information is limited to that which is necessary to fulfil
            the purposes identified below. If we use or plan to use your
            information in a manner different from the purpose for which it is
            collected, then we will ask you for your consent prior to such use.
            The Personal Information collected will be used only for the purpose
            of enabling you to use the services provided by us, to help promote
            a safe service, calibrate consumer interest in our products and
            services, inform you about online offers and updates, troubleshoot
            problems, customize User experience, detect and protect us against
            error, fraud and other criminal activity, collect money, enforce our
            terms and conditions, and as otherwise described to you at the time
            of collection of such information. Account information If you create
            an account to take advantage of the full range of services offered
            on vyaparkhata, we ask for and record Personal Information such as
            your name, email address and mobile number. We may collect and store
            your Sensitive Personal Data or Information (such as any financial
            information including inter alia credit card, debit card details,
            bank account and know your customer ("KYC") documents as per RBI
            regulations and any other information as may be applicable) that the
            User may opt to save in the User account created with vyaparkhata].
            We use your email address to send you updates, news, and newsletters
            (if you willingly subscribe to the newsletter during signup, or
            anytime after signup) and contact you on behalf of other Users (such
            other Users who send you friend requests, personal messages, or
            other social collaboration based events). [If you do not want to
            receive communications from us that are not relevant to you or your
            use of our services, please click on the unsubscribe link provided
            at the bottom of such emails sent to you by us. We use your mobile
            numbers to send you transaction alerts and SMS alerts based on your
            preferences. If you do not wish to receive such SMSs from us, please
            notify us at support@vyaparkhata.com to stop receiving SMSs from us.
            vyaparkhata assures that your Personal Information will not be made
            public or sold to any third party. The User shall have an option to
            erase any information provided by the User including Personal
            Information. If a User opts for the said option of erasure,
            vyaparkhata shall delete all stored information of the User from its
            servers. We also store customer information of customers making
            payments through vyaparkhata. However, only when customer chooses to
            share the information on the businesses powered with vyaparkhata
            applications we share the information to respective businesses.
            However, vyaparkhata is not liable in any way for any misuse of this
            information by the business or people related to the businesses to
            whom the information is shared by the customer. Feedback If you
            contact us to provide feedback, register a complaint, or ask a
            question, we will record any Personal Information and other content
            that you provide in your communication so that we can effectively
            respond to your communication. Activity We record information
            relating to your use of vyaparkhata, such as the searches you
            undertake, the pages you view, your browser type, IP address,
            location, requested URL, referring URL, and timestamp information.
            We use this type of information to administer vyaparkhata and
            provide the highest possible level of security and service to you.
            We also use this information in the aggregate to perform statistical
            analyses of User behavior and characteristics in order to measure
            interest in and use of the various areas of vyaparkhata. However,
            you cannot be identified from this aggregate information. We own all
            the intellectual property rights associated with the Website and its
            contents. No right, title or interest in any downloaded material is
            transferred to you as a result of any such downloading or copying.
            The Website is protected by copyright as a collective work and/ or
            compilation (meaning the collection, arrangement, and assembly) of
            all the content on this Website, pursuant to applicable law. Our
            logos, product and service marks and/ or names, trademarks,
            copyrights and other intellectual property, whether registered or
            not ("OUR IP") are exclusively owned by us. Without our prior
            written permission, you agree to not display and/ or use Our IP in
            any manner. Nothing contained in this Website or the content, should
            be construed as granting, in any way to the User, any license or
            right or interest whatsoever, in and/ or to Our IP, without our
            express written permission. Cookies We send cookies to your computer
            in order to uniquely identify your browser and improve the quality
            of our service. The term "cookies" refers to small pieces of
            information that a website sends to your computer's hard drive while
            you are viewing the site. We may use both session cookies (which
            expire once you close your browser) and persistent cookies (which
            stay on your computer until you delete them). Persistent cookies can
            be removed by following your browser help file directions. If you
            choose to disable cookies, some areas of vyaparkhata may not work
            properly or at all. vyaparkhata uses third party tools, who may
            collect anonymous information about your visits to vyaparkhata using
            cookies, and interaction with vyaparkhata products and services.
            Such third parties may also use information about your visits to
            vyaparkhata products and services and other web sites to target
            advertisements for vyaparkhata's products and services. No Personal
            Information is collected or used in this process. These third
            parties do not know or have access to the name, phone number,
            address, email address, or any Personal Information about
            vyaparkhata's Users. vyaparkhata Users can opt-out of sharing this
            information with third parties by deactivating cookies, the process
            of which varies from browser to browser. Please refer to the help
            file of your browser to understand the process of deactivating
            cookies on your browser. Enforcement We may use the information we
            collect in connection with your use of vyaparkhata (including your
            Personal Information) in order to investigate, enforce, and apply
            our terms and conditions and Privacy Policy. Transfer of information
            We do not share your Personal Information with any third party apart
            from financial institutions such as banks, RBI or other regulatory
            agencies (as may be required) and to provide you with services that
            we offer through vyaparkhata, conduct quality assurance testing,
            facilitate creation of accounts, provide technical and customer
            support, or provide specific services, such as synchronization of
            your contacts with other software applications, in accordance with
            your instructions. These third parties are required not to use your
            Personal Information other than to provide the services requested by
            you. We may share your Personal Information with our parent company,
            subsidiaries, joint ventures, or other companies under a common
            control (collectively, the "AFFILIATES") that we may have now or in
            the future, in which case we will require them to honor this Privacy
            Policy. If another company acquires our company or our assets, that
            company will possess your Personal Information, and will assume the
            rights and obligations with respect to that information as described
            in this Privacy Policy. We may disclose your Personal Information to
            third parties in a good faith belief that such disclosure is
            reasonably necessary to (a) take action regarding suspected illegal
            activities; (b) enforce or apply our terms and conditions and
            Privacy Policy; (c) comply with legal process, such as a search
            warrant, subpoena, statute, or court order; or (d) protect our
            rights, reputation, and property, or that of our Users, Affiliates,
            or the public. Please note that we are not required to question or
            contest the validity of any search warrant, subpoena or other
            similar governmental requests that we receive. We may disclose
            information in the aggregate to third parties relating to User
            behavior in connection with actual or prospective business
            relationship with those third parties, such as advertisers and
            content distributors. For example, we may disclose the number of
            Users that have been exposed to, or clicked on, advertising banners.
            Links References on this Website to any names, marks, products or
            services of third parties or hyperlinks to third party websites or
            information are provided solely for your convenience and do not in
            any way constitute or imply our endorsement, sponsorship or
            recommendation of the third party, information, product or service.
            Except as set forth herein, we do not share your Personal
            Information with those third parties, and are not responsible for
            their privacy practices. We suggest you read the privacy policies on
            all such third party websites. User access of Personal Information
            As a registered vyaparkhata User, you can modify some of your
            Personal Information and your privacy preferences by accessing the
            "Account" section of this Website. Security Your account is password
            protected. We use industry-standard measures to protect the Personal
            Information that is stored in our database. We limit the access to
            your Personal Information to those employees and contractors who
            need access to perform their job functions, such as our customer
            service personnel. If you have any questions about the security on
            vyaparkhata, please contact us at support@vyaparkhata.com You hereby
            acknowledge that vyaparkhata is not responsible for any intercepted
            information sent via the internet, and you hereby release us from
            any and all claims arising out of or related to the use of
            intercepted information in any unauthorized manner. Terms and
            modifications to this Privacy Policy Our Privacy Policy is subject
            to change at any time without notice. To make sure you are aware of
            any changes, please review this policy periodically. These changes
            will be effective immediately on the Users of vyaparkhata. Please
            note that at all times you are responsible for updating your
            Personal Information, including providing us with your most current
            email address. If you do not wish to permit changes in our use of
            your Personal Information, you must notify us promptly that you wish
            to deactivate your account with us. Continued use of vyaparkhata
            after any change/ amendment to this Privacy Policy shall indicate
            your acknowledgement of such changes and agreement to be bound by
            the terms and conditions of such changes. Applicable law Your use of
            this Website will be governed by and construed in accordance with
            the laws of India. The Users agree that any legal action or
            proceedings arising out of your use may be brought exclusively in
            the competent courts/ tribunals having jurisdiction in Bengaluru in
            India and irrevocably submit themselves to the jurisdiction of such
            courts/ tribunals. Complaints and Grievance Redressal Any complaints
            or concerns in relation to your Personal Information or content of
            this Website or any dispute or breach of confidentiality or any
            proprietary rights of User during use of the Website or any
            intellectual property of any User should be immediately informed to
            the Grievance cum Nodal Officer at the co-ordinates mentioned below
            in writing or by way of raising a grievance ticket through the email
            mentioned below: support@vyaparkhata.com
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  // Terms and Condition
  function Terms(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Terms and Condition
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The terms and conditions contained hereinafter ("TERMS OF USE")
            shall apply to the use of the website www.vyaparkhata.com and any
            other linked pages, products, software(s), API keys, features,
            content or application services (including but without limitation to
            any mobile application services) in connection therewith, offered
            from time to time by any vyaparkhata group company ("vyaparkhata" or
            "WE" or "OUR" or "US") (collectively, "WEBSITE"). Any person logging
            on to or using the Website (even when such person does not avail of
            any services provided in the Website ("SERVICES")) (hereinafter
            referred to as a "USER", "SELLER", "YOU" or "CLIENT") shall be
            presumed to have read these Terms of Use (which includes the Privacy
            Policy, separately put up on the Website) and unconditionally and
            irrevocably accepted the terms and conditions set out herein (these
            Terms of Use). These Terms of Use, together with the rest of the
            Policies (defined below), constitute a binding and enforceable
            agreement between the User and vyaparkhata. These Terms of Use do
            not alter in any way the terms or conditions of any other written
            agreement you may have with vyaparkhata for other services. THE USER
            UNDERSTANDS AND UNCONDITIONALLY ACKNOWLEDGES THAT EVEN THOUGH THE
            USER MAY BE ALLOWED TO EXECUTE TRANSACTIONS ON THE PLATFORM OF
            vyaparkhata, THE FUNDS SHALL NOT BE SETTLED TO THE ACCOUNT OF SUCH
            USER PENDING comPLETION OF KYC OBLIGATIONS ON THE PART OF THE USER
            IN ACCORDANCE WITH THE RBI'S KYC GUIDELINES (DEFINED BELOW).
            FURTHER, UPON NON-comPLETION OF KYC OBLIGATIONS ON THE PART OF THE
            USER, AS MENTIONED ABOVE, TO THE SATISFACTION OF vyaparkhata, WE
            RESERVE THE RIGHT TO NOT RELEASE THE SETTLEMENT AMOUNTS TO THE USER
            AND MAY EVENTUALLY REVERSE THE FUNDS TO THE ACCOUNT FROM WHERE SUCH
            PAYMENT ORIGINATED. Please read the terms set out hereunder
            carefully before agreeing to the same. If you do not agree to these
            Terms of Use (including any referenced policies or guidelines),
            please immediately terminate your use of the Website. You can accept
            the Terms of Use by: Clicking to accept or agree to the Terms of
            Use, where this option is made available to you by vyaparkhata in
            the User interface for any particular Service; or Accessing, testing
            or actually using the Services. In this case, you understand and
            agree that vyaparkhata will treat your use of the Services as
            acceptance of the Terms of Use from that point onwards. For the
            purpose of these Terms of Use, wherever the context so requires, the
            term "User" shall mean and include any natural or legal person who
            has agreed to these Terms of Use on behalf of itself or any other
            legal entity. It is clarified that the Privacy Policy (that is
            provided separately), form an integral part of these Terms of Use
            and should be read contemporaneously with the Terms of Use.
            Illegality or unenforceability of one or more provisions of these
            Terms of Use shall not affect the legality and enforceability of the
            other terms of the Terms of Use. For avoidance of doubt, if any of
            the provisions becomes void or unenforceable, the rest of the
            provisions of these Terms of Use shall be binding upon the User. The
            Terms of Use may be revised or altered by us at our sole discretion
            at any time without any prior intimation to the User. The latest
            Terms of Use will be posted here. Any such changes by vyaparkhata
            will be effective immediately. By continuing to use this Website or
            to access the Services / usage of our Services after changes are
            made, you agree to be bound by the revised/ amended Terms of Use and
            such amendments shall supersede all other terms of use previously
            accepted by the User. You are solely responsible for understanding
            and complying with all applicable laws of your specific
            jurisdiction, including but not limited to the provisions of the RBI
            Guidelines on Regulation of Payment Aggregators and Payment
            Gateways, Payment and Settlement Systems Act, 2007, Prevention of
            Money Laundering Act, 2002, Know Your Customer (KYC) / Anti-Money
            Laundering (AML) / combating Financing of Terrorism (CFT) guidelines
            issued by the Department of Regulation, RBI (the "KYC GUIDELINES")
            etc., that may be applicable to you in connection with your business
            and use of our Services. Provision of the Services being offered by
            vyaparkhata Subject to these Terms of Use, Merchant Onboarding
            Policy, KYC Policy, Disputes and Grievance Redressal Policy and
            Privacy Policy (collectively, "POLICIES"), vyaparkhata offers the
            Services set forth in Schedule I herein. Schedule I also contains
            descriptions and process flows of all Services that are offered to
            Users. These descriptions and process flows are set out in Part A to
            Part G in Schedule I. vyaparkhata is constantly evolving in order to
            provide the best possible experience and information to its Users.
            You acknowledge and agree that the form and nature of the Services
            which vyaparkhata provides may change from time to time without any
            prior notice to you. As part of this continuing process, you
            acknowledge and agree that vyaparkhata may stop (permanently or
            temporarily) providing the Services (or any features within the
            Services) to you or to Users generally at vyaparkhata's sole
            discretion, without any prior notice. You may stop using the
            Services at any point of time. You do not need to specifically
            inform vyaparkhata when you stop using the Services. You acknowledge
            and agree that if vyaparkhata disables access to your account, you
            may be prevented from accessing the Services, your account details
            or any files or other content which is contained in your account,
            and vyaparkhata shall intimate you regarding the same. vyaparkhata
            reserves the right to delete your User information stored in your
            account including but not limited to all or any personal information
            or any sensitive personal data or information ("SPDI") stored in
            your User account. Alternately, a User may notify us if they do not
            wish that we retain or use the personal information or SPDI by
            contacting the Grievance Officer (as provided below). However, in
            such a case, we may not be able to provide you some or all of our
            Services. You acknowledge and agree that while vyaparkhata may not
            currently have set a fixed upper limit on the number of
            transmissions you may send or receive through the Services, such
            fixed upper limits may be set by vyaparkhata at any time, solely at
            vyaparkhata's discretion. By using our Services you agree that
            vyaparkhata disclaims any liability or authenticity of any
            information that may have become outdated since the last time that
            particular piece of information was updated. vyaparkhata reserves
            the right to make changes and corrections to any part of the content
            of this Website at any time without any prior notice to you. Unless
            stated otherwise, all pictures and information contained on this
            Website are believed to be in the public domain as either
            promotional materials, publicity photos, photoshoot rejects or press
            media stock. Please contact the Grievance Officer by an e-mail if
            you are the copyright owner of any content on this Website and you
            think the use of the above material violates the terms of the
            applicable Copyright law in any manner. In your request, please
            indicate the exact URL of the webpage to enable us to locate the
            same. We will endeavour to address your concerns and take necessary
            steps, if required. Please note that all images displayed on the
            Website have been digitised by vyaparkhata. No other party is
            authorised to reproduce or republish these digital versions in any
            format whatsoever without the prior written permission of
            vyaparkhata. vyaparkhata acknowledges and represents that it is and
            shall remain Payment Card Industry Data Security Standard ("PCI
            DSS") certified. Further, vyaparkhata shall maintain compliance with
            PCI DSS Standard or other comparable industry standards governing
            physical/ logical security cardholder data across vyaparkhata
            environment and ensure that the card holder's data is secured in
            accordance with the standards. Use of the Services by User In order
            to access certain Services, you may be required to open a User
            account with vyaparkhata by providing information about yourself
            (such as identification or contact details) as part of the
            registration process ("REGISTRATION DATA") for the Services, or as
            part of your continued use of the Services. You agree that any
            Registration Data you give to vyaparkhata will always be accurate,
            correct, complete and up to date. If you provide any information
            that is untrue, inaccurate, incomplete, or not current or if we have
            reasonable grounds to suspect that such information is in violation
            of applicable law or not in accordance with the Terms of Use
            (whether wholly or in part), we reserve the right to reject your
            registration and/ or indefinitely suspend or terminate your User
            account and refuse to provide you access to the Website. Further,
            you agree to indemnify and keep us indemnified from and against all
            claims resulting from the use of any detail/ information/
            Registration Data that you post and/ or supply to us. We shall be
            entitled to remove any such detail/ information/ Registration Data
            posted by you without any prior intimation to you. Notwithstanding
            anything else contained in any other agreement involving you and
            vyaparkhata and/ or any other third party, in order to ensure that
            we are not violating any right that you might have in your
            Registration Data, you hereby grant to us a non-exclusive,
            worldwide, perpetual, irrevocable, royalty-free, sub-licensable
            right to exercise the copyright, publicity, and database rights (but
            no other rights) that you have in the Registration Data, in any
            media now or in future known, with respect to your Registration Data
            solely to enable us to use such Registration Data that you have
            supplied to us. Any amendment or rectification of your Registration
            Data in the User account can be carried out by accessing the "User
            account" section on the Website. You may choose to delete any or all
            of your User content/ information or even the User account at any
            time. Processing such deletion may take some time, but the same
            shall be done by vyaparkhata. We may maintain backup of all User
            content for such time as may be required under applicable laws and
            for operational purposes of vyaparkhata. You are solely responsible
            for maintaining the confidentiality of your account and password and
            for any activity that occurs in or through your account. We will not
            be liable to any person for any loss or damage which may arise as a
            result of any failure on your part to protect your login ID or
            password or any other credential pertaining to your account. You
            should take all necessary steps to ensure that the password is kept
            confidential and secure. In case you have any reason to believe that
            your password has become known to anyone else, or if the password is
            being, or is likely to be, used in an unauthorised manner, you
            should inform us immediately at support@vyaparkhata.com. In the
            event of any dispute between two or more parties as to ownership of
            any particular account with vyaparkhata, you agree that vyaparkhata
            shall be the sole arbitrator for such dispute and that vyaparkhata's
            decision in this regard will be final and binding on you. You
            understand and undertake that you shall be solely responsible for
            your Registration Data and User content and undertake to, neither by
            yourself nor by permitting any third party to host, display, upload,
            modify, publish, transmit, update or share any information that:
            Belongs to another person and to which you do not have any right to;
            Is grossly harmful, harassing, blasphemous, defamatory, obscene,
            pornographic, pedophilic, seditious, libellous, invasive of
            another's privacy, hateful, or racially, ethnically objectionable,
            disparaging, relating or encouraging money laundering or gambling,
            or otherwise unlawful in any manner whatsoever; Harms minors in any
            way; Infringes any patent, trademark, copyright or other proprietary
            rights of any person or entity anywhere in the world; Violates any
            law for the time being in force; Deceives or misleads the addressee
            about the origin of such messages or communicates any information
            which is grossly offensive or menacing in nature; Impersonates
            another person; Contains software viruses or any other computer
            code, files or programs designed to interrupt, destroy or limit the
            functionality of any computer resource; Threatens the unity,
            integrity, defence, security or sovereignty of India, friendly
            relations with foreign states, or public order or causes incitement
            to the commission of any cognizable offence or prevents
            investigation of any offence or is insulting to any other nation; or
            Is illegal in any other way. You agree and understand that
            vyaparkhata reserves the right to remove and/or edit such detail/
            information. If you come across any information as mentioned above
            on the Website, you are requested to immediately contact our
            Grievance Officer. You agree to use the Services only for purposes
            that are permitted by (a) these Terms of Use and (b) any applicable
            law, regulation or generally accepted practices or guidelines in the
            relevant jurisdictions. You agree to use the data owned by
            vyaparkhata (as available on the Website or through any other means
            like API(s) etc.) only for personal purposes and not for any
            commercial use unless agreed to by vyaparkhata in writing. You agree
            not to access (or attempt to access) any of the Services by any
            means other than through the interface that is provided by
            vyaparkhata, unless you have been specifically allowed to do so in a
            separate agreement with vyaparkhata. You specifically agree not to
            access (or attempt to access) any of the Services through any
            automated means (including use of scripts or web crawlers) and shall
            ensure that you comply with the instructions set out in any
            robots.txt file present on the Services. You agree that you will not
            engage in any activity that interferes with or disrupts the Services
            (or the servers and networks which are connected to the Services) on
            this Website. Unless you have been specifically permitted to do so
            in a separate agreement with vyaparkhata, you agree that you will
            not reproduce, duplicate, copy, sell, trade or resell the Services
            for any purpose. You agree that you are solely responsible for (and
            that vyaparkhata has no responsibility to you or to any third party
            for) any breach of your obligations under the Terms of Use and for
            the consequences (including any loss or damage which vyaparkhata may
            suffer) of any such breach. You further agree to the use of your
            data by us in accordance with the Privacy Policy. vyaparkhata may
            share any Content (defined hereinafter) generated by the User or
            their Registration Data with governmental and regulatory agencies
            who are lawfully authorised for investigative, protective and cyber
            security activities. Such information may be transferred for the
            purposes of verification of identity, or for prevention, detection,
            investigation, prosecution pertaining to cyber security incidents
            and punishment of offences under any law for the time being in
            force. If you have opted for use of vyaparkhata's 'subscriptions'
            product by virtue of which your customers have set up a standing
            instruction ("RECURRING PAYMENT INSTRUCTION") to charge his/ her
            chosen payment method (such as credit card, debit card or bank
            account) as per the billing cycle communicated by you to
            vyaparkhata, then you consent that the relevant amount will be
            charged to such payment method as per the billing cycle communicated
            to vyaparkhata. You agree that vyaparkhata shall continue to charge
            the relevant amount to the relevant customer's chosen payment method
            as per such billing cycle until you or the customer terminates the
            Recurring Payment Instruction. You further agree that if the
            customer revokes his/ her consent to the Recurring Payment
            Instruction then you shall inform us of the revocation in writing
            for us to cease processing the Recurring Payment Instruction
            forthwith upon the revocation but no later than 7 (seven) days prior
            to the next instance of charge to the customer. If such intimation
            of revocation of Recurring Payment Instruction is made less than 7
            (seven) days prior to the next instance of charge to the customer or
            is not made at all, vyaparkhata shall not be liable for any charge
            applied to the customer for that month pursuant to the revocation or
            not be liable at all, as applicable. You agree to make good any
            losses suffered by us on account of demands or claims from customers
            arising as a consequence of your failure in notifying us about a
            customer's revocation of the Recurring Payment Instruction.
            Eligibility and Access to vyaparkhata Services: ou represent and
            warrant that you have full legal capacity and authority to agree and
            bind yourself to these Terms, you are eighteen years of age or older
            are an Indian resident and have all requisite licences,
            registrations, rights, power, and authority in full force to enter
            into this Terms and Conditions. If you represent an entity,
            organisation, or any other legal person, you confirm and represent
            that you have the necessary power and authority to bind such entity,
            organisation, or legal person to these Terms. To access vyaparkhata
            Services, you may be required to complete certain underwriting
            processes with us. As part of this process, you may need to provide
            us with Underwriting Documents, such as information or documents
            that may be necessary to confirm your eligibility for our Services.
            By uploading the Underwriting Documents, you authorize vyaparkhata
            and any third-party service provider we engage with to process them
            and determine your eligibility for the Services. Any processing of
            your information will be in accordance with our Privacy Policy, and
            may be subject to additional terms of service if a third-party is
            involved. Furthermore, during the Term, we at vyaparkhata may
            request Additional Information or supporting documents that may be
            required as a part of our internal checks and due-diligence for
            continued use of the Services. You agree to provide this information
            promptly upon request and authorize us to process it. You warrant
            that the Underwriting Documents and Additional Information you
            provide are truthful, complete, and up-to-date. If we determine that
            the information you provide is unreliable, fraudulent, or deficient,
            we reserve the right to refuse to provide you with the Services,
            including Payment Aggregation Services on the vyaparkhata Platform.
            If we later discover any deficiencies in the information you
            provided, we may suspend your vyaparkhata Account. In such cases,
            the Payment Partner reserves the right to settle all pending
            Transaction Amounts with you, return pending Transaction Amounts to
            the Customers, or hold the pending Transaction Amounts for further
            investigation. Content in the Services For the purposes of these
            Terms of Use, the term "CONTENT" includes, without limitation,
            information, data, text, logos, photographs, videos, audio clips,
            animations, written posts, articles, comments, software, scripts,
            graphics, themes and interactive features generated, provided or
            otherwise made accessible on or through the Services. You should be
            aware that Content presented to you as part of the Services,
            including but not limited to advertisements in the Services and
            sponsored Content within the Services may be protected by
            intellectual property rights which are owned by the sponsors or
            advertisers who provide that Content to vyaparkhata (or by other
            persons or companies on their behalf). You may not modify, rent,
            lease, loan, sell, distribute or create derivative works based on
            this Content (either in whole or in part) unless you have been
            specifically told that you may do so by vyaparkhata or by the owners
            of that Content, in writing and in a separate agreement. vyaparkhata
            reserves the right (but shall have no obligation) to pre-screen,
            review, flag, filter, modify, refuse or remove any or all Content
            from any Service. vyaparkhata reserves the right to moderate,
            publish, re-publish, and use all User generated contributions and
            comments (including but not limited to reviews, profile pictures,
            comments, likes, favorites, votes) posted on the Website as it deems
            appropriate (whether in whole or in part) for its product(s),
            whether owned or affiliated. vyaparkhata is not liable to pay
            royalty to any User for re-publishing any content across any of its
            platforms. If you submit any material on the Website, you agree
            thereby to grant vyaparkhata the right to use, moderate, publish any
            such work worldwide for any of its product(s), whether owned or
            affiliated. You understand that by using the Services you may be
            exposed to Content that you may find offensive, indecent or
            objectionable and that, in this respect, your use of the Services
            will be at your own risk. You agree that you are solely responsible
            for (and that vyaparkhata has no responsibility to you or to any
            third party for) any Content that you create, transmit or display
            while using the Services and for the consequences of your actions
            (including any loss or damage which vyaparkhata may suffer) by doing
            so. Proprietary Rights You acknowledge and agree that vyaparkhata
            (or vyaparkhata's licensors) owns all legal and proprietary right,
            title and interest in and to the Services, including any
            intellectual property rights which subsist in the Services (whether
            those rights happen to be registered or not, and wherever in the
            world those rights may exist). You further acknowledge that the
            Services may contain information which is designated confidential by
            vyaparkhata and that you shall not disclose such information without
            vyaparkhata's prior written consent. Unless you have agreed
            otherwise in writing with vyaparkhata, nothing in the Terms of Use
            gives you a right to use any of vyaparkhata's trade names,
            trademarks, service marks, logos, domain names, and other
            distinctive brand features. Unless you have been expressly
            authorized to do so in writing by vyaparkhata, you agree that in
            using the Services, you will not use any trade mark, service mark,
            trade name, logo of any company or organization in a way that is
            likely or intended to cause confusion about the owner or authorized
            User of such marks, names or logos. compliance with anti-bribery and
            anti-corruption laws User agrees and unconditionally undertakes to
            comply with all applicable commercial and public anti-bribery and
            anti-corruption laws (including but not limited to the provisions of
            Foreign Corrupt Practices Act, 1977, UK Bribery Act, 2010,
            Prevention of Corruption Act, 1988, Prevention of Money Laundering
            Act, 2002, Foreign Contribution (Regulation) Act, 2010, and any
            amendments thereto) which prohibit the User, its/ his/ her
            officials, representatives, agents or any other person associated
            with or acting on behalf of such User from giving, offering,
            promising to offer, receiving/ accepting or acting in any other
            manner so as to induce a payment, gift, hospitality or anything of
            value (either directly or indirectly) whether from within the
            country or from abroad to government officials, publics servants,
            regulatory bodies, judicial authorities, persons in positions of
            authority, elected or contesting electoral candidates, political
            parties or office bearers thereof or any other third party or person
            in order to obtain an improper commercial/business advantage of any
            kind. Government Officials include any government employee,
            candidate for public office, an employee of government - owned or
            government -- controlled companies, public international
            organizations and political parties. User also agrees not to give,
            offer, pay, promise or authorize to give or pay, directly or through
            any other person, anything of value to anybody for the purpose of
            inducing or rewarding any favorable action or influencing a decision
            in favor of the User. The User also unconditionally agrees and
            undertakes that it is compliant with and shall do/ undertake all
            acts necessary to continue to be compliant with the provisions of
            'The Know Your Customer (KYC) / Anti-Money Laundering (AML) /
            combating Financing of Terrorism (CFT) guidelines issued by the
            Department of Regulation', RBI, as amended from time to time.
            compliance with mandates of the OFAC User undertakes that it shall,
            during the use of the Services, be in compliance with the mandates
            of OFAC and acknowledges that the User has not directly or
            indirectly lent, contributed or otherwise made available funds to
            any of its affiliates, joint venture partners or any other person or
            entity for the purpose of financing the activities of any person
            currently subject to the OFAC Specially Designated Nationals List
            (SDN), Consolidated Sanctions List and the Additional OFAC Sanctions
            List, as amended from time to time. For the purpose of this
            paragraph 7, OFAC means the Office of Foreign Assets Control
            constituted under the laws of the United States of America.
            Exclusion of Warranties Nothing in these Terms of Use, including
            this paragraph 8, shall exclude or limit your warranty or liability
            for losses unless they are excluded or limited by applicable law.
            Some jurisdictions do not allow the exclusion of certain warranties
            or conditions or the limitation or exclusion of liability for loss
            or damage caused by negligence, breach of contract or breach of
            implied terms, or incidental or consequential damages. Accordingly,
            only the limitations which are lawful in your jurisdiction will
            apply to you and our liability will be limited to the maximum extent
            permitted by law. vyaparkhata disclaims any implied warranty for
            Services and any use thereof. You expressly understand and agree
            that your use of the Services is at your sole risk and that the
            Services are provided on an "as is" and "as available" basis. In
            particular, vyaparkhata, its subsidiaries and affiliates, and its
            licensors do not represent or warrant to you that: The information
            or Contents provided on the Website are accurate, complete and
            updated; Your use of the Services will meet your requirements; Your
            use of the Services will be uninterrupted, timely, secure or free
            from error; Any information obtained by you as a result of your use
            of the Services will be accurate or reliable; and That defects in
            the operation or functionality of any software provided to you as
            part of the Services will be corrected. Any material downloaded or
            otherwise obtained through the use of the Services is done at your
            own discretion and risk and that you will be solely responsible for
            any damage to your computer system or other device or loss of data
            that results from the download of any such material. No advice or
            information, whether oral or written, obtained by you from
            vyaparkhata or from the use of Services shall create any warranty
            not expressly stated in these Terms of Use. vyaparkhata further
            expressly disclaims all warranties and conditions of any kind,
            whether express or implied, including, but not limited to the
            implied warranties and conditions of merchantability, fitness for a
            particular purpose and non-infringement. Representations and
            Warranties of User/ seller The User/ seller hereby represents and
            warrants: That User/ seller, in case of a natural person, is at
            least 18 years old with a conscious mind fit and proper to enter
            into this agreement (the "Policies"), is a resident of India with
            valid credentials and is an entity who is legally eligible to carry
            out or operate a business in India; That the all the information and
            documents pertaining to his/ her identity and address proof, as
            submitted for the purpose of know your client (KYC) verification
            with vyaparkhata are true and genuine and are not fabricated or
            doctored in any way whatsoever;That the User shall hold and keep
            vyaparkhata, its promoters, directors, employees, officials, agents,
            subsidiaries, affiliates and representatives harmless from any
            liabilities arising in connection with any incidental or intentional
            discrepancy that is found to be there in the documents submitted by
            such User for the purpose of KYC formalities; That any incidental or
            upfront liability arising in connection with User's/ seller's KYC
            formalities for the purpose of availing the services of vyaparkhata
            shall be the absolute responsibility and repercussion of the User
            and neither vyaparkhata nor any of its affiliates or office bearers
            shall be responsible in any way for any reason including for
            ascertaining the veracity of the KYC documents submitted by such
            User with vyaparkhata; That User/ seller shall be solely responsible
            for understanding and complying with any and all applicable laws
            relevant to the User and their business, and any liability, whether
            pecuniary or otherwise, arising from any non-compliance of such
            applicable laws shall be at the sole cost and risk of such User;
            That the User shall ensure that its IT systems and infrastructure
            are compliant with the mandates of PCI-DSS and Payment
            Application-Data Security Standard, as applicable to it; That the
            User/ seller shall operate and conduct his/ her business as per
            declaration provided by such User to vyaparkhata at the time of
            onboarding of such User by vyaparkhata and shall promptly report any
            change/ deviation/ addition/ deletion in the scope of business
            activities of such User to vyaparkhata; That all data, information,
            inventions, intellectual properties (including patents, trademarks,
            copyrights, design and trade secrets), know-how, new uses and
            processes, and any other intellectual property right, asset or form,
            including, but not limited to, analytical methods, procedures and
            techniques, research, procedure manuals, financial information,
            computer technical expertise, software for the purpose of availing
            of services of vyaparkhata and any updates or amendments thereto is
            and shall be the sole intellectual property of vyaparkhata and
            should in no way be construed to grant any rights and/ or title to
            the User in such intellectual property of vyaparkhata; That User/
            seller shall not store any customer card and such related date in
            any form or manner whatsoever on their websites/ servers; That it
            shall be the exclusive responsibility of the User to ensure that the
            correct line of business of the User is declared under merchant
            category code (MCC) pertaining to the User and that vyaparkhata
            reserves the right to withhold settlements and/ or suspend
            transactions of the User in case of any mismatch or violation in its
            MCC declaration; and That the User/ seller shall accord adequate and
            timely co-operation in allowing vyaparkhata or it's appointed
            agencies or regulators to conduct audits, including for compliance
            with the Policies and provisions of applicable laws. Indemnity The
            User shall indemnify and hold vyaparkhata, its subsidiaries,
            affiliates, promoters, directors, employees, contractors, licensors
            and agents and any other related or third parties involved with
            vyaparkhata in any manner whatsoever, harmless from and against all
            losses arising from claims, demands, actions or other proceedings as
            a result of: Fraud, negligence and willful misconduct by the User in
            the use of the Services; Violation of applicable laws in the use of
            the Services and/ or in the conduct of the business of the User,
            including but not limited to the legal provisions mentioned under
            paragraphs 6 and 7 hereinabove; Breach of the User's confidentiality
            obligations under these Terms of Use; Disputes raised by a User's
            customer in relation to a transaction where such dispute is not
            attributable to the Services; Penalties, fines, charges, or any
            other actions as a result of breach or violation of any the User's
            representations and warranties; and Fines, penalties and charges
            imposed by the Acquiring Bank, Card Payment Networks or any
            Governmental Authority on account of transactions on the User's
            website or platform that are in violation of applicable law.
            Limitation of Liability Subject to the overall provisions stated
            above, you expressly understand and agree that vyaparkhata, its
            subsidiaries, affiliates, promoters, directors, employees, agents
            and licensors shall not be liable to you for: Any direct, indirect,
            incidental, special, consequential, punitive or exemplary damages
            which may be incurred by you, however caused and under any theory of
            liability. This shall include, but not be limited to, any loss of
            profit (whether incurred directly or indirectly), any loss of
            goodwill or business reputation, any loss of data suffered, cost of
            procurement of substitute goods or Services, or other intangible
            loss; Any loss or damage which may be incurred by you, including but
            not limited to loss or damage as a result of any reliance placed by
            you on the completeness, accuracy or existence of any advertising,
            or as a result of any relationship or transaction between you and
            any advertiser or sponsor whose advertisement appears on the
            Services; The deletion of, corruption of, or failure to store, any
            content and other communications data maintained or transmitted by
            or through your use of the Services; Your failure to provide
            vyaparkhata with accurate Registration Data; or Your failure to keep
            your password or account details secure and confidential. The
            limitations on vyaparkhata's liability to you shall apply whether or
            not vyaparkhata has/ had been advised of or should have been aware
            of the possibility of any losses to you. Force Majeure vyaparkhata
            shall not be in breach of its obligation hereunder if it is delayed
            in the performance of, or is unable to perform (whether partially or
            fully) its obligations (provide the Services) as a result of the
            occurrence of a Force Majeure Event (defined below). Force Majeure
            Event means any event, whatever be the origin, not within the
            reasonable control of vyaparkhata, which vyaparkhata is unable to
            prevent, avoid or remove or circumvent by the use of reasonable
            diligence. Force Majeure event shall include, but shall not be
            limited to, acts of god, acts, orders, directions of governmental/
            regulatory/ judicial/ quasi-judicial/ law enforcement authorities/
            agencies which hinders vyaparkhata from performing its obligations
            under any agreement, including these Terms of Use, with you, war,
            hostilities, invasion, armed conflict, act of foreign enemy,
            embargoes, riot, insurrection, labour stoppages, outages and
            downtimes systems failures experienced by a facility provider,
            revolution or usurped power, acts of terrorism, sabotage, nuclear
            explosion, earthquake, pandemic, epidemic, hacking or man in the
            middle attack or similar attacks/ intrusions, fires, typhoons,
            storms and other natural catastrophes. Any payment obligations of
            vyaparkhata, in case of a Force Majeure event, shall be limited by
            and be subject to the fulfillment of the payment obligations of the
            partners banks/ financial institutions, counterparties and any other
            parties involved in or intrinsically linked to the provision of the
            Services of vyaparkhata. Confidentiality The User may receive or
            have access to certain confidential and proprietary information,
            including without limitation, information belonging and/or relating
            to vyaparkhata and its affiliates, marketing prospects, contractors,
            officers, directors or shareholders, personal data of customers of
            the User, financial and operational information, billing records,
            business model and reports, computer systems and modules, secure
            websites, reporting systems, marketing strategies, operational
            plans, proprietary systems and procedures, trade secrets and other
            similar proprietary information, including technical "know-how",
            methods of operation, business methodologies, software, software and
            technology architecture, networks, any other information not
            generally available to the public, and any items in any form in
            writing or oral, clearly identified as confidential ("CONFIDENTIAL
            INFORMATION"). The User shall keep Confidential Information in
            confidence. The User shall use commercial, reasonable and necessary
            safety measures and steps to maintain the confidentiality and
            secrecy of the Confidential Information from public disclosure, and
            the User shall at all times maintain appropriate measures to protect
            the security and integrity of the Confidential Information. The User
            shall not, without vyaparkhata's prior written consent, divulge any
            of the Confidential Information to any third party other than the
            User's officers, employees, agents or representatives who have a
            need to know for the purposes of these Terms of Use. The User shall
            take all reasonable steps to ensure that all of its directors,
            managers, officers, employees, agents, independent contractors or
            other representatives comply with this paragraph 12 whenever they
            are in possession of Confidential Information as part of this
            Agreement. The User shall use the Confidential Information solely in
            furtherance of and in connection with the Services contemplated
            under these Terms of Use. The User further agrees that the
            Confidential Information will not be used by him/ her and his/ her
            representatives, in any way detrimental to the interests of
            vyaparkhata. The User hereby unconditionally and irrevocably agrees
            and undertakes to take all necessary measures to ensure that the
            User's website or any other computer system that is being used to
            effect Transactions by the usage of Services, do not store/ save any
            customer card or any other such related data. You further undertake
            that you shall be responsible for ensuring complete and absolutely
            privacy, anonymity and security of all customer data flowing through
            your systems during the usage of the Services by you. Exceptions:
            The aforesaid confidentiality obligations shall impose no obligation
            on the User with respect to any portion of Confidential Information
            which: Was at the time received or which thereafter becomes, through
            no act or failure on the part of the User, generally known or
            available to the public; Was at the time of receipt, known to the
            User as evidenced by written documentation then rightfully in the
            possession of the User or vyaparkhata; Was already acquired by the
            User from a third party who does not thereby breach an obligation of
            confidentiality to vyaparkhata and who discloses it to the User in
            good faith; Was developed by the User without use of the 's
            Confidential Information in such development; or Has been disclosed
            pursuant to the requirements of applicable law, any governmental/
            regulatory authority, judicial/ quasi-judicial authority provided
            however, that vyaparkhata shall have been given a reasonable
            opportunity to resist disclosure and/or to obtain a suitable
            protective order. The User shall notify vyaparkhata immediately upon
            discovery of any unauthorized use or disclosure of Confidential
            Information or any other breach of this paragraph 12. The User will
            cooperate with vyaparkhata in every reasonable way to help
            vyaparkhata regain possession of such Confidential Information and
            prevent its further unauthorized use. Remedies: Parties acknowledge
            that irreparable damage may occur on breach of the terms and
            provisions set out in this paragraph 12. Accordingly, if the User
            breaches or threatens to breach any of the provisions set out in
            this paragraph 12, then vyaparkhata shall be entitled, without
            prejudice, to seek all the rights and remedies available to it under
            applicable law, including a temporary restraining order and an
            injunction restraining any breach of the provisions set out in this
            paragraph 12. Such remedies shall not be deemed to be exclusive but
            shall be in addition to all other remedies available under
            applicable law or in equity. Fraudulent Transactions Subject to
            paragraphs 14.2 and 14.3 below, if vyaparkhata is intimated, by the
            Acquiring Bank or a Card Payment Network, that a customer has
            reported an unauthorised debit of the customer's payment instrument
            ("FRAUDULENT TRANSACTION"), then vyaparkhata shall be entitled to
            suspend the settlement of the amount associated with the Fraudulent
            Transaction during the pendency of inquiries, investigations and
            resolution thereof by the Acquiring Bank or the Card Payment
            Network. Subject to paragraph 14.3 below, if the Fraudulent
            Transaction results in a Chargeback, then the Chargeback shall be
            resolved in accordance with the provisions relating to Chargeback as
            set out under these Terms of Use. If the amount in respect of a
            Fraudulent Transaction has already been settled to the User pursuant
            to these Terms of Use, any dispute arising in relation to the said
            Fraudulent Transaction, following settlement, shall be resolved in
            accordance with the RBI's notification RBI/DPSS/2019-20/174
            DPSS.CO.PD.No.1810/02.14.008/2019-20, dated March 17, 2020,
            DBR.No.Leg.BC.78/09.07.005/2017-18, dated July 6, 2017 read with
            RBI's notification DBOD. LEG. BC 86/09.07.007/2001-02 dated April 8,
            2002 and other notifications, circulars and guidelines issued by the
            RBI in this regard from time to time. Advertising Some of the
            Services are supported by advertising revenue and may display
            advertisements and promotions. These advertisements may be targeted
            to the content of information stored on the Services, queries made
            through the Services or other information. The manner, mode and
            extent of advertising by vyaparkhata on the Services are subject to
            change without any specific notice to you. In consideration for
            vyaparkhata granting you access to and use of the Services, you
            agree that vyaparkhata may place such advertising on the Services.
            Authorisation By accepting these Terms of Use, you authorise us to
            hold, receive, disburse and settle funds on your behalf. Your
            authorisation permits us to generate an electronic funds transfer
            between the payment system providers and the escrow account to
            process each payment transaction that you authorise. Thereafter, you
            authorise us to transfer the payments received from your buyers to
            the bank account designated by you for this purpose at the time of
            registration ("ACQUIRING BANK"). Your authorisation will remain in
            full force and effect until your vyaparkhata account is closed or
            terminated. Card Association Rules "CARD PAYMENT NETWORK RULES"
            refer to the written rules, regulations, releases, guidelines,
            processes, interpretations and other requirements (whether
            contractual or otherwise) imposed and adopted by the Card Payment
            Networks. These Card Payment Networks have infrastructure and
            processes to enable transaction authorisation. The Card Payment
            Networks require you to comply with all applicable guidelines,
            rules, and regulations formulated by them. The Card Payment Networks
            reserve the right to amend their guidelines, rules and regulations.
            We may be required to amend modify or change these Terms of Use
            pursuant to amendments to the Card Payment Network Rules and such
            amendments, if any, shall be deemed to be binding on the Users with
            immediate effect. You agree to fully comply with all programs,
            guidelines, requirements that may be published and/ or mandated by
            the Card Payment Networks. Notwithstanding our assistance in
            understanding the Card Payment Network Rules, you expressly
            acknowledge and agree that you are assuming the risk of compliance
            with all provisions of the Card Payment Network Rules, regardless of
            whether you are aware of or have access to those provisions.
            MasterCard, Visa and American Express make excerpts of their
            respective rules available on their internet sites. In the event
            that your non-compliance of Card Payment Network Rules, results in
            any fines, penalties or other amounts being levied on or demanded of
            us by a Card Payment Network, then without prejudice to our other
            rights hereunder, you shall forthwith reimburse us in an amount
            equal to the fines, penalties or other amount so levied or demanded
            or spent by us in any manner in relation to such fines, penalties
            and levies. If you fail to comply with your obligations towards the
            Card Payment Networks, vyaparkhata may suspend settlement or
            suspend/ terminate the Services forthwith. Settlements In
            consideration of the Services rendered by us, you shall pay
            vyaparkhata a fee ("FEE"). vyaparkhata reserves the right to revise
            the Fee periodically and will intimate you of any such change within
            reasonable time. vyaparkhata reserves the right to levy additional
            fees on transactions undertaken through corporate cards. This
            additional fee shall at least be 1% (one percent) of transaction
            amount, over and above applicable credit card fees. On receipt of
            the payments in the nodal account, we will endeavour to instruct the
            nodal bank to transmit the payments payable to the seller, after
            deducting our Fee, from the nodal account to the seller's designated
            bank account, within 3 (three) bank working days (or such other
            period as may be prescribed by the Reserve Bank of India from time
            to time) from completion of transaction. Subject to any other
            provisions of these Terms of Use and completion of transaction, the
            seller acknowledges that we will settle the payments only upon
            actual receipt of payments in the nodal account and upon
            reconciliation of the payments by the Acquiring Banks, our payment
            gateway and the nodal bank. The seller will bear and be responsible
            and liable for the payment of all relevant taxes in relation to the
            payments made under these Terms of Use. Sellers receive the amount
            (minus vyaparkhata's Fee) in their bank account within T+3 bank
            working days where T is defined as the date of intimation of the
            completion of the transaction. vyaparkhata shall be entitled to
            charge on the Fee, taxes applicable from time to time ("APPLICABLE
            TAXES"). It is agreed that any statutory variations in Applicable
            Taxes during the subsistence of this Agreement shall be borne by the
            User.Monthly invoices shall be raised by us in respect of the Fees
            charged for transactions processed during such month. Any reasonable
            dispute in respect of an amount (or a portion thereof) mentioned in
            an invoice must be communicated by the User via notice ("INVOICE
            DISPUTE NOTICE") within a reasonable period of time but no later
            than thirty (30) calendar days from the date of the invoice.
            vyaparkhata shall use good faith efforts to reconcile any reasonably
            disputed amounts within reasonable time from the receipt of the
            Invoice Dispute Notice. In respect of invoices received by the
            Client, it is agreed that if the User pays over applicable taxes
            under the Indian Income Tax laws and furnishes to us the TRACES
            certificate in respect of such taxes paid, then we shall reimburse
            to the User, on a quarterly basis, the amount in respect of such
            taxes paid. Once a payment is authenticated by payment service
            providers, money shall be moved to the escrow account and the first
            settlement shall be initiated only after all required documents (in
            hard copies) are received by vyaparkhata. All risks associated with
            the delivery of the goods or service will solely be that of the
            seller and not of vyaparkhata. Also, all disputes regarding quality,
            merchantability, non-delivery, delay in delivery or otherwise will
            be directly between the seller and the buyer without making
            vyaparkhata and/ or the payment service providers, a party to such
            disputes. Further, vyaparkhata also reserves the right to close,
            suspend, limit or put on hold the User's access to the account with
            vyaparkhata and/ or the funds available therein, including
            settlements pertaining to the User under inter alia the following
            scenarios: If such User's KYC credentials are found to be ingenuine
            or fake; If the User makes incorrect or untrue disclosure of the
            nature of its business, resulting in a merchant category code
            violation; For violation of any of the provisions of these "Terms of
            Use"; For violation of any of the provisions of any other agreement
            that the User has entered into or might enter into with vyaparkhata;
            and For violation of any of the applicable laws by such User. Such
            right to close, suspend, limit or put on hold the User's access to
            the account with vyaparkhata shall continue till such time that such
            User submits genuine KYC documents or credentials to the
            satisfaction of the relevant authorities as per the extant rules,
            regulations or guidelines with regard to KYC, as well as to the
            satisfaction of vyaparkhata without prejudice to any other legal
            remedy that vyaparkhata is entitled to prefer as per applicable law.
            ELIGIBILITY FOR DISCOUNTS & OFFERS: Any offers or discounts related
            to free credits are not valid for unregistered businesses who accept
            payments via Credit Cards. However, the same offers can be utilised
            through payments accepted via other payment modes such as Debit
            Cards, wallets, UPI, NetBanking, etc. Terms & Conditions may vary
            basis the ongoing offer, product, or other factors. For detailed
            Terms & Conditions on specific offers and discounts, kindly refer to
            the dedicated T&C page shared along with the offer communication.
            Unless otherwise agreed in writing, all free credits (including
            related offers and discounts) are valid for a period of 3 months
            from the date of issuance post which the credits will automatically
            expire. The free credits will be removed from your account post
            expiry. All signups will be governed by the overall Terms &
            Conditions of vyaparkhata. vyaparkhata reserves the right to change
            these terms and conditions at any time without any prior notice.
            Prohibited Services You agree that you will not accept payments in
            connection with businesses, business activities or business
            practices, including but limited to the following: Adult goods and
            services which include pornography and other sexually suggestive
            materials (including literature, imagery and other media), escort or
            prostitution services, website access and/or website memberships of
            pornography or illegal sites; Alcohol which includes alcohol or
            alcoholic beverages such as beer, liquor, wine, or champagne etc.;
            Body parts which include organs or other body parts; Bulk marketing
            tools which include email lists, software, or other products
            enabling unsolicited email messages (spam); Cable descramblers and
            black boxes which include devices intended to obtain cable and
            satellite signals for free; Child pornography which includes
            pornographic materials involving minors; Copyright unlocking devices
            which include mod chips or other devices designed to circumvent
            copyright protection; Copyrighted media which includes unauthorized
            copies of books, music, movies, and other licensed or protected
            materials; Copyrighted software which includes unauthorized copies
            of software, video games and other licensed or protected materials,
            including OEM or bundled software; Counterfeit and unauthorized
            goods which include replicas or imitations of designer goods, items
            without a celebrity endorsement that would normally require such an
            association, fake autographs, counterfeit stamps, and other
            potentially unauthorized goods; Drugs and drug paraphernalia which
            include illegal drugs and drug accessories, including herbal drugs
            like marijuana, salvia and magic mushrooms etc.; Drug test
            circumvention aids which include drug cleansing shakes, urine test
            additives, and related items; Endangered species which include
            plants, animals or other organisms (including product derivatives)
            in danger of extinction; Gaming/ gambling which include lottery
            tickets, sports bets, memberships/ enrolment in online gambling
            sites, and related content; Government IDs or documents which
            include fake IDs, passports, diplomas, and noble titles; Hacking and
            cracking materials which include manuals, how-to guides,
            information, or equipment enabling illegal access to software,
            servers, website, or other protected property; Illegal goods which
            include materials, products, or information promoting illegal goods
            or enabling illegal acts; Miracle cures which include
            unsubstantiated cures, remedies or other items marketed as quick
            health fixes; Offensive goods which include literature, products or
            other materials that inter alia : Defame or slander any person or
            groups of people based on race, ethnicity, national origin,
            religion, sex, or other factors; Encourage or incite violent acts;
            or Promote intolerance or hatred. Offensive goods which include
            crime scene photos or items, such as personal belongings, associated
            with criminals; Pyrotechnic devices, combustibles, corrosives and
            hazardous materials which include explosives and related goods,
            toxic, flammable, and radioactive materials and substances;
            Regulated goods which include air bags, batteries containing
            mercury, freon or similar substances/ refrigerants, chemical/
            industrial solvents, government uniforms, car titles, license
            plates, police badges and law enforcement equipment, lock-picking
            devices, pesticides, postage meters, recalled items, slot machines,
            surveillance equipment, goods regulated by government or other
            agency specifications; Securities which include government and/ or
            public sector unit bonds, stocks, debentures or related financial
            products; Tobacco and cigarettes which include cigarettes, cigars,
            chewing tobacco, and related products; Traffic devices which include
            radar detectors/ jammers, license plate covers, traffic signal
            changers, and related products; Weapons which include firearms,
            ammunition, knives, brass knuckles, gun parts, gun powder or
            explosive mixtures and other armaments; Wholesale currency which
            includes discounted currencies or currency exchanges; Live animals
            or hides/ skins/ teeth, nails and other parts etc. of animals;
            Multi-level marketing collection fees; Matrix sites or sites using a
            matrix scheme approach; Work-at-home approach and/ or work-at-home
            information; Drop-shipped merchandise; Any product or service which
            is not in compliance with all applicable laws and regulations
            whether federal, state, local or international, including the laws
            of India; The User providing services that have the potential of
            casting the payment gateway facilitators in a poor light and/ or
            that may be prone to buy and deny attitude of the cardholders when
            billed (e.g. adult material/ mature content/ escort services/ friend
            finders) and thus leading to chargeback and fraud losses; Businesses
            or website that operate within the scope of laws which are not
            absolutely clear or are ambiguous in nature (e.g. web-based
            telephony, website supplying medicines or controlled substances,
            website that promise online match-making); Businesses out rightly
            banned by law (e.g. betting & gambling/ publications or content that
            is likely to be interpreted by the authorities as leading to moral
            turpitude or decadence or incite caste/ communal tensions,
            lotteries/ sweepstakes & games of chance; Businesses dealing in
            intangible goods/ services (e.g. software download/ health/ beauty
            Products), and involved in pyramid marketing schemes or
            get-rich-quick schemes; Any other product or service, which in the
            sole opinion of either the Acquiring Bank, is detrimental to the
            image and interests of either of them/ both of them, as communicated
            by either of them/ both of them to the User from time to time. This
            shall be without prejudice to any other terms & conditions mentioned
            in these Terms of Use; Mailing lists; Virtual currency,
            cryptocurrency, prohibited investments for commercial gain or
            credits that can be monetized, re-sold or converted to physical or
            digital goods or services or otherwise exit the virtual world; Money
            laundering services; Database providers (for tele-callers); Bidding/
            auction houses; Activities prohibited by the Telecom Regulatory
            Authority of India; and Any other activities prohibited by
            applicable law. The above list is subject to additions/ amendments
            (basis changes/ amendments to applicable laws) by vyaparkhata
            without prior intimation to you. Transaction Disputes Transactions
            may be disputed anytime within up to 120 (one hundred twenty) days,
            from the date of transaction by a buyer, as per the Card Payment
            Network Rules. Disputes resolved in favour of a buyer may result in
            reversal of payment to such buyer ("CHARGEBACK"). In the event of
            rejection/ suspension of payments to the seller, chargebacks,
            refunds and/or any other dispute relating to the transactions
            contemplated under these Terms of Use ("DISPUTED TRANSACTION"), on
            any grounds whatsoever, we will forthwith notify the seller of the
            same. On such notification the seller will conduct an internal
            review of such matter and will, within 5 (five) working days from
            receipt of notification, respond to us in writing either: Requesting
            us to refund Refund Request the payment received by the seller in
            respect of such Disputed Transaction Refund Monies; or Providing us
            with a statement explaining how the Disputed Transaction is not
            warranted, together with all documentary evidence in support of
            contesting such Disputed Transaction. All refunds shall be made to
            the original method of payment. In the event that the seller
            provides a Refund Request to us or fails to contest such Disputed
            Transaction within the aforesaid 5 (five) working days or contests
            Disputed Transaction without providing supporting documentation to
            us, payment service providers, Card Payment Network and/ or issuing
            institution's satisfaction, we will be entitled to recover the
            Refund Monies from credits subsequently made to the escrow account
            with respect to payments made by the seller's buyers. In the event
            that we are unable to recover the Refund Monies as aforesaid, due to
            the amounts credited to the escrow account being lower than the
            Refund Monies, vyaparkhata shall be entitled to recover such Refund
            Monies (or any part thereof) from the User by (i) raising a debit
            note in respect of such monies; and/ or (ii) setting-off the
            remaining Refund Monies against the future payables to the seller
            and refund the same to the respective buyers. The seller will be
            liable to make payment of the Refund Monies or part thereof which
            has not been recovered by us forthwith. It is hereby agreed and
            acknowledged by the parties that the Fees charged by us in respect
            of the Disputed Transaction will not be refunded or repaid by us to
            the seller, buyer or any other person. Further, the Chargeback will
            be provided within 1 (one) week of the transaction and maximum
            amount of the Chargeback payable by vyaparkhata to the buyer will be
            the value of the transaction only. Notwithstanding anything to the
            contrary in these Terms, if the Acquirer or the Issuer charges the
            Chargeback Amount to vyaparkhata, then the Client/ You agrees and
            acknowledges that vyaparkhata is entitled to charge such Chargeback
            Amount to the Client/ You by way of deduction from the Transaction
            Amounts to be settled to the Client/ You. Technical Issues &
            Delivery Policy In case of any technical issues, please raise a
            support ticket from your service dashboard. We endeavour to deliver
            Service to you within 15 (fifteen) working days of bank approval,
            failing which you can terminate a transaction related to Service at
            any time and get a full refund. Governing Law, Settlement of
            Disputes and Jurisdiction These Terms of Use and any dispute or
            claim arising under it will be governed by and construed in
            accordance with the laws of India. The Users agree that any legal
            action or proceedings arising out of these Terms of Use or in
            connection with these Terms of Use may be brought EXCLUSIVELY in the
            competent courts/ tribunals having jurisdiction in Bengaluru, India
            and the Users irrevocably submit themselves to the jurisdiction of
            such courts/ tribunals. Privacy YOUR PRIVACY IS EXTREMELY IMPORTANT
            TO US. UPON ACCEPTANCE OF THESE TERMS OF USE YOU CONFIRM THAT YOU
            HAVE READ, UNDERSTOOD AND UNEQUIVOCALLY ACCEPTED OUR POLICIES,
            INCLUDING THE PROVISIONS OF OUR PRIVACY POLICY. You may address any
            complaints or discrepancies in relation to the processing (including
            storing and using) of your Personal Information (including Sensitive
            Personal Information) to: GRIEVANCE OFFICER Mr. HUNNY GOYAL FIN-LOOP
            BUSINESS SOLUTIONS PRIVATE LIMITED ADDRESS: A-114 GULAB BAGH UTTAM
            NAGAR NEW DELHI-110059 E-MAIL: support@vyaparkhata.com GRIEVANCES
            PORTAL: https://vyaparkhata.com/grievances/ complaints and
            Regulatory and Grievance Redressal ANY comPLAINTS OR CONCERNS WITH
            REGARDS TO CONTENT OF THIS WEBSITE OR comMENT OR BREACH OF THESE
            TERMS OF USE OR ANY INTELLECTUAL PROPERTY OF ANY USER, INSTANCES OF
            CUSTOMER GRIEVANCES, REGULATORY QUERIES AND CLARIFICATIONS SHALL BE
            INFORMED/comMUNICATED TO THE NODAL OFFICER AT THE CO-ORDINATES
            MENTIONED BELOW IN WRITING OR BY WAY OF RAISING A GRIEVANCE TICKET
            THROUGH THE HYPERLINK MENTIONED BELOW: SCHEDULE I - PART A PAYMENT
            GATEWAY vyaparkhata's "Payment Gateway" product offers the Client a
            secure payment solution for their Platform and mobile app. It
            enables the Client to receive payments from customers using various
            payment methods during checkout. Client can access real-time data
            and insights on money flow to take informed business decisions.
            SCHEDULE I - PART B SUBSCRIPTIONS vyaparkhata's "Subscriptions"
            product provides the Client the platform to create and manage
            subscription plans for their customers with automated recurring
            transactions. With this product the Client can: Create multiple
            subscription plans for customers; Automatically charge customers
            based on a billing cycle that they control; Get instant alerts on
            payment activity as well as the status of subscriptions. SCHEDULE I
            - PART C PAYMENT LINKS With vyaparkhata's "Payment Links" product,
            the Client is empowered to collect payments from customers through
            securely generated web links. These links are shareable through SMS,
            email, WhatsApp and other social media. SCHEDULE I - PART D PAYMENT
            PAGES vyaparkhata's "Payment Pages" product lets the Client
            instantly build a fully-customizable page through which customers
            can make payments. Clients can easily create a payment page from the
            Dashboard and tie it to their site or app without any development
            effort. Clients can choose one of the templates or create from
            scratch. They can customize the payment form by adding logo and
            applying brand colors. Also, they can format description text, add
            media and enable sharing options. Client can add a pay button on the
            Platform and embed the payment page there. PRIVACY AND DATA
            PROTECTION RIGHTS 1.1 vyaparkhata has adopted reasonable security
            practices and procedures that are commensurate with the information
            assets being protected, and has implemented relevant technical,
            operational, managerial and physical security control measures to
            protect the information in its possession from loss, misuse and
            unauthorized access, disclosure, alteration and destruction. 1.2 In
            the process of providing Magic Checkout Services, vyaparkhata may
            collect and use certain personally identifiable information from
            Customers. vyaparkhata is committed to protect such information and
            to take all reasonable precautions for maintaining confidentiality
            thereof. Please refer to our Privacy Policy, available at
            https://vyaparkhata.com/privacy/ in this regard. 1.3 In addition to
            the above, for the purposes of providing Magic Checkout Services,
            You hereby understand and agree that vyaparkhata shall have the
            right to collect and use personally identifiable information of You/
            the Customer provided by Merchant, including but not limited to
            name, email address, phone number and address, as provided by the
            Customer and/or Merchant to vyaparkhata from time to time directly
            or indirectly (or provided in past). 1.4 The information, as
            referred above, may be used by vyaparkhata for: (i) providing Magic
            Checkout Services (including for the purposes of verification of the
            identity, processing of payment, communication regarding the
            purchase and monitoring of past behavior to identify fraudulent
            transactions); (ii) administrative, marketing and customer support
            purposes; and/or (iii) other vyaparkhata services, including but not
            limited to Shiprocket Sense/Engage. 1.5 Your usage/access of the
            Magic Checkout Services shall constitute your acceptance to the
            terms and conditions as provided in this SOF, the Agreement and the
            Privacy Policy. In the event that You/ the Customer withdraws its
            consent/ acceptance to sharing of their personally identifiable
            information with vyaparkhata, please reach out to vyaparkhata at
            Customers can raise a support ticket on
            https://vyaparkhata.com/support/#request and make a request. I
            HEREBY CONFIRM THAT I HAVE READ THESE TERMS OF USE AND ACCEPT THEM.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  // Cancellation Refund
  function CancellationRefund(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Refunds and cancellation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            UPI Transactions UPI Transactions cannot be cancelled after
            initiating the transaction. If the User has entered the wrong
            number/VPA ID, then the Company is not a liable party in the
            transaction. All UPI transactions are real-time and if there is any
            delay at the end of the transaction then the User can check with the
            support team of vyaparkhata support@vyaparkhata.com after a 30 mins
            cool period. Debit/Credit Card/net banking Transactions If the User
            has any issues related to transactions linked with a Debit/Credit
            card, then the User must report the same to the Company’s call
            centre at 9953252340 or via mail at support@vyaparkhata.com The
            Company will respond and try to resolve the issue in the given
            escalation matrix as per the Company’s internal processes and
            policies. All refunds will be processed by following the validation
            of the transaction from case to case basis in the given legal
            framework The escalation matrix remains the same for the
            Refunds/Cancellation for all the transactions. Refunds will be
            processed within 5-7 working days.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  // Disclaimer Policy
  function DisclaimerPolicy(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Disclaimer Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We keep the Application and Website (together referred to as
            “Platform”) up and running and free of annoyances. But we make no
            promises that we will succeed. THE COMPANY IS PROVIDED “AS IS” AND
            “AS AVAILABLE” BASIS AND TO THE EXTENT PERMITTED BY LAW WITHOUT
            WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT
            NOT LIMITED TO, IMPLIED WARRANTIES FOR A PARTICULAR PURPOSE, TITLE,
            AND NON-INFRINGEMENT. IN ADDITION, WHILE THE COMPANY ATTEMPTS TO
            PROVIDE A GOOD USER EXPERIENCE, WE DO NOT REPRESENT OR WARRANT THAT:
            (A) THE PLATFORM WILL ALWAYS BE SECURE AND ERROR- FREE, (B) THE
            PLATFORM WILL ALWAYS FUNCTION WITHOUT DELAYS, DISRUPTIONS, OR
            IMPERFECTIONS; OR (C) THAT ANY CONTENT, USER CONTENT, OR INFORMATION
            YOU OBTAIN ON OR THROUGH THE PLATFORM WILL BE TIMELY OR ACCURATE.
            YOU UNDERSTAND AND AGREE THAT YOU MAY BE EXPOSED TO CONTENT THAT
            MIGHT BE OFFENSIVE, ILLEGAL, MISLEADING, OR OTHERWISE INAPPROPRIATE,
            NONE OF WHICH THE COMPANY WILL BE RESPONSIBLE FOR. THE COMPANY WILL
            NOT BE RESPONSIBLE FOR ANY DAMAGE SUFFERED BY USERS FROM THE USE OF
            THE PLATFORM PROVIDED ON THE SERVICES AVAILABLE ON THE PLATFORM OR
            THE CONTENT ON THIS PLATFORM. THIS INCLUDES BUT IS NOT LIMITED TO
            LOSS OF REVENUE/DATA RESULTING FROM DELAYS, AS MAY OCCUR BECAUSE OF
            ANY ACT/OMISSION OF PARTIES. THIS DISCLAIMER OF LIABILITY ALSO
            APPLIES TO ANY DAMAGES OR INJURY CAUSED BY ANY FAILURE OF
            PERFORMANCE, ERROR, OMISSION, INTERRUPTION, DELETION, DEFECTS,
            DELAYS IN OPERATION OR TRANSMISSION, COMPUTER VIRUSES, COMMUNICATION
            LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO,
            ALTERATION OF, OR USE OF RECORDS, WHETHER FOR BREACH OF CONTRACT,
            TORTUOUS BEHAVIOUR, NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION.
            THE COMPANY ALSO MAKES IT CLEAR THAT IT SHALL NOT BE HELD LIABLE FOR
            ANY DAMAGE/HURT/INCONVENIENCE CAUSED TO THE USER THROUGH THE COURSE
            OF USAGE OF THE PLATFORM AND/OR CONTENT OR AS A RESULT OF THE USERS’
            ACTIONS. THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES AS TO
            THE CONDUCT OF THE USERS. THE CONTENT ON THE PLATFORM ARE INTENDED
            TO BE SUBJECT TO AVAILABILITY, WITHOUT ANY PROMISES OR GUARANTEES ON
            THE SAME BY THE COMPANY OR BY THE PLATFORM. WHILE CERTAIN
            INFORMATION AVAILABLE ON THE PLATFORM IS THE PROPERTY OF THE COMPANY
            AND THE COMPANY ENDEAVOURS TO KEEP THE SAID INFORMATION UPDATED AND
            ACCURATE, THE COMPANY SHALL NOT MAKE NO REPRESENTATIONS OR
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ABOUT THE COMPLETENESS,
            ACCURACY, RELIABILITY, SUITABILITY OR AVAILABILITY WITH RESPECT TO
            THE PLATFORM OR THE INFORMATION, OR RELATED GRAPHICS CONTAINED ON
            THE PLATFORM FOR ANY PURPOSE. ANY RELIANCE YOU PLACE ON SUCH
            INFORMATION IS, THEREFORE STRICTLY AT YOUR OWN RISK. THE COMPANY
            BEARS NO RESPONSIBILITY WHATSOEVER FOR ANY CONSEQUENCES ARISING FROM
            THE USE OF THE PLATFORM BY USERS. THE USE OF THE PLATFORM IS THE
            SOLE RESPONSIBILITY OF THE USER (OR LEGALLY AUTHORISED PERSON ON
            BEHALF OF THE USER), AND IN CASE OF ANY NEGLIGENCE ON THE PART OF
            THE USER IN ACTING ON THE SAME SHALL NOT BE CONSTRUED AS IMPOSING
            ANY LIABILITY, DIRECT OR INDIRECT, ON THE COMPANY/PLATFORM. THE
            COMPANY SHALL DISCLAIM ALL RESPONSIBILITY AND OWNS NO LIABILITY TO
            USERS FOR ANY OUTCOME (INCIDENTAL, DIRECT, INDIRECT OR OTHERWISE)
            FROM THE USE OF THE PLATFORM. IN NO EVENT WILL THE COMPANY BE LIABLE
            FOR ANY LOSS OR DAMAGE, INCLUDING, WITHOUT LIMITATION, INDIRECT OR
            CONSEQUENTIAL LOSS OR DAMAGE, OR ANY LOSS OR DAMAGE WHATSOEVER
            ARISING FROM LOSS OF DATA OR PROFITS ARISING OUT OF, OR IN
            CONNECTION WITH, THE USE OF THE PLATFORM. THROUGH THIS PLATFORM, YOU
            ARE ABLE TO LINK TO OTHER PLATFORMS WHICH IS NOT UNDER THE
            COMPANY&#39;S CONTROL. WE HAVE NO CONTROL OVER THE NATURE, CONTENT
            AND AVAILABILITY OF THOSE SITES. THE INCLUSION OF ANY LINKS DOES NOT
            NECESSARILY IMPLY A RECOMMENDATION OR ENDORSE THE VIEWS EXPRESSED
            WITHIN THEM. EVERY EFFORT IS MADE TO KEEP THE PLATFORM &amp;
            PLATFORM UP AND RUNNING SMOOTHLY. HOWEVER, THE COMPANY TAKES NO
            RESPONSIBILITY FOR, AND WILL NOT BE LIABLE FOR, THE PLATFORM BEING
            TEMPORARILY UNAVAILABLE DUE TO TECHNICAL ISSUES BEYOND OUR CONTROL.
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY WILL
            HAVE NO LIABILITY RELATED TO USER CONTENT ARISING UNDER INTELLECTUAL
            PROPERTY RIGHTS, LIBEL, PRIVACY, PUBLICITY, OBSCENITY OR OTHER LAWS.
            THE PLATFORM ALSO DISCLAIMS ALL LIABILITY WITH RESPECT TO THE
            MISUSE, LOSS, MODIFICATION OR UNAVAILABILITY OF ANY USER CONTENT.
            THE USER UNDERSTANDS AND AGREES THAT ANY MATERIAL OR DATA DOWNLOADED
            OR OTHERWISE OBTAINED THROUGH THE PLATFORM ARE DONE ENTIRELY AT
            HIS/HER OWN DISCRETION AND RISK, AND HE/SHE WILL BE SOLELY
            RESPONSIBLE FOR ANY DAMAGE TO HIS/HER COMPUTER SYSTEMS OR LOSS OF
            DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL OR DATA.
          </p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  function PortalModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Invoicing Client Portal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An "Invoicing Client Portal" is a secure and user-friendly online
          platform or interface that businesses use to interact with their
          clients for invoicing and related financial transactions. It
          streamlines the invoicing process, provides clients with easy access
          to billing information, and enhances overall communication and
          transparency between businesses and their clients. Here's a breakdown
          of the concept:
          <br />
          <br />
          <strong>1. Invoicing Process:</strong>
          <ul>
            <li>1. Invoicing Process:</li>
            <li></li>
          </ul>
          <strong></strong>
          <ul>
            <li></li>
          </ul>
          <strong></strong>
          <ul>
            <li></li>
          </ul>
          <strong></strong>
          <ul>
            <li></li>
          </ul>
          <strong></strong>
          <ul>
            <li></li>
          </ul>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Terms show={termModal} onHide={() => setTermModal(false)} />
      <CancellationRefund
        show={refundModal}
        onHide={() => setRefundModal(false)}
      />
      <DisclaimerPolicy
        show={disclaimerModal}
        onHide={() => setDisclaimerModal(false)}
      />

      <div className="footer" id="footer">
        <p className="head">Vyapar Khata</p>
        <div className="big">
          <div className="first">
            <img src={img} alt="" />
          </div>

          <div className="second">
            <p style={{ fontSize: "1.8rem", fontWeight: "400" }}>Features</p>
            <p className="dwn">Invoicing Client Portal</p>
            <p className="dwn">Estimate Expenses Bills</p>
            <p className="dwn">Online Payments</p>
            <p className="dwn">Sales Order</p>
            <p className="dwn">E-Invoicing</p>
          </div>

          <div className="third">
            <p style={{ fontSize: "1.8rem", fontWeight: "400" }}>
              Accountant and Partners
            </p>
            <p className="nn">Accountants Find Accountants Become a partner </p>
            <p onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
              {" "}
              Privacy Policy{" "}
            </p>
            <p onClick={() => setTermModal(true)} style={{ cursor: "pointer" }}>
              {" "}
              Terms and Condition{" "}
            </p>
            <p
              onClick={() => setRefundModal(true)}
              style={{ cursor: "pointer" }}
            >
              Cancellation and Refund
            </p>
            <p
              onClick={() => setDisclaimerModal(true)}
              style={{ cursor: "pointer" }}
            >
              Disclaimer Policy
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
              className="mt-3"
            >
              FIN-LOOP BUSINESS SOLUTIONS PRIVATE LIMITED
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
              className="mt-3"
            >
              REG ADD.-A-114 GULAB BAGH UTTAM NAGAR NEW DELHI 110059
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
              className="mt-3"
            >
              Contact us :9289080682
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              Email Address- support@vyaparkhata.com
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              contact@vyaparkhata.com
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              CIN no-U72200DL2022PTC397716
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
