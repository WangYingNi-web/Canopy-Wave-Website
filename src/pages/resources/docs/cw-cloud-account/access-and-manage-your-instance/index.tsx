import Head from 'next/head';
import DocumentLayout from '@/components/DocumentLayout';
import Image from 'next/image';
import ClickableImage from '@/components/ui/ClickableImage'
import { docsLeftNavItems } from '@/components/docs/docsNavigation';

export default function AccessAndManageInstance() {

    const jumpToItems = [
        { id: 'how-to-access', label: 'How to access your instance' },
        { id: 'managing-instance', label: 'Managing your instance' },
    ];

    return (
        <>
            <Head>
                <title>Access and Manage Your Instance - Canopy Wave Documentation</title>
                <meta name="description" content="Learn how to access and manage your GPU instances on Canopy Wave. Complete guide for SSH connections, security groups, and instance management." />
            </Head>

            <DocumentLayout
                title="Access and Manage Your Instance"
                breadcrumb="Access and Manage Your Instance"
                reviewDate="September 25, 2025"
                nextPage={{
                    title: "GPU Cluster Hardware Product Portfolio",
                    href: "/resources/docs/products/canopy-wave-gpu"
                }}
                previousPage={{ title: 'Deploy an instance', href: '/resources/docs/cw-cloud-account/deploy-an-instance' }}
                leftNavItems={docsLeftNavItems}
                jumpToItems={jumpToItems}
                pageTitle="Access and Manage Your Instance - GPU Instance Management"
            >

                <h2 id="how-to-access" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    How to access your instance
                </h2>

                <h3 id="ssh-connection" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    SSH Direct Connection
                </h3>

                <p className="mb-3"><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside mb-6 space-y-2">
                    <li>Navigate to the Instance Details page and copy the Public IP Address.
                        <div className="mt-2">
                            <ClickableImage src="/docs/cw-cloud-account/step1.webp" alt="Navigate to Instance Details" className="w-full max-w-3xl rounded-lg shadow-sm"/>
                        </div>
                    </li>
                    <li>Open a terminal application on your computer (e.g., Terminal on macOS/Linux or Command Prompt/PowerShell on Windows)
                        <div className="mt-2">
                            <ClickableImage src="/docs/cw-cloud-account/step2.webp" alt="Open terminal application" className="w-full max-w-3xl rounded-lg shadow-sm"/>
                        </div>
                    </li>
                    <li>Run the following command, replacing username and &lt;your-instance-ip&gt; with your actual credentials:
                        <div className="bg-gray-100 p-4 rounded-lg mt-2 mb-2">
                            <code className="text-sm">
                                ssh username@&lt;your-instance-ip&gt;
                            </code>
                        </div>
                        <div className="mt-2">
                            <ClickableImage src="/docs/cw-cloud-account/step3.webp" alt="SSH connection command" className="w-full max-w-3xl rounded-lg shadow-sm"/>
                        </div>
                    </li>
                    <li>When prompted, enter the password you configured during the instance creation process</li>
                </ol>

                <h2 id="managing-instance" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
                    Managing Your Instance
                </h2>

                <p className="mb-6">
                    From the instance management interface, you can perform the following actions:
                </p>

                <h3 id="edit-security-group" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Edit Security Group:
                </h3>
                <p className="mb-6">
                    Manage the firewall rules that control network access to your instance.
                </p>

                <h3 id="reboot" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Reboot:
                </h3>
                <p className="mb-6">
                    Restarts your instance. This action is similar to restarting a physical computer and is useful for applying updates or resolving system issues.
                </p>

                <h3 id="terminate" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Terminate:
                </h3>
                <p className="mb-4">
                    Permanently deletes your instance.
                </p>
                
                <h3 id="console" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Warning:
                </h3>
                <p className="mb-6">
                    This action is irreversible. All data, configurations, and the associated public IP address will be permanently lost. Proceed with extreme caution.
                </p>
                <h3 id="console" className="text-l font-semibold text-gray-900 mb-3 mt-6">
                    Console:
                </h3>
                <p className="mb-6">
                    Access the instance's virtual console directly through your web browser. This is useful for troubleshooting network or boot issues when SSH is unavailable.
                </p>

            </DocumentLayout>
        </>
    );
}