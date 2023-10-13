/** @format */

import React, { useEffect, useState } from "react";
import Banner from "../Component/Banner/Banner";
import Hero from "../Component/Hero/Hero";
import Navbar from "../Component/Navbar/Navbar";
import img1 from "../Images/Ellipse 33.png";
import img2 from "../Images/Ellipse 34.png";
import img3 from "../Images/Ellipse 35.png";
import img6 from "../Images/image 7.png";
import img7 from "../Images/image 8.png";
import img8 from "../Images/image 9.png";
import img9 from "../Images/image 10.png";
import Footer from "../Component/Footer/Footer";
import AboutUs from "../Component/AboutUs/AboutUs";
import { DescModal } from "../Component/DescModal";

const HomeScreen = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  const endTitle = 'End to End Accounting  '
  const endDesc = "End-to-End Accounting refers to the comprehensive process of recording, summarizing, and reporting financial transactions within an organization from start to finish. It encompasses all aspects of financial management and plays a crucial role in ensuring the accuracy, transparency, and compliance of an organization's financial activities. Here's a detailed breakdown of the content related to end-to-end accounting: <br /> 1. Introduction to Accounting: • Define accounting and its importance in business.
  • Explain the role of accounting in decision-making.
  • Differentiate between financial accounting and managerial accounting.
  2. Accounting Principles and Standards:
  • Discuss generally accepted accounting principles (GAAP) and international
  financial reporting standards (IFRS).
  • Explain how these standards ensure consistency and comparability in financial
  reporting.
  3. The Accounting Cycle:
  • Outline the steps in the accounting cycle, including recording, classifying,
  summarizing, and reporting financial transactions.
  • Provide examples of typical accounting transactions.
  4. Chart of Accounts:
  • Define and create a chart of accounts.
  • Explain the purpose of a chart of accounts in organizing financial data.
  5. Double-Entry Accounting:
  • Explain the double-entry accounting system and how it maintains the balance
  between assets, liabilities, and equity.
  • Provide examples of debit and credit transactions.
  6. Recording Transactions:
  • Describe the process of journalizing and posting transactions.
  • Show how to create journal entries and ledger accounts.
  7. Financial Statements:
  • Discuss the three main financial statements: the income statement, balance
  sheet, and cash flow statement.
  • Explain how these statements provide a snapshot of a company's financial
  performance and position.
  8. Closing the Books:
  • Explain the purpose of closing entries and the closing process.
  • Show how to prepare a post-closing trial balance.
  9. Bank Reconciliation:
  • Describe the process of reconciling bank statements with internal records.
  • Highlight the importance of bank reconciliation in detecting errors and fraud.
  10. Internal Controls:
  • Discuss the significance of internal controls in preventing fraud and ensuring the
  accuracy of financial data.
  • Provide examples of internal control procedures.
  11. Audit and Compliance:
  • Explain the role of internal and external audits in verifying financial information.
  • Discuss regulatory compliance and reporting requirements.
  12. Financial Software and Technology:
  • Introduce accounting software and tools that streamline the accounting process.
  • Discuss the benefits of automation in accounting.
  13. Financial Analysis:
  • Explain how financial ratios and metrics can be used to assess a company's
  financial health.
  • Interpret financial data to make informed business decisions.
  14. Taxation and Reporting:
  • Provide an overview of tax accounting and the importance of accurate tax
  reporting.
  • Explain how accounting data is used for tax compliance.
  15. Emerging Trends in Accounting:
  • Discuss modern accounting trends, such as cloud accounting, blockchain
  technology, and data analytics.
  • Explain how these trends are shaping the future of accounting.
  16. Ethical Considerations:
  • Highlight the ethical responsibilities of accountants and financial professionals.
  • Discuss common ethical dilemmas in accounting.
  17. Case Studies and Practical Applications:
  • Present real-world examples and case studies to illustrate accounting concepts
  and challenges.
  • Provide exercises and scenarios for readers to apply their accounting knowledge.
  18. Conclusion and Future Outlook:
  • Summarize the key takeaways from the content.
  • Discuss the evolving role of accountants in a digital and data-driven world.
  This comprehensive end-to-end accounting covers the fundamental principles, processes, and
  advanced topics necessary for understanding and practicing accounting effectively within an
  organization. It provides a foundation for financial management, reporting, and decisionmaking.
  2. GST Compliance"

  return (
    <>
      <DescModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        desc={desc}
      />
      <Navbar />
      <Hero />
      <Banner />
      {/* <div className="two-sec">
        <img src={img} alt="" />
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic . Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic .
          </p>
          <p className="special">Know more about e-invoicing</p>
        </div>
      </div> */}

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
            <p style={{ color: "rgb(76, 104, 245) ", cursor: "pointer" }}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
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
            <p className="upper">GST treatment for items and contacts </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <p className="upper">E-way bills for consignment</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
      </div>
      <div className="two-sec-new">
        <div className="left">
          <div>
            <img src={img8} alt="" />
          </div>
          <div>
            <p className="upper">E-way bills for consignment</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
            </p>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={img9} alt="" />
          </div>
          <div>
            <p className="upper">On time return filling </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic .
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
