import React, { useState } from 'react'
import SlideUp from '@/components/slide'
import Image from 'next/image'
import SidebarLayout from '@/components/SidebarLayout'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Breadcrumb from '@/components/Breadcrumb'
import { useTutorialBreadcrumb } from '@/hooks/useTutorialBreadcrumb'
import ClickableImage from '@/components/ui/ClickableImage'

const TutorialLayout5: React.FC = () => {
    const breadcrumbItems = useTutorialBreadcrumb()
    const [showVideo, setShowVideo] = useState(false);
    const [showVideo2, setShowVideo2] = useState(false);
    // 使用blog页面的内容结构
    const tutorialData = {
        title: 'How to Choose the Right Storage for Your AI Workflows',
        sections: [
            {
                title: 'I. Choosing the Right Storage Architecture for AI',
                navLabel: 'Choosing the Right Storage',
                content: [
                    'In AI model development, compute power is the "engine," but data and storage are the "fuel." Whether you are training large-scale models, building image generation systems, or deploying real-time inference services, selecting the right storage architecture is critical for performance, stability, and cost optimization.',
                    React.createElement('h3', { key: 'storage-comparison-title' }, 'Storage comparison'),
                    React.createElement('table', {
                        key: 'storage-table',
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            marginTop: '20px',
                            marginBottom: '20px',
                        }
                    }, [
                        React.createElement('thead', { key: 'thead' },
                            React.createElement('tr', { key: 'header-row' }, [
                                React.createElement('th', {
                                    key: 'th1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Storage Type'),
                                React.createElement('th', {
                                    key: 'th2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Applicable Scenarios'),
                                React.createElement('th', {
                                    key: 'th3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Peculiarity'),
                                React.createElement('th', {
                                    key: 'th4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Precautions')
                            ])
                        ),
                        React.createElement('tbody', { key: 'tbody' }, [
                            React.createElement('tr', { key: 'row1' }, [
                                React.createElement('td', {
                                    key: 'td1-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Local Storage'),
                                React.createElement('td', {
                                    key: 'td1-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Frequent data access during model training.',
                                    React.createElement('br', { key: 'br1' }),
                                    '• GPU nodes processing large datasets independently.'
                                ])),
                                React.createElement('td', {
                                    key: 'td1-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Located directly on the VM/bare-metal node (Canopy Wave uses NVMe).',
                                    React.createElement('br', { key: 'br2' }),
                                    '• Ultra-low latency and high throughput.',
                                    React.createElement('br', { key: 'br3' }),
                                    '• Network-independent, ensuring high stability.'
                                ])),
                                React.createElement('td', {
                                    key: 'td1-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Limited capacity (e.g., H100: 11.5TB, H200: 13.4TB).',
                                    React.createElement('br', { key: 'br4' }),
                                    '• Lacks data persistence; data may be lost when the instance is terminated.'
                                ]))
                            ]),
                            React.createElement('tr', { key: 'row2' }, [
                                React.createElement('td', {
                                    key: 'td2-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Shared Storage'),
                                React.createElement('td', {
                                    key: 'td2-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Multi-GPU or multi-node distributed training.',
                                    React.createElement('br', { key: 'br5' }),
                                    '• Rapid iteration on model parameters or saving intermediate checkpoints.'
                                ])),
                                React.createElement('td', {
                                    key: 'td2-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Mountable by multiple instances simultaneously.',
                                    React.createElement('br', { key: 'br6' }),
                                    '• Standard file system interface.',
                                    React.createElement('br', { key: 'br7' }),
                                    '• Ideal for building distributed AI data pipelines.'
                                ])),
                                React.createElement('td', {
                                    key: 'td2-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Latency and bandwidth are dependent on network performance.',
                                    React.createElement('br', { key: 'br8' }),
                                    '• Requires careful design to avoid I/O bottlenecks during concurrent access.'
                                ]))
                            ]),
                            React.createElement('tr', { key: 'row3' }, [
                                React.createElement('td', {
                                    key: 'td3-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Object Storage'),
                                React.createElement('td', {
                                    key: 'td3-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Archiving model data before and after training.',
                                    React.createElement('br', { key: 'br9' }),
                                    '• Managing checkpoints and model versions.',
                                    React.createElement('br', { key: 'br10' }),
                                    '• Storing static assets for inference services.'
                                ])),
                                React.createElement('td', {
                                    key: 'td3-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• High availability and massive scalability.',
                                    React.createElement('br', { key: 'br11' }),
                                    '• Accessed via HTTP API (S3 protocol) with a rich ecosystem of compatible tools.',
                                    React.createElement('br', { key: 'br12' }),
                                    '• Supports lifecycle management (hot/cold data tiering).'
                                ])),
                                React.createElement('td', {
                                    key: 'td3-4',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, React.createElement('div', {}, [
                                    '• Not suitable for real-time, high-frequency access.',
                                    React.createElement('br', { key: 'br13' }),
                                    '• Best used with caching or asynchronous pre-fetching mechanisms for GPU clusters.'
                                ]))
                            ])
                        ])
                    ]),
                    React.createElement('h3', { key: 'selection-logic-title', style: { marginTop: '30px', fontWeight: 'bold' } }, 'General Selection Logic:'),
                    React.createElement('ol', { key: 'selection-list', style: { marginTop: '15px', paddingLeft: '20px' } }, [
                        React.createElement('li', { key: 'li1', style: { marginBottom: '10px' } }, '1. Assess Your Workload\'s Needs: If you are only running inference without needing to download data or save results, additional storage may not be required. Model training or fine-tuning typically requires a combination, such as local and object storage. Distributed tasks demand shared storage.'),
                        React.createElement('li', { key: 'li2', style: { marginBottom: '10px' } }, '2. Use Local Storage for High-Frequency, Low-Latency Access: Prioritize local storage for the primary data stream during the training phase to leverage its extremely low latency and high throughput.'),
                        React.createElement('li', { key: 'li3', style: { marginBottom: '10px' } }, '3. Use Shared Storage for Mid-Frequency, Collaborative Access: Choose shared storage to ensure synchronous data access across multiple processes or nodes, ideal for collaborative tasks and shared datasets.'),
                        React.createElement('li', { key: 'li4', style: { marginBottom: '10px' } }, '4. Use Object Storage for Low-Frequency Access and Archiving: Use object or block storage for long-term preservation of model versions, training logs, and other assets. It is cost-effective and suited for "write-once, read-many" scenarios.')
                    ])
                ]
            },
            {
                title: 'II. Shared vs. Object Storage in Distributed Training',
                navLabel: 'Shared vs Object Storage',
                content: [
                    React.createElement('h3', { key: 'usage-differences-title', style: { fontWeight: 'bold' } }, '1. Using Scene Differences'),
                    React.createElement('ul', {
                        key: 'usage-differences-list',
                        style: { marginBottom: '20px' }
                    }, [
                        React.createElement('li', { key: 'shared-storage-desc', style: { marginBottom: '10px' } }, [
                            React.createElement('strong', { key: 'shared-bold' }, 'Shared Storage'),
                            ' is mounted and accessed as a standard file system (NAS), allowing all GPU nodes to read and write to the same directory concurrently. Canopy Wave\'s shared storage is built on CephFS, a scalable, POSIX-compliant distributed file system designed for high availability and performance. It is ideal for high-frequency access to shared datasets, logs, and intermediate models during distributed training.'
                        ]),
                        React.createElement('li', { key: 'object-storage-desc', style: { marginBottom: '10px' } }, [
                            React.createElement('strong', { key: 'object-bold' }, 'Object Storage'),
                            ': Network transmission through the S3 protocol does not occupy ',
                            React.createElement('a', { key: 'object-storage-gpu-link', href: '/compute-services', className: 'text-[#80B224] hover:text-[#98c455] underline underline-offset-2', rel: 'noopener noreferrer' }, 'GPU resources'),
                            ', and is suitable for efficient processing and transmission of large-scale data. It is commonly used to store raw datasets, model archiving, and upload training data from the public network or locally, and can also be used for model deployment, archiving, and migration after training is completed. In distributed training, object storage is often used in conjunction with other types of storage to balance performance and flexibility.'
                        ])
                    ]),
                    React.createElement('h3', { key: 'technical-comparison-title', style: { fontWeight: 'bold' } }, '2. Comparison of technical dimensions'),
                    React.createElement('table', {
                        key: 'technical-comparison-table',
                        style: {
                            width: '100%',
                            borderCollapse: 'collapse',
                            marginTop: '20px',
                            marginBottom: '20px',
                            // border: '1px solid #ddd'
                        }
                    }, [
                        React.createElement('thead', { key: 'tech-thead' },
                            React.createElement('tr', { key: 'tech-header-row' }, [
                                React.createElement('th', {
                                    key: 'tech-th1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Characteristic'),
                                React.createElement('th', {
                                    key: 'tech-th2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Shared Storage'),
                                React.createElement('th', {
                                    key: 'tech-th3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 'bold',
                                        textAlign: 'left'
                                    }
                                }, 'Object Storage')
                            ])
                        ),
                        React.createElement('tbody', { key: 'tech-tbody' }, [
                            React.createElement('tr', { key: 'tech-row1' }, [
                                React.createElement('td', {
                                    key: 'tech-td1-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Access Method'),
                                React.createElement('td', {
                                    key: 'tech-td1-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'File System Mount (e.g., NFS, CephFS)'),
                                React.createElement('td', {
                                    key: 'tech-td1-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'S3 API Access')
                            ]),
                            React.createElement('tr', { key: 'tech-row2' }, [
                                React.createElement('td', {
                                    key: 'tech-td2-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Concurrency Model'),
                                React.createElement('td', {
                                    key: 'tech-td2-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Multiple nodes can read and write files simultaneously.'),
                                React.createElement('td', {
                                    key: 'tech-td2-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Multiple nodes can read, but write operations require consistency management.')
                            ]),
                            React.createElement('tr', { key: 'tech-row3' }, [
                                React.createElement('td', {
                                    key: 'tech-td3-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Performance Profile'),
                                React.createElement('td', {
                                    key: 'tech-td3-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Low latency, high bandwidth. Ideal for frequent I/O during training.'),
                                React.createElement('td', {
                                    key: 'tech-td3-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'High latency, high throughput. Unsuitable for real-time access but great for large file transfers.')
                            ]),
                            React.createElement('tr', { key: 'tech-row4' }, [
                                React.createElement('td', {
                                    key: 'tech-td4-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Scalability & Resiliency'),
                                React.createElement('td', {
                                    key: 'tech-td4-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Scale-out can be complex (constrained by nodes and network).'),
                                React.createElement('td', {
                                    key: 'tech-td4-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Extremely scalable, supporting petabytes of data with minimal maintenance.')
                            ]),
                            React.createElement('tr', { key: 'tech-row5' }, [
                                React.createElement('td', {
                                    key: 'tech-td5-1',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Cost'),
                                React.createElement('td', {
                                    key: 'tech-td5-2',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Medium cost (dependent on cluster and network), often billed monthly/annually.'),
                                React.createElement('td', {
                                    key: 'tech-td5-3',
                                    style: {
                                        border: '1px solid #ddd',
                                        padding: '12px',
                                        verticalAlign: 'top'
                                    }
                                }, 'Low cost (pay-as-you-go), ideal for cold and archival data.')
                            ])
                        ])
                    ]),
                    React.createElement('h3', { key: 'combined-approach-title', style: { fontWeight: 'bold' } }, 'A Combined Approach for Distributed Training:'),
                    React.createElement('ol', {
                        key: 'combined-approach-list',
                        style: { marginBottom: '20px' }
                    }, [
                        React.createElement('li', { key: 'combined-li1', style: { marginBottom: '10px' } }, '1. Before Training: Datasets, pre-trained weights, and configuration files are stored in object storage (S3).'),
                        React.createElement('li', { key: 'combined-li2', style: { marginBottom: '10px' } }, '2. During Training: The processed data is pulled from object storage to high-performance shared storage. All GPU nodes mount this shared directory for real-time, concurrent access. Intermediate checkpoints and logs are also written to shared storage due to its low latency.'),
                        React.createElement('li', { key: 'combined-li3', style: { marginBottom: '10px' } }, '3. After Training: The final model, logs, and metric reports are pushed back from shared storage to object storage for long-term archiving, versioning, and downstream use (e.g., deployment, evaluation).')
                    ]),
                    React.createElement('p', { key: 'best-practice-note' }, 'This combination is a best practice, leveraging the strengths of each system for maximum efficiency.')
                ]
            },
            {
                title: 'III. Advantages and Disadvantages of Local Storage in High-Performance GPU Clusters',
                navLabel: 'Pros and Cons of Local Storage',
                content: [
                    React.createElement('p', { key: 'local-storage-intro' }, 'In a GPU cluster, local storage is the directly attached storage (DAS) inside each server. At Canopy Wave, we use high-performance NVMe drives.'),
                    React.createElement('h3', { key: 'advantages-title', style: { fontWeight: 'bold' } }, 'Advantages:'),
                    React.createElement('ol', {
                        key: 'advantages-list',
                        style: { marginBottom: '20px' }
                    }, [
                        React.createElement('li', { key: 'adv-li1', style: { marginBottom: '10px' } }, '1. Extreme Performance: Connected via the PCIe bus, local NVMe storage offers ultra-low latency and high throughput (3-7 GB/s), bypassing network bottlenecks entirely. It is ideal for data-intensive tasks like loading large media files or caching frequently accessed training data.'),
                        React.createElement('li', { key: 'adv-li2', style: { marginBottom: '10px' } }, '2. Resource Isolation: Each server\'s local storage is exclusive, eliminating the "noisy neighbor" problem of I/O congestion or lock contention found in shared systems.'),
                        React.createElement('li', { key: 'adv-li3', style: { marginBottom: '10px' } }, '3. Architectural Simplicity: It requires no complex configuration of shared file systems, making it suitable for rapid deployment and agile development scenarios.'),
                        React.createElement('li', { key: 'adv-li4', style: { marginBottom: '10px' } }, '4. Cost-Effectiveness: The cost per gigabyte for NVMe is often significantly lower than that of enterprise-grade shared storage systems.')
                    ]),
                    React.createElement('h3', { key: 'disadvantages-title', style: { fontWeight: 'bold' } }, 'Disadvantages:'),
                    React.createElement('ol', {
                        key: 'disadvantages-list',
                        style: { marginBottom: '20px' }
                    }, [
                        React.createElement('li', { key: 'dis-li1', style: { marginBottom: '10px' } }, '1. No Data Sharing: Data on a local drive is isolated to that server, making it unsuitable as a primary data source for distributed training where all nodes need a unified view of the data.'),
                        React.createElement('li', { key: 'dis-li2', style: { marginBottom: '10px' } }, '2. Lack of Data Redundancy: Local storage typically lacks built-in redundancy. A server failure or instance termination can lead to permanent data loss, making it unsuitable for long-term assets.'),
                        React.createElement('li', { key: 'dis-li3', style: { marginBottom: '10px' } }, '3. Limited & Inelastic Capacity: Local disk capacity is fixed and cannot be dynamically expanded like object or shared storage.'),
                        React.createElement('li', { key: 'dis-li4', style: { marginBottom: '10px' } }, '4. Scheduling Complexity: Schedulers must account for data locality, which can lead to inefficient resource utilization and frequent data transfers if not managed properly.')
                    ]),
                    React.createElement('p', { key: 'conclusion-paragraph' }, [
                        React.createElement('strong', { key: 'conclusion-bold' }, 'Conclusion:'),
                        ' Local storage excels as a high-speed cache, a temporary working directory for data preprocessing, or for low-latency inference tasks. However, it should not be the sole storage solution. In robust AI pipelines, it is best used as a first-level cache in a tiered architecture, combined with shared and object storage to create a stable and efficient system.'
                    ])
                ]
            }
        ]
    }

    // 根据教程内容动态生成导航项
    const navigationItems = tutorialData.sections.map((section, index) => ({
        id: `section-${index}`,
        label: section.navLabel || section.title || `Section ${index + 1}`
    }))

    const meidaSidebar = (
        <div className="rounded-lg mt-6">
            <h4 className="text-l font-semibold ml-4 text-gray-700">Share</h4>
            <SocialMediaLinks
                vertical={false}
                className="items-center pt-2 pl-4"
            />
        </div>
    )

    const rightSidebar = (
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200 mt-7">
                Recommended Tutorials
            </h3>
            <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg pb-2">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                        {!showVideo ? (
                            <div
                                className="w-full h-full cursor-pointer"
                                onClick={() => setShowVideo(true)}
                            >
                                <img
                                    src="https://img.youtube.com/vi/CFv-CzlcXn4/maxresdefault.jpg"
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <img
                                        src="/tutorials/youtube.svg"
                                        alt="Play video"
                                        className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
                                    />
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src="https://www.youtube.com/embed/CFv-CzlcXn4?modestbranding=1&rel=0&controls=1&autoplay=1"
                                title="AI Agent for Animal Health Monitoring | Multi-Step Analysis on Canopy Wave Cloud Platform"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=CFv-CzlcXn4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                    >
                        AI Agent for Animal Health Monitoring | Multi-Step Analysis on Canopy Wave Cloud Platform
                    </a>
                </div>

                <div className="bg-gray-50 rounded-lg pb-2">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-3 relative overflow-hidden">
                        {!showVideo2 ? (
                            <div
                                className="w-full h-full cursor-pointer"
                                onClick={() => {
                                    setShowVideo2(true);
                                }}
                            >
                                <img
                                    src="https://img.youtube.com/vi/5-YSNDUZOew/maxresdefault.jpg"
                                    alt="Video thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                                    <img
                                        src="/tutorials/youtube.svg"
                                        alt="Play video"
                                        className="w-16 h-16 cursor-pointer hover:scale-110 transition-transform duration-200"
                                    />
                                </div>
                            </div>
                        ) : (
                            <iframe
                                src="https://www.youtube.com/embed/5-YSNDUZOew?modestbranding=1&rel=0&controls=1&autoplay=1"
                                title="AI Agent + Monitoring Systems: Fast Data Collection & Processing"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=5-YSNDUZOew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-gray-900 text-xs mb-2 line-clamp-2 hover:text-[#80B224] transition-colors duration-200 block"
                    >
                        AI Agent + Monitoring Systems: Fast Data Collection & Processing
                    </a>
                </div>
            </div>
        </div>
    )

    // 渲染内容的辅助函数
    const renderContent = (content: any) => {
        // 如果是React元素，直接返回
        if (React.isValidElement(content)) {
            return content
        }

        // 处理字符串内容
        if (typeof content === 'string') {
            // 处理链接
            if (content.includes('<a href=')) {
                return (
                    <div
                        dangerouslySetInnerHTML={{ __html: content }}
                        className="text-gray-700 leading-relaxed"
                    />
                )
            }

            // 处理粗体文本
            if (content.includes('**')) {
                const parts = content.split(/\*\*(.*?)\*\*/g)
                return (
                    <p className="text-gray-700 leading-relaxed">
                        {parts.map((part, index) =>
                            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
                        )}
                    </p>
                )
            }

            // 处理列表项
            if (content.startsWith('•')) {
                return (
                    <li className="text-gray-700 leading-relaxed ml-4">
                        {content.substring(2)}
                    </li>
                )
            }

            // 处理空行
            if (content.trim() === '') {
                return <br />
            }

            // 普通段落
            return <p className="text-gray-700 leading-relaxed">{content}</p>
        }

        return null
    }

    return (
        <>
            {/* Banner Section */}
            <div className="w-full h-[520px] relative mt-[84px]">
                <Image
                    src="/blog/workflows.png"
                    alt="AI Storage Tutorial Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44">
                        <SlideUp>
                            <h1 className="text-4xl sm:text-5xl sm:leading-[1.2] font-black text-[#80b224]">
                                How to Choose the Right Storage<br /> for Your AI Workflows
                            </h1>
                        </SlideUp>
                    </div>
                </div>
            </div>

            {/* Breadcrumb Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <SlideUp>
                    <Breadcrumb items={breadcrumbItems} />
                </SlideUp>
            </div>

            {/* Content Section */}
            <SidebarLayout
                navigationItems={navigationItems}
                title={tutorialData.title}
                meidaSidebar={meidaSidebar}
                showCustomTutorials={true}
                rightSidebar={rightSidebar}
                showRecommendedTutorials={false}
            >
                <div className="prose prose-lg max-w-none
              /* 强制所有文本换行 */
              [&_*]:break-words [&_*]:overflow-wrap-anywhere
              /* 表格响应式处理 */
              [&_table]:w-full [&_table]:table-auto [&_table]:overflow-x-auto
              [&_table]:block [&_table]:whitespace-nowrap
              [&_td]:min-w-0 [&_td]:break-words [&_td]:whitespace-normal
              [&_th]:min-w-0 [&_th]:break-words [&_th]:whitespace-normal
              /* 列表项处理 */
              [&_li]:break-words [&_li]:overflow-wrap-anywhere
              /* 段落处理 */
              [&_p]:break-words [&_p]:overflow-wrap-anywhere
              /* 标题处理 */
              [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words
              /* 移动端特殊处理 */
              max-sm:[&_table]:text-sm max-sm:[&_td]:p-2 max-sm:[&_th]:p-2
              max-sm:[&_li]:text-sm max-sm:[&_p]:text-sm
            ">
                    {tutorialData.sections.map((section, sectionIndex) => (
                        <section key={sectionIndex} id={`section-${sectionIndex}`} className="mb-12">
                            {section.title && (
                                <SlideUp>
                                    <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                                </SlideUp>
                            )}
                            <div className="space-y-4">
                                {section.content.map((content, contentIndex) => (
                                    <SlideUp key={contentIndex}>
                                        {renderContent(content)}
                                    </SlideUp>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </SidebarLayout>
        </>
    )
}

export default TutorialLayout5