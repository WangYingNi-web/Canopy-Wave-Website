"use client";

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function PrivacyPage() {
    useScrollToHash();

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-600 relative overflow-x-hidden">
            <Head>
                <title>Canopy Wave - Privacy Policy</title>
            </Head>
            <Header />
            <div className="bg-[#F9F9F9] py-12 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <section className="px-4 py-8 text-sm">
                        <SlideUp>
                            <h1 className="text-3xl sm:text-4xl font-bold mt-8 mb-10 text-center">Privacy Policy</h1>
                        </SlideUp>
                        <p className="mb-4">Thank you for visiting our webpages.</p>
                        <p className="mb-4">When you visit our pages and use our products, you entrust us with your personal data. We are absolutely committed to treating your personal data with care and respect.</p>
                        <p className="mb-4">This Privacy Policy describes how Canopy Wave collects and uses your personal data in relation to Canopy Wave' websites, services, events, and experiences that reference this Privacy Policy (together, the "Services"). This Privacy Notice also does not apply to any products, services or content that are offered by third parties having their own privacy policies.</p>
                        <p className="mb-4">When you use Canopy Wave AI Services, the controller of the personal data you provide is Canopy Wave Inc., an enterprise incorporated under the laws of the United States, with operation center in 2350 Mission College Blvd, Santa Clara, CA 95054, United States.</p>
                        <p className="mb-4">Both companies in the following referred to as: "Canopy Wave", “us’, “we”, “our”. How to contact us: Canopy Wave Privacy Office: privacy@canopywave.com</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">1. Sources of personal data</h2>
                        <p className="mb-4">Canopy Wave processes personal data provided by data subjects themselves or collected when they use our Services:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Registration information required for registering the Services. When you choose to sign up for our Service through your Google account (or any other third-party account permitted by Canopy Wave), you are also authorizing us to receive, store, and use such information that you have agreed that Google or such other third parties could provide to us through their application programming interface.</li>
                            <li>Information you may provide when you communicate with us by phone, e-mail, or otherwise. Provided you have been duly informed by us, we may monitor and record phone calls, e-mails, live chats, or other communications between you and our Service representatives or other Canopy Wave's representatives, to improve and monitor the quality of our Services.</li>
                            <li>You may provide your information through web forms to be contacted by us or to submit your request or query to us.</li>
                            <li>You may provide us information we need to check your identity as part of our KYC procedures.</li>
                            <li>You may provide information on behalf of another person or entity. If you completed the registration on behalf of another entity or if you otherwise provide information regarding another person or entity, you represent to us that you were authorized by that person or entity to use the submitted information.</li>
                            <li>When you visit or access our Services, upon your consent, we may use (and authorize 3rd parties to use) pixels, cookies and other technologies (collectively, "Cookies").</li>
                        </ul>
                        <h2 className="text-sm font-bold mt-8 mb-4">2. Personal data we process</h2>
                        <p className="mb-4">Canopy Wave processes personal data related to its potential and current customers (individuals or representatives of legal entities), individuals who use the cloud services (users), and users of the Website. The categories of processed personal data include:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Full name</li>
                            <li>Contact information such as email address, phone number</li>
                            <li>Job title</li>
                            <li>Company name</li>
                            <li>Company size</li>
                            <li>Company industry</li>
                            <li>Other information provided by the customer in the registration form</li>
                            <li>Payment and billing details</li>
                            <li>Authentication or authorization data</li>
                            <li>Information contained in support requests</li>
                            <li>Metadata: personal data Canopy Wave collects or generates during the provision and administration of the cloud services, information about user's preference and usage of the Service, including user identifiers, authentication credentials, resource identifiers and attributes, IP-addresses, cloud settings and configurations. We collect information about operational status, software errors and crash reports, quality and performance metrics, and other technical details necessary for us to operate and maintain cloud services and related software.</li>
                            <li>Type and device ID, identifiers from cookies or tokens.</li>
                            <li>Browser type and version.</li>
                            <li>Geographical location based on the IP address.</li>
                            <li>Service access times.</li>
                            <li>Statistics on page views and time spent on pages.</li>
                            <li>Information about usage of the Website obtained through Cookies or similar technologies.</li>
                            <li>Your direct communications. We may keep records of your communications and interactions with us, for example, when you provide feedback or contact information, ask questions or seek technical support.</li>
                            <li>Partially obscured copies of your ID document (when this is requested, only the following field being visible: picture, name and surname, nationality place and type of document, first 4 digits of the document number), in specific cases of our KYC process.</li>
                        </ul>
                        <p className="mb-4">Sensitive personal data: We do not intentionally collect sensitive personal data (for example, information revealing race, ethnic origin, political opinions, religion, etc.) and we ask our users not to provide us with such information.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">3. Why we process your personal data</h2>
                        <p className="mb-4">We only collect and use personal data for the scopes which are necessary in connection with the processing of your request/query, to verify your identity if you contact us, to send you our newsletter, enhance both the performance and the content of our websites, to tailor our services and our websites to our customers' and users' preferences, to analyze trends and to comply with any law in accordance with the applicable legislation, to protect us and our users/customers, from fraud or other illegal activities. More specifically to:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>To provide appropriate feedback to your questions and requests, and/or to fulfill the necessary steps to conclude an agreement with you.</li>
                            <li>To provide our services, specifically to create/update and personalize your account, enabling accessibility features, process payments, perform the necessary operations to deliver and maintain our services, support requests and any other inquiries about our Services, send notifications about changes to our Services and provide information that is relevant to the use of the Services and take the necessary steps to conclude an agreement with you, when applicable;</li>
                            <li>To develop, improve the performance of, and secure our Services.</li>
                            <li>To determine the effectiveness of our promotional campaigns, so that we can better tailor these campaigns to your interests.</li>
                            <li>For analytics, statistical, development and research purposes, including providing our business partners and affiliates with aggregated statistical data.</li>
                        </ul>
                        <p className="mb-4">All this based on our legitimate interest to provide you with a better experience and product and fine tune our offers to your needs. Moreover, we may process your personal data:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>To comply with legal obligations and judicial enforcement and administrative orders, that we or our customers are or may be subject to under any applicable law.</li>
                            <li>To protect and enforce our rights, our privacy and security, as well as our safety, systems and property, or those of other persons we are responsible for, and to resolve disputes.</li>
                            <li>To verify your identity during onboarding as part of our KYC (Know-Your-Customer) checks, to authenticate you as an authorized user of the Services, or to detect and prevent possible frauds.</li>
                            <li>To perform audits and (internal) checks aimed at verifying that our internal processes are indeed operated in compliance with applicable legal, contractual and regulatory requirements.</li>
                            <li>Moreover, we engage in notifications and promotional communications, (marketing): subject to your approval, we may send you notifications, either via email/SMS notification and web notifications or via WhatsApp - messages and other promotional updates about new features, offerings, events and special opportunities or any other information we think our customers and users will find valuable.</li>
                        </ul>
                        <h2 className="text-sm font-bold mt-8 mb-4">4. Your consent when requested by applicable law</h2>
                        <p className="mb-4">Some non-EEA legislations, require your consent for us to process the personal data. Where and when this is the case, please consider that by accessing, viewing and using the websites you consent to the processing of Personal Information as described in this Privacy Notice. You have the right to withdraw your consent at any time, which will not affect the lawfulness of the processing until that time.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">5. To whom we disclose your personal data</h2>
                        <p className="mb-4">We may disclose certain personal data to the following recipients to the extent required or permitted by applicable law and/or based on our legal interests. More specifically:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Third party vendors providing services to us, to facilitate or evaluate our services, such as: ITSM, CRM, ERP, billing and other systems required for administrating Canopy Wave business processes, legal advisers, accountants, suppliers of payment services.</li>
                            <li>Various public authorities, if and exclusively when this is strictly necessary to fulfill our legal obligations and/or to respond to law enforcement orders and requests.</li>
                            <li>Other third parties to enforce our Terms and Conditions and protect our rights, privacy and our properties.</li>
                            <li>If Canopy Wave goes through a business transition, such as a merger, acquisition by another company, or sale of all or a portion of its assets, your personal data may be among the assets transferred and it will be transferred only subject to restrictions similar to those contained herein or as otherwise be required by applicable laws and regulations.</li>
                        </ul>
                        <p className="mb-4">Where we use WhatsApp as a mean of communication for our communications with customers, we will share your Personal data with this provider. Please consider that the Privacy Notice of WhatsApp will apply to this processing activities, we recommend you to get acquainted with it at: <a href="https://www.whatsapp.com/legal/privacy-policy">WhatsApp Privacy Policy</a></p>
                        <p className="mb-4">Upon having obtained your consent, we may share your Personal data with third parties - marketing and analytics vendors, which analyze the activities of our webpage Users, (such as Google LLC providing Google Analytics service). We will never use your data other than described in this Policy except with your prior consent.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">6. Retention of your personal data</h2>
                        <p className="mb-4">We retain your Personal data only for as long as it is necessary to fulfil the scopes described in this Policy. The exact length of time may vary depending on the type of data, the scope of the processing, the category of users involved and -most importantly- whether we are compelled to retain certain Personal Data due to - most frequently and as an example - tax requirements or other legal requirements under applicable law, fraud prevention or safety. When we process the partially obscured copies of your ID, we retain it for a maximum of 18 months, to maintain the necessary records for our yearly audits.</p>
                        <p className="mb-4">Please consider that non-Personal data may be retained and used by Canopy Wave without limitation for archiving purposes, public interest, statistical, historical or scientifical research purposes.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">7. Cookies</h2>
                        <p className="mb-4">We use cookies and similar tracking technologies to track the activity on the Website and store certain information. Cookies – when not necessary for the functioning of the websites- are collected and stored upon your consent.</p>
                        <p className="mb-4">Third party services</p>
                        <p className="mb-4">Certain Services on the Website are managed by third parties. It is possible that these parties use information about your online activity, among others to provide advertisements for products and services which may interest you. Without derogation to the foregoing, you please be aware your activity on the Website may enable third parties, such as online search engines, to rely on the nature of your activity, to present to you adapted advertisements in the framework of your online activities. The activity of these third parties is subject to the privacy policy used by them alone, and is done in their full and exclusive responsibility, without Canopy Wave having any responsibility whatsoever for it. Please consult the privacy policies of these third parties.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">8. Security</h2>
                        <p className="mb-4">Canopy Wave has a team dedicated to ensuring the security of your personal data. We have implemented technical, administrative and physical security measures meant to protect the personal data we process, and we make a point of making sure that these measures are always state-of-the-art and are adequately tested by us. Despite our best efforts, please keep in mind that no security measures are impenetrable, and no website or internet transmission is ever completely secure, and we cannot guarantee (i) that unauthorized access, hacking, data loss, or other breaches shall never occur; and (ii) the security of your data; any transmission is at your own risk.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">9. Children</h2>
                        <p className="mb-4">Our websites and/or services are not intended for use under the age of 18. We do not knowingly process Personal data from anyone under the age of 18. If you are a parent or guardian of someone under that age limit, you may contact us to exercise their rights on their behalf as detailed in this Privacy Notice.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">10. Specific jurisdictions</h2>
                        <p className="mb-4">We provide additional information about the processing of your data to our visitors located in some specific jurisdictions:</p>
                        <h3 className="text-sm font-bold mt-8 mb-4">10.1 US</h3>
                        <p className="mb-4">The information contained under paragraphs 2 and 3 are meant to provide the necessary disclosures and to serve as a Notice at Collection under the California Privacy Rights Act, as are required by the California Consumer Privacy Act, as amended by the California Privacy Rights Act, Colorado Privacy Act, Connecticut Data Privacy Act, Utah Consumer Privacy Act, and Virginia Consumer Data Protection Act, Delaware Privacy Act:</p>
                        <p className="mb-4">Your Rights: You may have certain data rights under state privacy laws, including to request information about the collection of your personal information, to access your personal information in a portable format, and to correct or delete your personal information. If you wish to exercise any of your rights, please contact our Privacy Office at privacy@canopywave.com. Additionally, you have the right to appeal a possible denial of any of these rights by submitting a form that will be provided to you in case of such a denial.</p>
                        <p className="mb-4">To ensure the security of your Canopy Wave account, we will generally ask you to verify your request using the contact information you have already provided. If you are an authorized agent making a request on behalf of a consumer pursuant to applicable state law, we may ask you to provide information verifying you have proper authority to make the request on behalf of the consumer or we may ask the consumer to verify their identity with us directly.</p>
                        <p className="mb-4">We will verify your identity and provide you with an answer within 4 weeks. Please consider that we may need to request additional Personal data to verify your identity and protect us against fraudulent requests. If you perform your request through an authorized agent, we will need a power of attorney or a written permission for you authorizing the agent to perform the request on your behalf.</p>
                        <p className="mb-4">You have the right to be free from unlawful discrimination or retaliation for exercising your rights. We do not sell your personal data (included your personal information) and not engage in profiling.</p>

                        <h3 className="text-sm font-bold mt-8 mb-4">10.2 Canada</h3>
                        <p className="mb-4">Your rights:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>You may request copies of your personal information and information about how it is processed.</li>
                            <li>You may request that inaccurate personal information is corrected.</li>
                            <li>You may request deletion of personal information that is no longer necessary for the purposes underlying the processing, processed based on withdrawn consent, or processed in non-compliance with applicable legal requirements; and</li>
                            <li>You may lodge a complaint about the manner we process your personal information.</li>
                        </ul>
                        <p className="mb-4">When you consent to our processing your personal information for a specified purpose, you may withdraw your consent at any time. You can exercise your rights by contacting us at: privacy@canopywave.com</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">11. Your Rights</h2>
                        <p className="mb-4">As Canopy Wave is subject to the General Data Protection Regulation (GDPR), all our visitors and website users, notwithstanding their location, enjoy the following rights:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>The right to request Canopy Wave to provide you access to, correct or delete your Personal data;</li>
                            <li>The right to request to restrict how Canopy Wave processes your Personal data</li>
                            <li>The right to object to such processing and to withdraw the consent you previously provided.</li>
                            <li>The right to request that Canopy Wave provides you with a machine-readable copy of your Personal data and not to be subject to automated decisions.</li>
                        </ul>
                        <h2 className="text-sm font-bold mt-8 mb-4">12. Updates</h2>
                        <p className="mb-4">Our business is constantly developing and changing, and our Privacy Notice may also change. We may update this Privacy Notice from time to time and publish a new version on our websites. We recommend you keep an eye on possible updates. If we plan any material changes, we will – of course – inform you.</p>
                        <h2 className="text-sm font-bold mt-8 mb-4">13. Questions?</h2>
                        <p className="mb-4">If you have any query or question about this Privacy Notice or about the manner we process Personal data, please contact our Privacy Office at: 2350 Mission College Blvd, Santa Clara, CA 95054, United States: privacy@canopywave.com</p>

                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}