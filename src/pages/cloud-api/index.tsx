"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import SlideUp from '@/components/slide';
import FadeIn from '@/components/FadeIn';
import { Button } from "@/components/ui/button";
import { useScrollToHash } from '@/hooks/useScrollToHash';

export default function PlatformPage() {
    useScrollToHash();
    return (
        <main className="min-h-screen bg-[#F9F9F9] relative">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
                <SlideUp>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8">API Documentation</h1>
                </SlideUp>
                <SlideUp>
                    <p className="text-lg text-gray-600 text-center mb-16">
                        Canopy Wave supports a set of REST API to enable servers to develop management clients or to integrate VMS functionality into users' own custom management infrastructure
                    </p>
                </SlideUp>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <h3 className="font-bold text-3xl">Obtaining an API Key</h3>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600">
                            To manage Canopy Wave Cloud via the API, users must first register for an account at Canopy Wave (https://cloud.canopywave.io). After registering, follow these steps to generate an API key:
                            <ol className="list-decimal list-inside">
                                <li>In the left navigation bar, click on API Keys</li>
                                <li>Click on New API Key to create a new key</li>
                                <li>Copy the generated API key for use in future API calls</li>
                            </ol>
                        </p>
                        <img src="/cloud/image.png" alt="Cloud Image" className="w-full h-auto mt-4" />
                    </div>
                    <h3 className="font-bold text-3xl mt-4">Making an API Call</h3>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600">
                            To make a request to the API, include an HTTP Bearer header with your API key:
                            <code className="block bg-gray-100 p-2 rounded mt-2">Authorization: Bearer &lt;YOUR-API-KEY&gt;</code>
                            A successful API call will return the following structure:
                            <code className="block bg-gray-100 p-2 rounded mt-2">Authorization: Bearer &lt;YOUR-API-KEY&gt;</code>
                            If the API call is invalid, an error Reply will be returned. For example, a 401 Unauthorized error indicates that the request was not authorized:
                            <code className="block bg-gray-100 p-2 rounded mt-2">401: Unauthorized</code>
                            The error Reply will include an error message, formatted as follows:
                            <code className="block bg-gray-100 p-2 rounded mt-2">
                                {JSON.stringify({ error: "<error message>" })}
                            </code>
                        </p>
                    </div>
                    <h3 className="font-bold text-3xl mt-4">REST API Endpoints</h3>

                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600">
                            <strong className='text-2xl'>List Projects</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/projects`<br />
                            Response: This will return the list of names of the projects you have permission to access. Many API calls will require project as a parameter
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List Instances</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/instances`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required: project - Specifies the project<br />
                            Optional: region - Specifies the data center<br />
                            Response: Return a list of instances in the specified region. If no region is specified, returns all instances across all regions
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List Running Instances</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/instances/running`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required: project - Specifies the project<br />
                            Required: region - Specifies the data center<br />
                            Reply: Return all active instances for the specified region
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List Details of Specified Instance</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/instances/&lt;instance-id&gt;`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required: region - Specifies the data center<br />
                            Required: project - Specifies the project<br />
                            Reply: Return the details of specified instance for the specified region
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600">
                            <strong className='text-2xl'>List Images</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/images`<br />
                            Reply: Return all OS images that are available for the instance.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List Instance Types</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/instance-types`<br />
                            Reply: Returns a list of all available instance types.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Launch Instance</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/instance-operations/launch`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specifies the data center.<br />
                            - project: Specifies the project.<br />
                            - name: A unique identifier for the instance.<br />
                            - flavor: Defines the type of instance.<br />
                            - image: The operating system to be used for the instance.<br />
                            - password: The password for default SSH login.<br />
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "name": "your-instance-name",
    "flavor": "your-selected-flavor",
    "image": "your-selected-image",
    "password": "your-password"
}`}</code></pre>
                            Optional:<br />
                            - keypair: The key used for SSH access.<br />
                            - is_monitoring: Enables the monitoring page for the instance.<br />
                            <pre><code>{`{
    "keypair": "your-key-name",
    "is_monitoring": true
}`}</code></pre>
                            Reply: Return the id of the new instance.
                        </p>
                    </div>

                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Restart Instance</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/instance-operations/restart`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specified data center.<br />
                            - project: Specifies the project.<br />
                            - id: The instance id.<br />
                            ```json
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "id": "your-selected-instance-id"
}`}</code></pre>
                            ```
                            Reply: Return the id of the instance.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Terminate instance</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/instance-operations/terminate`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specific data center<br />
                            - project: Specifies the project<br />
                            - id: The instance id<br />
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "id": "your-selected-instance-id"
}`}</code></pre>
                            Reply: Return the id of the instance.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List SSH keys</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/ssh-keys`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Rregion: Specific data center<br />
                            project: Specifies the project<br />
                            Reply: Return a list of ssh-keys for the specified region
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Add SSH key</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/ssh-keys`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specific data center<br />
                            - project: Specifies the project<br />
                            - name: name of new key<br />
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "name": "your-ssh-key-name",
}`}</code></pre>
                            Optional:<br />
                            - publicKey: If you want to import your key, enter your public key here<br />
                            <pre><code>{`{
    "publicKey": "ssh-rsa xxxxxxxxxxxxxxx",
}`}</code></pre>
                            Reply: If no optional parameter is provided, return the public key and private key that the system generates
                            If the optional parameter is provided, return the public key you imported
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Delete SSH key</strong><br />
                            DELETE  `https://cloud-api.canopywave.io/api/v1/ssh-keys/&lt;key-name&gt;`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required:<br />
                            - region: Specifies the data center<br />
                            - project: Specifies the project<br />
                            Reply: Return the id of the ssh-key
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List shared file systems</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/file-systems`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required:<br />
                            - region: Specifies the data center<br />
                            - project: Specifies the project<br />
                            Reply:Return a list of ALL file systems for the specified region
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Create shared file system</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/file-systems`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specific data center<br />
                            - project: Specifies the project<br />
                            - name: Define for identification<br />
                            - size: The size for file system in GB<br />
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "name": "your-share-fileSys-name",
    "size": "your-selected size"
}`}</code></pre>
                            Reply: RReturn the id the file system
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Delete shared file system</strong><br />
                            DELETE  `https://cloud-api.canopywave.io/api/v1/file-systems/&lt;id&gt;`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required:<br />
                            - region: Specifies the data center<br />
                            - project: Specifies the project<br />
                            Reply: Return the ID of the file system
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>List volumes</strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/volumes`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required: region - Specifies the data center<br />
                            Required: project - Specifies the project<br />
                            Reply: Return a list of ALL volumes for the specified region
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Create volume</strong><br />
                            POST `https://cloud-api.canopywave.io/api/v1/volumes`<br />
                            <strong className='text-2xl'>Body</strong><br />
                            Required:<br />
                            - region: Specific data center<br />
                            - project: Specifies the project<br />
                            - name: Define for identification<br />
                            - type: The type of storage<br />
                            - size: The size for the volume in GB <br />
                            <pre><code>{`{
    "region": "your-region",
    "project": "your-project",
    "name": "your-share-fileSys-name",
    "type": "hdd",
    "size": "your-selected size"
}`}</code></pre>
                            Reply: Return the id the volume
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>Delete volume </strong><br />
                            DELETE  `https://cloud-api.canopywave.io/api/v1/volumes/&lt;volume-id&gt;`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required:<br />
                            - region: Specifies the data center<br />
                            - project: Specifies the project<br />
                            Reply: Return the id of the volume
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-all duration-300">
                        <p className="text-gray-600 mt-4">
                            <strong className='text-2xl'>(WIP) Get billing information </strong><br />
                            GET `https://cloud-api.canopywave.io/api/v1/billing`<br />
                            <strong className='text-2xl'>Query</strong><br />
                            Required: project - Specifies the project<br />
                            Reply: Return the id of the volume
                        </p>
                        <pre><code>{`{
    "billing_num",
    "period_from",
    "period_to",
    "due_date",
    "amount",
    "timestamp"
}`}</code></pre>
                    </div>




                </div>
            </div>
            <Footer />
        </main>
    );
}