"use client";

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SlideUp from '@/components/slide';
import { useScrollToHash } from '@/hooks/useScrollToHash';

interface ApiEndpointProps {
    title: string;
    method: string;
    endpoint: string;
    description?: string;
    query?: {
        required?: string[];
        optional?: string[];
    };
    body?: {
        required?: {
            name: string;
            description: string;
        }[];
        optional?: {
            name: string;
            description: string;
        }[];
        example?: string;
    };
    reply: string;
}

const ApiEndpoint: React.FC<ApiEndpointProps> = ({
    title,
    method,
    endpoint,
    description,
    query,
    body,
    reply
}) => (
    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 mt-4">
        <div className="text-gray-600">
            <strong className="text-2xl">{title}</strong>
            <div className="mt-2">
                <span className="font-semibold">{method}</span>{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">{endpoint}</code>
            </div>
            {description && <p className="mt-2">{description}</p>}

            {query && (
                <div className="mt-4">
                    <strong>Query Parameters</strong>
                    {query.required && (
                        <div className="mt-2">
                            <div>Required:</div>
                            <ul className="list-disc list-inside pl-4">
                                {query.required.map((param, index) => (
                                    <li key={index}>{param}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {query.optional && (
                        <div className="mt-2">
                            <div>Optional:</div>
                            <ul className="list-disc list-inside pl-4">
                                {query.optional.map((param, index) => (
                                    <li key={index}>{param}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {body && (
                <div className="mt-4">
                    <strong>Request Body</strong>
                    {body.required && (
                        <div className="mt-2">
                            <div>Required:</div>
                            <ul className="list-disc list-inside pl-4">
                                {body.required.map((field, index) => (
                                    <li key={index}>
                                        <strong>{field.name}</strong>: {field.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {body.optional && (
                        <div className="mt-2">
                            <div>Optional:</div>
                            <ul className="list-disc list-inside pl-4">
                                {body.optional.map((field, index) => (
                                    <li key={index}>
                                        <strong>{field.name}</strong>: {field.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {body.example && (
                        <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                            <code suppressHydrationWarning>{body.example}</code>
                        </pre>
                    )}
                </div>
            )}

            <div className="mt-4">
                <strong>Response: </strong>{reply}
            </div>
        </div>
    </div>
);

export default function PlatformPage() {
    useScrollToHash();
    const [sections, setSections] = useState<Record<string, boolean>>({
        'api-key': true,
        'api-call': false,
        'api-endpoints': false
    });

    const toggleSection = (section: string) => {
        setSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };


    const apiEndpoints: ApiEndpointProps[] = [
        {
            title: "List Projects",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/projects",
            description: "Returns the list of names of the projects you have permission to access. Many API calls will require project as a parameter.",
            reply: "Returns a list of project names"
        },
        {
            title: "List Instances",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instances",
            query: {
                required: ["project - Specifies the project"],
                optional: ["region - Specifies the data center"]
            },
            reply: "Returns a list of instances in the specified region. If no region is specified, returns all instances across all regions"
        },
        {
            title: "List Running Instances",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instances/running",
            query: {
                required: [
                    "project - Specifies the project",
                    "region - Specifies the data center"
                ]
            },
            reply: "Returns all active instances for the specified region"
        },
        {
            title: "Get Instance Details",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instances/<instance-id>",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns the details of specified instance"
        },
        {
            title: "Launch Instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instance-operations/launch",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "name", description: "A unique identifier for the instance" },
                    { name: "flavor", description: "Defines the type of instance" },
                    { name: "image", description: "The operating system to be used" },
                    { name: "password", description: "The password for default SSH login" }
                ],
                optional: [
                    { name: "keypair", description: "The key used for SSH access" },
                    { name: "is_monitoring", description: "Enables the monitoring page for the instance" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    name: "your-instance-name",
                    flavor: "your-selected-flavor",
                    image: "your-selected-image",
                    password: "your-password",
                    keypair: "optional-key-name",
                    is_monitoring: true
                }, null, 2)
            },
            reply: "Returns the ID of the new instance"
        },
        {
            title: "Restart Instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instance-operations/restart",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "id", description: "The instance ID" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    id: "your-instance-id"
                }, null, 2)
            },
            reply: "Returns the ID of the restarted instance"
        },
        {
            title: "Terminate Instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instance-operations/terminate",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "id", description: "The instance ID" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    id: "your-instance-id"
                }, null, 2)
            },
            reply: "Returns the ID of the terminated instance"
        },
        {
            title: "List SSH Keys",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ssh-keys",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns a list of SSH keys for the specified region"
        },
        {
            title: "Add SSH Key",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ssh-keys",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "name", description: "Name of the new key" }
                ],
                optional: [
                    { name: "publicKey", description: "Your public key for importing an existing key" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    name: "your-key-name",
                    publicKey: "ssh-rsa AAAAB3NzaC1..." // Optional
                }, null, 2)
            },
            reply: "Returns the public key and private key if no publicKey was provided, otherwise returns the imported public key"
        },
        {
            title: "Delete SSH Key",
            method: "DELETE",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ssh-keys/<key-name>",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns the ID of the deleted SSH key"
        },
        {
            title: "List Shared File Systems",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/file-systems",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns a list of all file systems for the specified region"
        },
        {
            title: "Create Shared File System",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/file-systems",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "name", description: "Name for identification" },
                    { name: "size", description: "Size in GB" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    name: "your-filesystem-name",
                    size: 100
                }, null, 2)
            },
            reply: "Returns the ID of the new file system"
        },
        {
            title: "Delete Shared File System",
            method: "DELETE",
            endpoint: "https://cloud-api.canopywave.io/api/v1/file-systems/<id>",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns the ID of the deleted file system"
        },
        {
            title: "List Volumes",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/volumes",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns a list of all volumes for the specified region"
        },
        {
            title: "Create Volume",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/volumes",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "name", description: "Name for identification" },
                    { name: "type", description: "The type of storage (e.g., 'hdd')" },
                    { name: "size", description: "Size in GB" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    name: "your-volume-name",
                    type: "hdd",
                    size: 100
                }, null, 2)
            },
            reply: "Returns the ID of the new volume"
        },
        {
            title: "Delete Volume",
            method: "DELETE",
            endpoint: "https://cloud-api.canopywave.io/api/v1/volumes/<volume-id>",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns the ID of the deleted volume"
        },
        {
            title: "Get Billing Information",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/billing",
            query: {
                required: ["project - Specifies the project"]
            },
            reply: "Returns billing information including billing number, period, due date, amount, and timestamp"
        }
    ];

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-600 relative overflow-x-hidden">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
                <SlideUp>
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-8">Manage Cloud via API</h1>
                </SlideUp>
                <SlideUp>
                    <p className="text-lg text-gray-600 text-center mb-16">
                        Canopy Wave supports a set of REST API to enable servers to develop management clients or to integrate VMS functionality into users' own custom management infrastructure
                    </p>
                </SlideUp>

                <div className="grid grid-cols-1 gap-8">
                    <section>
                        <button
                            onClick={() => toggleSection('api-key')}
                            className="w-full flex items-center justify-between font-bold text-3xl p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <h3>Obtaining an API Key</h3>
                            <svg
                                className={`w-6 h-6 transform transition-transform ${sections['api-key'] ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sections['api-key'] && (
                            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 mt-4">
                                <p className="text-gray-600">
                                    To manage Canopy Wave Cloud via the API, users must first register for an account at Canopy Wave (https://cloud.canopywave.io),then follow these steps to generate an API key:
                                </p>
                                <ol className="list-decimal list-inside text-gray-600 mt-4">
                                    <li>In the left navigation bar, click on API Keys</li>
                                    <li>Click on New API Key to create a new key</li>
                                    <li>Copy the generated API key for use in future API calls</li>
                                </ol>
                                <img src="/cloud/image.png" alt="Cloud Image" className="w-full h-auto mt-4" />
                                <img src="/cloud/image2.png" alt="Cloud Image2" className="w-full h-auto mt-4" />
                            </div>
                        )}
                    </section>

                    <section>
                        <button
                            onClick={() => toggleSection('api-call')}
                            className="w-full flex items-center justify-between font-bold text-3xl p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <h3>Making an API Call</h3>
                            <svg
                                className={`w-6 h-6 transform transition-transform ${sections['api-call'] ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sections['api-call'] && (
                            <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 mt-4">
                                <div className="text-gray-600">
                                    <p>To make a request to the API, include an HTTP Bearer header with your API key:</p>
                                    <code className="block bg-gray-100 p-2 rounded mt-2">Authorization: Bearer &lt;YOUR-API-KEY&gt;</code>
                                    <p className="mt-4">If the API call is invalid, an error Reply will be returned. For example:</p>
                                    <pre className="bg-gray-100 p-2 rounded mt-2">
                                        <code suppressHydrationWarning>
                                            {JSON.stringify({ error: "<error message>" }, null, 2)}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        )}
                    </section>

                    <section>
                        <button
                            onClick={() => toggleSection('api-endpoints')}
                            className="w-full flex items-center justify-between font-bold text-3xl p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <h3>REST API Endpoints</h3>
                            <svg
                                className={`w-6 h-6 transform transition-transform ${sections['api-endpoints'] ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {sections['api-endpoints'] && (
                            <div className="mt-4">
                                {apiEndpoints.map((endpoint, index) => (
                                    <ApiEndpoint key={index} {...endpoint} />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}