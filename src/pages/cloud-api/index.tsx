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
    reply: string;
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
        requiredExample?: string;
        optionalExample?: string;
    };
}

const ApiEndpoint: React.FC<ApiEndpointProps> = ({
    title,
    method,
    endpoint,
    description,
    query,
    reply,
    body
}) => (
    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300 mt-4">
        <div className="text-gray-600">
            <strong className="text-l">{title}</strong>
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

            {method === 'GET' && <div className='mt-4'>
                <div className="mt-4">
                    <strong>Response: </strong>{reply}
                </div>
            </div>}

            {body && (
                <div className="mt-4">
                    
                    
                    <div className='mt-4'>{method === 'POST' && <strong>Body</strong>}</div>
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
                    {body.example && (
                        <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                            <code suppressHydrationWarning>{body.example}</code>
                        </pre>
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
                    {body.optionalExample && (
                        <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                            <code suppressHydrationWarning>{body.optionalExample}</code>
                        </pre>
                    )}
                    {method === 'POST' && <div className='mt-4'>
                        <div className="mt-4">
                            <strong>Response: </strong>{reply}
                        </div>
                    </div>}
                    {body.requiredExample && method.toUpperCase() === 'POST' && (
                        <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
                            <code suppressHydrationWarning>{body.requiredExample}</code>
                        </pre>
                    )}
                </div>
            )}

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
            title: "List projects",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/projects",
            reply: `This will return the list of names of the projects you have permission to access. Many API calls will require project as a parameter`,
            body: {
                example: `${JSON.stringify({
                    "data": [
                        "andrew.li@canopywave.com",
                        "cynthia@canopywave.com"
                    ]
                }, null, 2)}`,
            },
        },
        {
            title: "List Instances",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instances",
            query: {
                required: ["project - Specifies the project"],
                optional: ["region - Specifies the data center"]
            },
            reply: "Returns a list of instances in the specified region. If no region is specified, returns all instances across all regions",
            body: {
                example: `${JSON.stringify({
                    "data": [
                        {
                            "flavor": "2x H100 (80 GB SXM5)",
                            "id": "9bc56d2b-411b-47c3-b93a-691c3931009c",
                            "launchedAt": "2025-05-24T01:17:09.000000",
                            "name": "cynthia-2",
                            "paymentMode": null,
                            "publicIp": null,
                            "region": "sequoia",
                            "role": "worker",
                            "status": "active"
                        },
                        {
                            "flavor": "16 vCPU x86 Server",
                            "id": "36346e91-90db-4c38-97cd-bf94e4a138ce",
                            "launchedAt": "2025-05-24T00:45:10.000000",
                            "name": "cynthia-test-snapshot",
                            "paymentMode": null,
                            "publicIp": null,
                            "region": "sequoia",
                            "role": "worker",
                            "status": "active"
                        },
                        {
                            "flavor": "4x H100 (80 GB SXM5)",
                            "id": "730dcf5a-bada-45f3-9a32-e8657cf7b200",
                            "launchedAt": null,
                            "name": "cynthia-4",
                            "paymentMode": null,
                            "publicIp": null,
                            "region": "sequoia",
                            "role": "worker",
                            "status": "error"
                        }
                    ]
                }, null, 2)}`,
            },
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
            reply: "Returns all active instances for the specified region",
            body: {
                example: `${JSON.stringify({
                    "data": [
                        {
                            "flavor": "2x H100 (80 GB SXM5)",
                            "id": "9bc56d2b-411b-47c3-b93a-691c3931009c",
                            "launchedAt": "2025-05-24T01:17:09.000000",
                            "name": "cynthia-2",
                            "paymentMode": null,
                            "publicIp": "213.181.122.171",
                            "region": "sequoia",
                            "role": "worker",
                            "status": "active"
                        },
                        {
                            "flavor": "16 vCPU x86 Server",
                            "id": "36346e91-90db-4c38-97cd-bf94e4a138ce",
                            "launchedAt": "2025-05-24T00:45:10.000000",
                            "name": "cynthia-test-snapshot",
                            "paymentMode": null,
                            "publicIp": null,
                            "region": "sequoia",
                            "role": "worker",
                            "status": "active"
                        }
                    ]
                }, null, 2)}`,
            },
        },
        {
            title: "List details of specified instance",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instances/<instance-id>",
            query: {
                required: [
                    "region - Specifies the data center",
                    "project - Specifies the project"
                ]
            },
            reply: "Returns the details of specified instance",
            body: {
                example: `${JSON.stringify({
                    "data": {
                        "OS-DCF:diskConfig": "MANUAL",
                        "OS-EXT-AZ:availability_zone": "nova",
                        "OS-EXT-SRV-ATTR:host": "h1-31-gpu",
                        "OS-EXT-SRV-ATTR:hypervisor_hostname": "h1-31-gpu",
                        "OS-EXT-SRV-ATTR:instance_name": "instance-00001bc9",
                        "OS-EXT-STS:power_state": 1,
                        "OS-EXT-STS:task_state": null,
                        "OS-EXT-STS:vm_state": "active",
                        "OS-SRV-USG:launched_at": "2025-05-24T01:17:09.000000",
                        "OS-SRV-USG:terminated_at": null,
                        "accessIPv4": "",
                        "accessIPv6": "",
                        "addresses": {
                            "cynthia_canopywave_com-network": [
                                {
                                    "OS-EXT-IPS-MAC:mac_addr": "fa:16:3e:9d:aa:19",
                                    "OS-EXT-IPS:type": "fixed",
                                    "addr": "172.16.0.252",
                                    "version": 4
                                }
                            ]
                        },
                        "config_drive": "",
                        "created": "2025-05-24T01:15:50Z",
                        "flavor": {
                            "id": "7c7f97b0-b80f-44dc-859d-71e04834b1cc",
                            "links": [
                                {
                                    "href": "http://213.181.122.220:8774/flavors/7c7f97b0-b80f-44dc-859d-71e04834b1cc",
                                    "rel": "bookmark"
                                }
                            ]
                        },
                        "hostid": "421e003d15a3a862186597aae14c6e19d0ec66ffe8093222f71b59c5",
                        "id": "9bc56d2b-411b-47c3-b93a-691c3931009c",
                        "image": {
                            "id": "66d16f9e-f984-4738-a170-97457ecfe4b6",
                            "links": [
                                {
                                    "href": "http://213.181.122.220:8774/images/66d16f9e-f984-4738-a170-97457ecfe4b6",
                                    "rel": "bookmark"
                                }
                            ]
                        },
                        "key_name": null,
                        "links": [
                            {
                                "href": "http://213.181.122.220:8774/v2.1/servers/9bc56d2b-411b-47c3-b93a-691c3931009c",
                                "rel": "self"
                            },
                            {
                                "href": "http://213.181.122.220:8774/servers/9bc56d2b-411b-47c3-b93a-691c3931009c",
                                "rel": "bookmark"
                            }
                        ],
                        "metadata": {},
                        "name": "cynthia-2",
                        "os-extended-volumes:volumes_attached": [],
                        "progress": 0,
                        "security_groups": [
                            {
                                "name": "ssh"
                            },
                            {
                                "name": "default"
                            },
                            {
                                "name": "monitoring"
                            }
                        ],
                        "status": "ACTIVE",
                        "tenant_id": "a6a0dcd9c8764726b4ede6569fc26568",
                        "updated": "2025-05-24T01:17:09Z",
                        "user_id": "b7ef9befa66d456b866fa09603694b4a"
                    }
                }, null, 2)}`,
            },
        },
        {
            title: "List images",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/images",
            reply: `Return all OS images that are available for the instance`,
            body: {
                example: `${JSON.stringify({
                    "data": [
                        "CPU-Ubuntu.22.04",
                        "GPU-Ubuntu.24.04",
                        "GPU-Ubuntu.22.04",
                        "CPU-Ubuntu.24.04"
                    ]
                }, null, 2)}`,
            },
        },
        {
            title: "List instance Types",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/images",
            reply: `Returns a list of all available instance types`,
            body: {
                example: `${JSON.stringify({
                    "data": [
                        {
                            "flavor": "H100-4",
                            "images": [
                                "GPU-Ubuntu.22.04",
                                "GPU-Ubuntu.24.04"
                            ],
                            "name": "4x H100 (80 GB SXM5)",
                            "price": 900,
                            "priceHour": "$2.25 / gpu / hour",
                            "specs": "80 cores, 800.0 GB RAM, 2 TB NVMe"
                        },
                        {
                            "flavor": "H100-8",
                            "images": [
                                "GPU-Ubuntu.22.04",
                                "GPU-Ubuntu.24.04"
                            ],
                            "name": "8x H100 (80 GB SXM5)",
                            "price": 1800,
                            "priceHour": "$2.25 / gpu / hour",
                            "specs": "160 cores, 1536.0 GB RAM, 17 TB NVMe"
                        },
                        {
                            "flavor": "m1.advanced",
                            "images": [
                                "CPU-Ubuntu.22.04",
                                "CPU-Ubuntu.24.04"
                            ],
                            "name": "16 vCPU x86 Server",
                            "price": 56,
                            "priceHour": "$0.035 / cpu / hour",
                            "specs": "16 cores, 32.0 GB RAM, 500 GB SSD"
                        },
                        {
                            "flavor": "H200-8",
                            "images": [
                                "GPU-Ubuntu.22.04",
                                "GPU-Ubuntu.24.04"
                            ],
                            "name": "8x H200 (80 GB SXM5)",
                            "price": 1800,
                            "priceHour": "$3.00 / gpu / hour",
                            "specs": "160 cores, 1536.0 GB RAM, 17 TB NVMe"
                        }
                    ]
                }, null, 2)}`,
            },
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
                example: JSON.stringify({
                    "region": "your-region",
                    "project": "your-project",
                    "name": "your-instance-name",
                    "flavor": "your-selected-flavor",
                    "image": "your-selected-image",
                    "password": "your-password"
                }, null, 2),
                optional: [
                    { name: "keypair", description: "The key used for SSH access" },
                    { name: "is_monitoring", description: "Enables the monitoring page for the instance" }
                ],
                optionalExample: JSON.stringify({
                    "keypair": "your-key-name",
                    "is_monitoring": true
                }, null, 2),
                requiredExample: JSON.stringify({
                    "data": {
                        "id": "e0ad011b-c690-4ab6-adc1-35187efff1d5"
                    }
                }, null, 2)
            },
            reply: "Returns the id of the new instance",

        },
        {
            title: "Restart Instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instance-operations/restart",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "id", description: "The instance id" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    id: "your-instance-id"
                }, null, 2),
                requiredExample: JSON.stringify({
                    "data": {
                        "id": "e0ad011b-c690-4ab6-adc1-35187efff1d5"
                    }
                }, null, 2)
            },
            reply: "Returns the id of the restarted instance",
        },
        {
            title: "Terminate Instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/instance-operations/terminate",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "id", description: "The instance id" }
                ],
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    id: "your-instance-id"
                }, null, 2),

                requiredExample: JSON.stringify({
                    "project": "cynthia@canopywave.com",
                    "region": "sequoia",
                    "id": "0952989f-8ed0-4228-8526-efff1a6b02bb0b4"
                }, null, 2),
            },
            reply: "Returns the id of the terminated instance"
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
            reply: "Return a list of ssh-keys for the specified region",
            body: {
                example: JSON.stringify({
                    "data": [
                        {
                            "keypair": {
                                "fingerprint": "bd:37:33:4d:8a:77:54:d3:f8:07:51:26:e2:9d:e7:db",
                                "name": "cynthia-key-1",
                                "public_key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMy/6SeyjtenrEyUDS4b7LBMCphEOPQu1tcnWGE7keZe andrew.li@canopywave.com"
                            }
                        },
                        {
                            "keypair": {
                                "fingerprint": "20:65:c6:e6:06:fb:1e:50:e2:1b:10:c1:e0:36:08:3f",
                                "name": "cynthia-key-test-generate-key-pair",
                                "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCwo/sYPYxyE3fS2PqGq/pJAEfLuphL+u87Z5oDJJoBipNUiyLFWveX6yYCXTjiyfXu6J+VBzHhzx1lTFqqAQqsF1K/TD5/z6GBHnl0NsL4/FG0xmqYIzCGnGD3BN6NSlR4si1H7Jl0CZluXR2Oo37JHUA7V+wDjO1p8WVJVveiI1s20zsQPQOI4Zpc/1UOiS8NgK430k2Up9kqFxV5ory9bvz4QKN7LyabRAgTWtOsLIWD2hEpi6SZOf3MXiwL4c9KOWyheE5/y/38bcep000cTWjsx42v23B88BDuJzDTwPuZrLN7J2Ktk2V"
                            }
                        },
                        {
                            "keypair": {
                                "fingerprint": "45:2e:fc:23:b2:11:9a:41:77:6f:3c:20:0d:d4:dc:0a",
                                "name": "cynthia-key-2",
                                "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCi716NkC1Ir9JbIYeBidS3ZvVNkArxUDybahX94weqlDGsxJFlz01bdO7HiA7I2QIocbUqD1I+LNEtMqFi63lr0GQAWhcwGL+/R2RpCNLj5y0VxMCIOYOmEh01qZ7zq2UJn9IvuvU5WD5cSSJrQnXLo1mdYM/eeNrr4NKOY+aoCdmI6gCO44wegG/f8nAMV+zyNw8i+duZXBsZMQTT29TgxcESGTYBY7TOc8WE/MlnbfNo9EHZ8ygYkDNQbfOE5ZcjqkXdHJqFJNyZfa1ko8RcIfltCNNprQLrrP4Qgaf1feaXnvaHUEHArE9"
                            }
                        }
                    ]
                }, null, 2),
            }
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
                    { name: "publicKey", description: "If you want to import your key, enter your public key here" }
                ],
                optionalExample: JSON.stringify({
                    "publicKey": "ssh-rsa xxxxxxxxxxxxxxx",
                }, null, 2),
                requiredExample: JSON.stringify({
                    "data": {
                        "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAou9ejZAtSK/SWyGHgYnUt2b1TZAK8VA8m2oV/eMHqpQxrMSR\nZc9NW3Tux4gOyNkCKHG1Kg9SPizRLTKhYut5a9BkAFoXMBi/v0dkaQjS4+/Dm6P0LSY6UmUTsBw\nTML8wArAnk7upfvb6rKaGxlYBGwKu/yH45I+\/Xd\n-----END RSA PRIVATE KEY-----\n",
                        "publicKey": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCi716NkC1Ir9JbIYeBidS3ZvVNkArxUDybahX94weqlDGsxJFlz01bdO7HiA7I2QIocbUqD1I+Y+aoCdmI6gCO44wegG/f8nAMV+zyNw8i+duZXBsZMQTT29TgxcESGTYBY7TOc8WE/MlnbfNo9EHZ8ygYkDNQbfOE5ZcjqkXdHJqFJNyZfa1ko8RcIfltCNNprQLrrP4Qgaf1feaXnvaHUEHArE9neDudxyyNtUjEi8038RVEOnWzvweP"
                    }
                }, null, 2),
                example: JSON.stringify({
                    region: "your-region",
                    project: "your-project",
                    name: "your-key-name",
                }, null, 2)
            },
            reply: "If no optional parameter is provided, return the public key and private key that the system generates"
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
            body: {
                example: JSON.stringify({
                    "data": {
                        "name": "ddrgdfg"
                    }
                }, null, 2)
            },
            reply: "Return the id of the ssh-key"
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
                    { name: "name", description: "Define for identification" },
                    { name: "size", description: "The size for file system in GB" }
                ],
                example: JSON.stringify({
                    "region": "your-region",
                    "project": "your-project",
                    "name": "your-share-fileSys-name",
                    "size": "your-selected size"
                }, null, 2)
            },
            reply: "Return the id the file system"
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
            reply: "Return the ID of the file system"
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
            reply: "Return a list of ALL volumes for the specified region"
        },
        {
            title: "Create Volume",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/volumes",
            body: {
                required: [
                    { name: "region", description: "Specifies the data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "name", description: "Define for identification" },
                    { name: "type", description: "The type of storage" },
                    { name: "size", description: "The size for the volume in GB" }
                ],
                example: JSON.stringify({
                    "region": "your-region",
                    "project": "your-project",
                    "name": "your-volume-name",
                    "type": "hdd",
                    "size": "your-selected size",
                }, null, 2),
                requiredExample: JSON.stringify({
                    "data": {
                        "id": "c585949f-f88e-4515-b60e-6e6a6ff0da89"
                    }
                }, null, 2)
            },
            reply: "Returns the id of the new volume"
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
            body: {
                example: JSON.stringify({
                    "data": {
                        "id": "c585949f-f88e-4515-b60e-6e6a6ff0da89"
                    }
                }, null, 2)
            },
            reply: "Returns the id of the deleted volume"
        },
        {
            title: "List public IP addresses",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ips",
            query: {
                required: [
                    "region:The available data center",
                    "project:Specifies the project"
                ]
            },
            body: {
                example: JSON.stringify({
                    "data": [
                        {
                            "id": "09e40279-e757-461f-a6e7-82829aba8536",
                            "ip": "213.181.122.171",
                            "server": "cynthia-2",
                            "status": "ACTIVE"
                        },
                        {
                            "id": "5bb56a56-372f-41ff-b746-52460f03e99d",
                            "ip": "213.181.122.206",
                            "server": null,
                            "status": "DOWN"
                        }
                    ]
                }, null, 2)
            },
            reply: "Array of IP address objects"
        },
        {
            title: "Allocate public IP address",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ips",
            body: {
                required: [
                    { name: "region", description: "The available data center" },
                    { name: "project", description: "Specifies the project" },
                ],
                example: JSON.stringify({
                    "data": {
                        "id": "d3889c71-72b0-43bd-8ab5-7c8091264cf9",
                        "ip": "213.181.122.218"
                    }
                }, null, 2)
            },
            reply: "Object containing id and ip of newly-allocated IP address"
        },
        {
            title: "Associate public IP address to instance",
            method: "POST",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ips/<ipId>/associate",
            body: {
                required: [
                    { name: "region", description: "The available data center" },
                    { name: "project", description: "Specifies the project" },
                    { name: "instanceId", description: "The ID of the instance to associate the IP with" },
                ],
                example: JSON.stringify({
                    "data": {
                        "instanceId": "9bc56d2b-411b-47c3-b93a-691c3931009c",
                        "ipId": "09e40279-e757-461f-a6e7-82829aba8536",
                        "portId": "e56bc512-14a0-4ecd-9480-ca83f8695c4c"
                    }
                }, null, 2)
            },
            reply: "Object containing IDs of the IP, port, and instance"
        },
        {
            title: "Disassociate public IP address from instance",
            method: "DELETE",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ips/<ipId>/disassociate",
            query: {
                required: [
                    "region : Specifies the data center",
                    "project : Specifies the project"
                ]
            },
            body: {
                example: JSON.stringify({
                    "data": {
                        "id": "09e40279-e757-461f-a6e7-82829aba8536"
                    }
                }, null, 2)
            },
            reply: "Object containing ID of the IP"
        },
        {
            title: "Release public IP address",
            method: "DELETE",
            endpoint: "https://cloud-api.canopywave.io/api/v1/ips/<id>",
            query: {
                required: [
                    "region : Specifies the data center",
                    "project : Specifies the project"
                ]
            },
            body: {
                example: JSON.stringify({
                    "data": {
                        "id": "09e40279-e757-461f-a6e7-82829aba8536"
                    }
                }, null, 2)
            },
            reply: "ID of the released address"
        },
        {
            title: "(WIP) Get billing information",
            method: "GET",
            endpoint: "https://cloud-api.canopywave.io/api/v1/billing",
            query: {
                required: ["project : Specifies the project"]
            },
            body: {
                example: JSON.stringify({
                    "billing_num": "example_value_1",
                    "period_from": "example_value_2",
                    "period_to": "example_value_3",
                    "due_date": "example_value_4",
                    "amount": "example_value_5",
                    "timestamp": "example_value_6"
                }, null, 2)
            },
            reply: "Return a list of billing info"
        }
    ];

    return (
        <main className="min-h-screen bg-[#F9F9F9] text-gray-600 relative overflow-x-hidden">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
                <SlideUp>
                    <h1 className="text-3xl sm:text-4xl font-black text-center mb-8">Manage Cloud via API</h1>
                </SlideUp>
                <SlideUp>
                    <p className="text-l text-gray-600 text-center mb-16">
                        Canopy Wave supports a set of REST API to enable servers to develop management clients or to integrate VMS functionality into users' own custom management infrastructure
                    </p>
                </SlideUp>

                <div className="grid grid-cols-1 gap-8">
                    <section>
                        <button
                            onClick={() => toggleSection('api-key')}
                            className="w-full flex items-center justify-between font-bold text-3xl p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <h3 className="text-2xl">Obtaining an API Key</h3>
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
                                <p className="text-gray-600 text-l">
                                    To manage Canopy Wave Cloud via the API, users must first register for an account at <a href="https://cloud.canopywave.io" target="_blank" className="text-blue-500 hover:underline">Canopy Wave</a> (https://cloud.canopywave.io). After registering, follow these steps to generate an API key.
                                </p>
                                <ol className="list-decimal list-inside text-gray-600 mt-4">
                                    <li>In the left navigation bar, click on API Keys</li>
                                    <li>Click on New API Key to create a new key</li>
                                    <li>Copy the generated API key for use in future API calls</li>
                                </ol>
                                {/* <img src="/cloud/image.png" alt="Cloud Image" className="w-full h-auto mt-4" /> */}
                                <img src="/cloud/image2.png" alt="Cloud Image2" className="w-full h-auto mt-4" />
                            </div>
                        )}
                    </section>

                    <section>
                        <button
                            onClick={() => toggleSection('api-call')}
                            className="w-full flex items-center justify-between font-bold text-3xl p-4 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            <h3 className="text-2xl">Making an API Call</h3>
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
                                    <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
                                        <code>Authorization: Bearer &lt;YOUR-API-KEY&gt;</code>
                                    </pre>

                                    <p className="mt-6">A successful API call will return the following structure:</p>
                                    <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
                                        <code suppressHydrationWarning>
                                            {JSON.stringify({
                                                "data": "<PAYLOAD>"
                                            }, null, 2)}
                                        </code>
                                    </pre>

                                    <p className="mt-6">If the API call is invalid, an error Reply will be returned. For example, a 401 Unauthorized error indicates that the request was not authorized:</p>
                                    <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
                                        <code>401: Unauthorized</code>
                                    </pre>

                                    <p className="mt-4">The error Reply will include an error message, formatted as follows:</p>
                                    <pre className="bg-gray-100 p-4 rounded mt-4 text-sm">
                                        <code suppressHydrationWarning>
                                            {JSON.stringify({
                                                "error": "<error message>"
                                            }, null, 2)}
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
                            <h3 className="text-2xl">REST API Endpoints</h3>
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