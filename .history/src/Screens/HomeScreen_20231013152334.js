/** @format */

import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner/Banner";
import Hero from "../Component/Hero/Hero";
import Navbar from "../Component/Navbar/Navbar";
import img1 from "../Images/Ellipse 33.png";
import img2 from "../Images/Ellipse 34.png";
import img3 from "../Images/Ellipse 35.png";
import img6 from "../Images/image 7.png";
import Footer from "../Component/Footer/Footer";
import AboutUs from "../Component/AboutUs/AboutUs";
import { Modal } from "react-bootstrap";

const HomeScreen = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [gstShow, setGstShow] = useState(false);
  const [intShow, setIntShow] = useState(false);
  const [ contractModal , setContractModal] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function EndModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            End to End Accounting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>"End-to-End Accounting" </strong>refers to the comprehensive
          process of recording, summarizing, and reporting financial
          transactions within an organization from start to finish. It
          encompasses all aspects of financial management and plays a crucial
          role in ensuring the accuracy, transparency, and compliance of an
          organization's financial activities. Here's a detailed breakdown of
          the content related to end-to-end accounting
          <br />
          <br />
          <strong>1. Introduction to Accounting:</strong>
          <ul>
            <li> Define accounting and its importance in business.</li>
            <li> Explain the role of accounting in decision-making. </li>
            <li>
              {" "}
              Differentiate between financial accounting and managerial
              accounting.
            </li>
          </ul>
          <strong>2. Accounting Principles and Standards:</strong>
          <ul>
            <li>
              {" "}
              Discuss generally accepted accounting principles (GAAP) and
              international financial reporting standards (IFRS).
            </li>
            <li>
              {" "}
              Explain how these standards ensure consistency and comparability
              in financial reporting.{" "}
            </li>
          </ul>
          <strong>3. The Accounting Cycle:</strong>
          <ul>
            <li>
              Outline the steps in the accounting cycle, including recording,
              classifying, summarizing, and reporting financial transactions.
            </li>
            <li>Provide examples of typical accounting transactions.</li>
          </ul>
          <strong>4. Chart of Accounts:</strong>
          <ul>
            <li> Define and create a chart of accounts.</li>
            <li>
              Explain the purpose of a chart of accounts in organizing financial
              data.
            </li>
          </ul>
          <strong>5. Double-Entry Accounting:</strong>
          <ul>
            <li>
              Explain the double-entry accounting system and how it maintains
              the balance between assets, liabilities, and equity.
            </li>
            <li> Provide examples of debit and credit transactions</li>
          </ul>
          <strong>6. Recording Transactions:</strong>
          <ul>
            <li>
              Describe the process of journalizing and posting transactions
            </li>
            <li>Show how to create journal entries and ledger accounts.</li>
          </ul>
          <strong>7. Financial Statements</strong>
          <ul>
            <li>
              Discuss the three main financial statements: the income statement,
              balance sheet, and cash flow statement.
            </li>
            <li>
              {" "}
              Explain how these statements provide a snapshot of a company's
              financial performance and position
            </li>
          </ul>
          <strong>8. Closing the Books:</strong>
          <ul>
            <li>
              Explain the purpose of closing entries and the closing process.
            </li>
            <li>Show how to prepare a post-closing trial balance.</li>
          </ul>
          <strong>9. Bank Reconciliation:</strong>
          <ul>
            <li>
              Describe the process of reconciling bank statements with internal
              records.
            </li>
            <li>
              {" "}
              Highlight the importance of bank reconciliation in detecting
              errors and fraud.
            </li>
          </ul>
          <strong>10. Internal Controls:</strong>
          <ul>
            <li>
              Discuss the significance of internal controls in preventing fraud
              and ensuring the accuracy of financial data
            </li>
            <li>Provide examples of internal control procedures.</li>
          </ul>
          <strong>11. Audit and Compliance:</strong>
          <ul>
            <li>
              Explain the role of internal and external audits in verifying
              financial information.
            </li>
            <li> Discuss regulatory compliance and reporting requirements.</li>
          </ul>
          <strong>12. Financial Software and Technology:</strong>
          <ul>
            <li>
              Introduce accounting software and tools that streamline the
              accounting process.
            </li>
            <li> Discuss the benefits of automation in accounting.</li>
          </ul>
          <strong>13. Financial Analysis:</strong>
          <ul>
            <li>
              Explain how financial ratios and metrics can be used to assess a
              company's financial health.
            </li>
            <li>
              Interpret financial data to make informed business decisions
            </li>
          </ul>
          <strong>14. Taxation and Reporting:</strong>
          <ul>
            <li>
              Provide an overview of tax accounting and the importance of
              accurate tax reporting.
            </li>
            <li>Explain how accounting data is used for tax compliance.</li>
          </ul>
          <strong>15. Emerging Trends in Accounting:</strong>
          <ul>
            <li>
              Discuss modern accounting trends, such as cloud accounting,
              blockchain technology, and data analytics
            </li>
            <li>
              Explain how these trends are shaping the future of accounting.
            </li>
          </ul>
          <strong>16. Ethical Considerations:</strong>
          <ul>
            <li>
              Highlight the ethical responsibilities of accountants and
              financial professionals
            </li>
            <li>Discuss common ethical dilemmas in accounting.</li>
          </ul>
          <strong>17. Case Studies and Practical Applications:</strong>
          <ul>
            <li>
              Present real-world examples and case studies to illustrate
              accounting concepts and challenges.
            </li>
            <li>
              Provide exercises and scenarios for readers to apply their
              accounting knowledge.
            </li>
          </ul>
          <strong>18. Conclusion and Future Outlook:</strong>
          <ul>
            <li>Summarize the key takeaways from the content</li>
            <li>
              Discuss the evolving role of accountants in a digital and
              data-driven world.
            </li>
          </ul>
          This comprehensive end-to-end accounting covers the fundamental
          principles, processes, and advanced topics necessary for understanding
          and practicing accounting effectively within an organization. It
          provides a foundation for financial management, reporting, and
          decisionmaking.
        </Modal.Body>
      </Modal>
    );
  }

  function GstModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            GST Compliance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          GST (Goods and Services Tax) compliance services refer to the range of
          services provided by professionals or organizations to help businesses
          comply with the GST regulations and requirements in their respective
          countries. GST is a value-added tax that is levied on the supply of
          goods and services, and its compliance involves various activities to
          ensure that businesses meet their tax obligations accurately and on
          time.
        </Modal.Body>
      </Modal>
    );
  }

  function IntegratedModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Integrated Platform
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An "integrated platform" typically refers to a unified software or
          technology solution that combines multiple functionalities or tools
          into a single cohesive system. These integrated platforms are designed
          to streamline processes, improve efficiency, and enhance communication
          within an organization or across various business functions. Here's a
          breakdown of the content related to integrated platforms:
          <br />
          <br />
          <strong>1. Introduction to Integrated Platforms:</strong>
          <ul>
            <li>
              {" "}
              Define what an integrated platform is and why it's essential in
              modern business environments.
            </li>
            <li>
              {" "}
              Explain how integrated platforms address the challenges of using
              multiple disparate systems{" "}
            </li>
          </ul>
          <strong>2. Key Components of an Integrated Platform:</strong>
          <ul>
            <li>
              Describe the core elements typically found in an integrated
              platform, such as data management, analytics, communication tools,
              and automation capabilities
            </li>
            <li>
              Discuss how these components work together to provide a seamless
              experience.
            </li>
          </ul>
          <strong>3. Benefits of Integrated Platforms:</strong>
          <ul>
            <li>
              Highlight the advantages of using an integrated platform,
              including increased efficiency, reduced data silos, improved
              decision-making, and cost savings.
            </li>
            <li>
              Provide real-world examples of businesses that have benefited from
              integrated platforms.
            </li>
          </ul>
          <strong>4. Use Cases and Applications: :</strong>
          <ul>
            <li>
              {" "}
              Explore various industries and sectors where integrated platforms
              are commonly used, such as finance, healthcare, manufacturing, and
              e-commerce.
            </li>
            <li>
              Discuss specific use cases, such as customer relationship
              management (CRM), enterprise resource planning (ERP), and project
              management.
            </li>
          </ul>
          <strong>5. Types of Integrated Platforms:</strong>
          <ul>
            <li>
              Differentiate between industry-specific integrated platforms and
              general-purpose platforms.
            </li>
            <li>
              {" "}
              Provide examples of well-known integrated platform solutions in
              different domains.
            </li>
          </ul>
          <strong>6. Implementation and Integration Challenges:</strong>
          <ul>
            <li>
              Discuss common challenges organizations face when implementing
              integrated platforms, such as data migration, compatibility
              issues, and user adoption.
            </li>
            <li>Offer strategies for overcoming these challenges</li>
          </ul>
          <strong>7. Data Management and Security:</strong>
          <ul>
            <li>
              Explain how integrated platforms handle data storage, access
              control, and data security
            </li>
            <li>
              {" "}
              Emphasize the importance of data protection and compliance with
              regulations like GDPR
            </li>
          </ul>
          <strong>8. Customization and Scalability</strong>
          <ul>
            <li>
              Discuss the ability to customize integrated platforms to meet
              specific business needs.
            </li>
            <li>
              Explain how integrated platforms can scale with a growing
              organization.
            </li>
          </ul>
          <strong>9. User Experience and Interface Design:</strong>
          <ul>
            <li>
              Describe the importance of a user-friendly interface in maximizing
              the usability and effectiveness of an integrated platform.
            </li>
            <li>Provide examples of good interface design principles.</li>
          </ul>
          <strong>10. Integration with External Systems:</strong>
          <ul>
            <li>
              - Explore how integrated platforms can connect with external
              systems, such as third-party applications, APIs, and cloud
              services. - Discuss the advantages of seamless integration for
              data flow and process automation.
            </li>
          </ul>
          <strong>11. Case Studies and Success Stories:</strong>
          <ul>
            <li>
              Share real-world case studies of organizations that have
              successfully implemented integrated platforms to achieve specific
              business goals. - Highlight the results and benefits they have
              achieved
            </li>
          </ul>
          <strong>12. Future Trends and Innovations:</strong>
          <ul>
            <li>
              - Discuss emerging trends in integrated platforms, such as
              artificial intelligence (AI) and machine learning (ML)
              integration, blockchain technology, and the Internet of Things
              (IoT). - Predict how these innovations will shape the future of
              integrated platforms.
            </li>
          </ul>
          <strong>
            13. Considerations for Choosing an Integrated Platform :
          </strong>
          <ul>
            <li>
              Provide a checklist of factors that organizations should consider
              when evaluating and selecting an integrated platform.
            </li>
          </ul>
          <strong>14. Conclusion:</strong>
          <ul>
            <li>
              Summarize the key takeaways and benefits of using an integrated
              platform. - Encourage businesses to embrace integrated platforms
              as a strategic tool for growth and efficiency in the digital age
            </li>
          </ul>
          integrated platforms provides a comprehensive understanding of their
          importance, functionalities, benefits, challenges, and future
          prospects in the context of modern business operations. It serves as a
          valuable resource for businesses seeking to optimize their processes
          and technology infrastructure.
        </Modal.Body>
      </Modal>
    );
  }

  function ContractsModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            GST Treatment for Items and Contracts
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The term "GST treatment for items and contacts" typically refers to
          how Goods and Services Tax (GST) is applied to both goods and services
          (items) and the individuals or businesses (contacts) involved in
          transactions subject to GST. GST treatment can vary depending on the
          jurisdiction and the specific circumstances of the transaction. Here's
          a breakdown of the concept:
          <br />
          <br />
          <strong>1. GST Treatment for Items (Goods and Services):</strong>
          <ul>
            <li>
              Taxable vs. Non-Taxable Items: Explain which goods and services
              are subject to GST and which ones are exempt or non-taxable. This
              may include standard-rated, zero-rated, or exempt items.
            </li>
            <li>
              GST Rates: Discuss the different GST rates that may apply to
              various items. Some items may be taxed at a standard rate, while
              others may have reduced rates or zero rates.
            </li>

            <li>
              Input Tax Credit (ITC): Explain how businesses can claim input tax
              credit on GST paid for items used in the course of their business,
              effectively reducing their tax liability
            </li>
            <li>
              Thresholds and Registration: Discuss any thresholds for GST
              registration, where businesses may be required to register for GST
              based on their annual turnover.
            </li>
          </ul>
          <strong>
            2. GST Treatment for Contacts (Individuals or Businesses):
          </strong>
          <ul>
            <li>
              GST Registration: Explain when individuals or businesses need to
              register for GST, which typically depends on their annual turnover
              or sales revenue.
            </li>
            <li>
              GSTIN (GST Identification Number): Describe how individuals and
              businesses receive a unique GSTIN upon registration, which is used
              for tax compliance and reporting.
            </li>
            <li>
              Collecting GST: Explain the responsibilities of businesses in
              collecting GST from their customers (contacts) when selling
              taxable goods or services.
            </li>
            <li>
              Reverse Charge Mechanism: Discuss situations where the recipient
              of goods or services is responsible for remitting GST to tax
              authorities (reverse charge mechanism).
            </li>
            <li>
              GST Returns: Describe the process of filing GST returns by
              registered businesses, which involves reporting sales, purchases,
              and tax payments
            </li>
            <li>
              Compliance and Penalties: Highlight the importance of GST
              compliance for contacts and the potential penalties for
              non-compliance.
            </li>
            <li>
              Exemptions and Special Provisions: Mention any exemptions or
              special provisions that may apply to certain categories of
              contacts, such as small businesses or specific industries
            </li>
          </ul>
          <strong>3. Record Keeping and Documentation:</strong>
          <ul>
            <li>
              Emphasize the importance of maintaining accurate records and
              documentation related to GST transactions for both items and
              contacts
            </li>
            <li>
              Explain the types of records that businesses need to keep,
              including invoices, receipts, and GST returns.
            </li>
          </ul>
          <strong>4. Impact on Pricing and Cost Management:</strong>
          <ul>
            <li>
              Discuss how GST treatment can affect the pricing of items and
              services, as businesses may need to factor in GST when setting
              prices.
            </li>
            <li>
              Explain how businesses need to manage their costs, including input
              tax credits, to minimize the impact of GST on their profitability.
            </li>
          </ul>
          <strong>5. Compliance Challenges and Considerations:</strong>
          <ul>
            <li>
              Address common challenges faced by businesses and individuals in
              complying with GST regulations, such as complex tax rules, changes
              in rates, and cross-border transactions.
            </li>
            <li>
              Provide guidance on how to navigate these challenges and stay
              compliant.
            </li>
          </ul>
          <strong>6. Future Developments and Changes:</strong>
          <ul>
            <li>
              Mention that GST regulations can change over time, and individuals
              and businesses need to stay informed about updates and amendments
              in tax laws.
            </li>
          </ul>
          <strong>7. Conclusion:</strong>
          <ul>
            <li>
              Summarize the key points related to GST treatment for items and
              contacts.
            </li>
            <li>
              Stress the importance of understanding and adhering to GST
              regulations to ensure proper tax compliance and avoid penalties.
            </li>
          </ul>
          This is an overview of the GST treatment for both items (goods and
          services) and contacts (individuals or businesses) and serves as a
          reference for understanding the implications of GST in various
          transactions and financial activities. It can be particularly helpful
          for businesses and individuals navigating the complexities of GST in
          their respective jurisdictions.
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <EndModal show={modalShow} onHide={() => setModalShow(false)} />
      <GstModal show={gstShow} onHide={() => setGstShow(false)} />
      <IntegratedModal show={intShow} onHide={() => setIntShow(false)} />
      <ContractsModal show={contractModal} onHide={() => setContractModal(false)} />
      <Navbar />
      <Hero />
      <Banner />
      <AboutUs />

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "1%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Why choose us
      </p>

      <div className="elipse">
        <div>
          <img
            src={img1}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            End to end accounting
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            End-to-End Accounting" refers to the comprehensive process of
            recording, summarizing...{" "}
            <p
              style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
              onClick={() => setModalShow(true)}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
          </p>
        </div>
        <div>
          <img
            src={img2}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            GST compliance
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            GST (Goods and Services Tax) compliance services refer to the range
            of services...{" "}
            <p
              style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
              onClick={() => setGstShow(true)}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
          </p>
        </div>
        <div>
          <img
            src={img3}
            alt=""
            style={{ width: "100px", marginTop: "10px", marginLeft: "20px" }}
          />
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Integrated platform
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "300",
              textAlign: "center",
              padding: "10px",
            }}
          >
            An "integrated platform" typically refers to a unified software or
            technology...
            <p
              style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
              onClick={() => setIntShow(true)}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </p>
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginTop: "3%",
          fontWeight: "400",
          marginBottom: "1%",
        }}
      >
        Here’s how we keep your business GST compliant
      </p>

      <div className="two-sec-new">
        <div className="left">
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <p className="upper"> GST Treatment for Items and Contracts</p>
            <p>
              The term "GST treatment for items and contacts" typically refers
              to how Goods and Services Tax (GST) is applied to both goods and
              services (items) and the individuals or businesses (contacts)
              involved in transactions subject to GST. GST treatment can vary
              depending on the jurisdiction and the specific circumstances of
              the transaction. Here's a breakdown of the concept:{" "}
              <p
                style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
                onClick={() => setContractModal(true)}
              >
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </p>
            </p>
          </div>
        </div>
      </div>


      <div className="newBan">
        <p>SWITCH TO SMART ACCOUNTING SOFTWARE . SWITCH TO ACCCOUNTING </p>
        <div>
          <button>Start my free trial </button>
          <button>Explore Demo Account </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomeScreen;
