import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="text-white pt-[8rem] pb-[5rem]">
      <div className="wrapper">
        <h1 className="heading-2 font-bold text-center mb-8">Privacy Policy</h1>
        <p className="mb-6">
          Vantus AI Solutions LLP ("we," "our," or "us"), accessible from our
          website, is committed to protecting the privacy of our users and
          visitors. This Privacy Policy outlines the types of information
          collected and recorded by Vantus AI Solutions LLP and how we use it.
        </p>

        <h2 className="text-xl font-semibold mb-1">Consent</h2>
        <p className="mb-6">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2 className="text-xl font-semibold mb-1">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Name, company name, address, email address, and phone number.</li>
          <li>
            Information provided directly through correspondence, including the
            content of messages and attachments.
          </li>
          <li>
            Data required for creating an account, such as username and
            password.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-1">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Operating and maintaining our website.</li>
          <li>
            Improving, personalizing, and expanding our website and its
            features.
          </li>
          <li>
            Understanding user interactions and analyzing website usage trends.
          </li>
          <li>Developing new products, services, and features.</li>
          <li>
            Communicating with users, including responding to inquiries,
            providing updates, and sending marketing material.
          </li>
          <li>Preventing fraud and ensuring secure online activities.</li>
        </ul>

        <h2 className="text-xl font-semibold mb-1">Log Files</h2>
        <p className="mb-6">
          Vantus AI Solutions LLP follows a standard procedure for log files,
          which includes:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Collecting IP addresses, browser types, ISPs, timestamps,
            referring/exit pages, and click data.
          </li>
          <li>
            Using this non-identifiable data for trend analysis, site
            administration, user movement tracking, and demographic insights.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-1">
          Cookies and Tracking Technologies
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Enhance user experience by storing preferences and tailoring
            content.
          </li>
          <li>
            Collect non-identifiable analytics data for optimizing website
            performance.
          </li>
        </ul>
        <p className="mb-6">
          Users may disable cookies via browser settings, although this may
          affect website functionality.
        </p>

        <h2 className="text-xl font-semibold mb-1">Third-Party Services</h2>
        <p className="mb-6">
          We may partner with third-party service providers for:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            Advertising, using technologies such as cookies and web beacons to
            deliver personalized ads.
          </li>
          <li>Analytics and performance tracking.</li>
        </ul>
        <p className="mb-6">
          We are not responsible for the practices of third-party service
          providers and advise consulting their respective privacy policies for
          further details.
        </p>

        <h2 className="text-xl font-semibold mb-1">Data Protection Rights</h2>
        <p className="mb-6">
          Vantus AI Solutions LLP adheres to applicable data protection laws,
          including the following rights:
        </p>
        <h3 className="text-xl font-semibold mb-2">
          Under the Digital Personal Data Protection Act (DPDPA) (India):
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access: Request information about personal data we hold.</li>
          <li>
            Correction: Request rectification of inaccurate or incomplete data.
          </li>
          <li>Deletion: Request removal of personal data.</li>
          <li>
            Processing Opt-Out: Withdraw consent for certain data processing
            activities.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mb-2">
          Under the General Data Protection Regulation (GDPR) (EU):
        </h3>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Right to Access: Obtain copies of your personal data.</li>
          <li>
            Right to Rectification: Correct inaccurate or incomplete
            information.
          </li>
          <li>
            Right to Erasure: Request deletion of personal data under specific
            conditions.
          </li>
          <li>
            Right to Restrict Processing: Request limitations on data
            processing.
          </li>
          <li>
            Right to Object: Object to data processing based on legitimate
            interests.
          </li>
          <li>
            Right to Data Portability: Request transfer of personal data to
            another entity.
          </li>
        </ul>
        <p className="mb-6">
          To exercise these rights, please contact us at [Contact Information].
          Requests will be addressed within one month.
        </p>

        <h2 className="text-xl font-semibold mb-1">Children’s Privacy</h2>
        <p className="mb-6">
          We do not knowingly collect personal information from children under
          the age of 13. If you believe a child has provided personal data on
          our website, contact us immediately, and we will take prompt action to
          remove it.
        </p>

        <h2 className="text-xl font-semibold mb-1">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy periodically. Updates will be posted
          on this page, and we recommend reviewing this page regularly for
          changes. Updates are effective immediately upon posting.
        </p>

        <h2 className="text-xl font-semibold mb-1">Contact Us</h2>
        <p className="mb-6">
          For questions or concerns regarding this Privacy Policy, please
          contact us:{" "}
          <Link to="/contact-us" className="link font-semibold">
            Vantus AI Solutions
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
