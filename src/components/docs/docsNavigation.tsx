import Image from 'next/image';

export const docsLeftNavItems = [
    {
        id: 'tutorials',
        label: (
            <span className="flex items-center w-full">
                <Image src="/docs/icon/tutorials.svg" alt="Tutorials" width={16} height={16} className="mr-2" />
                Tutorials
                <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
            </span>
        ),
        href: '/resources/tutorials'
    },
    {
        id: 'case-studies',
        label: (
            <span className="flex items-center w-full">
                <Image src="/docs/icon/case-studies.svg" alt="Case Studies" width={16} height={16} className="mr-2" />
                Case Studies
                <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
            </span>
        ),
        href: '/resources/case-study'
    },
    {
        id: 'newsroom',
        label: (
            <span className="flex items-center w-full">
                <Image src="/docs/icon/newsroom.svg" alt="Newsroom" width={16} height={16} className="mr-2" />
                Newsroom
                <Image src="/docs/arrow.svg" alt="arrow" width={16} height={16} className='ml-2 mt-1' />
            </span>
        ),
        href: '/about/newsroom'
    },
    { id: 'divider-1', label: '', isDivider: true },
    {
        id: 'cw-cloud',
        label: (
            <span className="flex items-center w-full">
                <Image src="/docs/icon/cloud.svg" alt="CW Cloud Account" width={16} height={16} className="mr-2" />
                CW Cloud Account
            </span>
        ),
        children: [
            { id: 'quick-start', label: 'Quick Start', href: '/resources/docs/cw-cloud-account/quick-start' },
            { id: 'deploy-an-instance', label: 'Deploy an instance', href: '/resources/docs/cw-cloud-account/deploy-an-instance' },
            { id: 'access-and-manage-your-instance', label: 'Access and Manage Your Instance', href: '/resources/docs/cw-cloud-account/access-and-manage-your-instance' },
        ]
    },
    {
        id: 'products',
        label: (
            <span className="flex items-center w-full">
                <Image src="/docs/icon/products.svg" alt="Products" width={16} height={16} className="mr-2" />
                Products
            </span>
        ),
        children: [
            { id: 'canopy-wave-gpu', label: 'GPU Cluster Hardware Product Portfolio', href: '/resources/docs/products/canopy-wave-gpu' },
            { id: 'key-metrics-of-gpu-performance', label: 'Key Metrics of GPU Performance', href: '/resources/docs/products/key-metrics-of-gpu-performance' },
            { id: 'components-advantages', label: 'InfiniBand: Components and Advantages', href: '/resources/docs/products/components-advantages' },
        ],
    },
];