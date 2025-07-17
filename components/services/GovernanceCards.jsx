export default function GovernanceCards() {
    return (
        <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Card 1 - Corporate Governance */}
                    <div className="bg-gray-200 rounded-lg p-6 border-2 border-pink-400 relative min-h-[600px]">
                        <div className="flex items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-purple-800 leading-tight">
                                    Corporate<br />Governance
                                </h2>
                            </div>
                        </div>

                        <div className="text-sm text-gray-800 space-y-4">
                            <p>
                                Strong corporate governance lays the foundation for long-term success and stakeholder confidence.
                            </p>

                            <div>
                                <p className="font-semibold mb-2">• We help organisations build robust governance frameworks that support ethical leadership, transparent decision-making, and accountable performance. Our services include:</p>
                                <ul className="ml-4 space-y-1">
                                    <li>• Board structure and effectiveness assessments</li>
                                    <li>• Governance policy design and implementation</li>
                                    <li>• Compliance with regulatory and shareholder expectations</li>
                                    <li>• ESG integration into governance practices</li>
                                    <li>• Risk management and oversight support</li>
                                </ul>
                            </div>

                            <p>
                                We partner with boards, executives, and governance committees to embed governance best practices tailored to your industry and regulatory environment.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 - Cyber Governance */}
                    <div className="bg-pink-200 rounded-lg p-6 border-2 border-pink-400 relative min-h-[600px]">
                        <div className="flex items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-purple-800 leading-tight">
                                    Cyber<br />Governance
                                </h2>
                            </div>
                        </div>

                        <div className="text-sm text-gray-800 space-y-4">
                            <p>
                                In the digital era, cyber governance is essential to protect value, ensure resilience, and maintain trust.
                            </p>

                            <div>
                                <p className="font-semibold mb-2">• We guide organisations in developing governance structures that support effective cybersecurity oversight and digital risk management. Our approach includes:</p>
                                <ul className="ml-4 space-y-1">
                                    <li>• Cybersecurity governance frameworks aligned with global standards (e.g., NIST, ISO/IEC 27001)</li>
                                    <li>• Board-level cyber risk reporting and oversight support</li>
                                    <li>• Policy development around data privacy, access control, and incident response</li>
                                    <li>• Integration of cybersecurity into enterprise risk management (ERM)</li>
                                    <li>• Culture and awareness programs to strengthen cyber resilience</li>
                                </ul>
                            </div>

                            <p>
                                Cyber governance isn't just an IT concern—it's a boardroom imperative. We help bridge the gap between technical controls and strategic oversight.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 - AI Governance */}
                    <div className="bg-gray-200 rounded-lg p-6 border-2 border-pink-400 relative min-h-[600px]">
                        <div className="flex items-start mb-4">
                            <div>
                                <h2 className="text-xl font-bold text-purple-800 leading-tight">
                                    AI<br />Governance
                                </h2>
                            </div>
                        </div>

                        <div className="text-sm text-gray-800 space-y-4">
                            <p>
                                Responsible AI begins with the right governance structures to ensure fairness, accountability, and compliance.
                            </p>

                            <div>
                                <p className="font-semibold mb-2">• As organisations adopt AI across operations, products, and decision-making, we support responsible innovation through effective AI governance, including:</p>
                                <ul className="ml-4 space-y-1">
                                    <li>• Development of AI ethics principles and governance charters</li>
                                    <li>• AI risk assessment frameworks (bias, transparency, explainability)</li>
                                    <li>• Regulatory compliance (e.g., EU AI Act, U.S. Algorithmic Accountability Act)</li>
                                    <li>• Lifecycle governance from model development to deployment and monitoring</li>
                                    <li>• Cross-functional training for leadership, legal, and technical teams</li>
                                </ul>
                            </div>

                            <p>
                                We help organisations harness AI's potential while managing its risks—safely, ethically, and with public trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}