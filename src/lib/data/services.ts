export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  detailedDescription: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Cloud Services",
    slug: "cloud-services",
    description: "Cloud infrastructure design and deployment. Public, private, and hybrid cloud solutions.",
    image: "/service-cloud-services.webp",
    features: [
      "Cloud infrastructure design and deployment",
      "Public, private, and hybrid cloud solutions",
      "Cloud migration and optimization",
      "Performance, cost, and security management"
    ],
    detailedDescription: "At Guruji Tech Global, we provide comprehensive cloud services that help businesses transform their IT infrastructure. Our cloud solutions enable organizations to scale resources on-demand, reduce capital expenditures, and improve operational efficiency. We work with leading cloud providers including AWS, Azure, and Google Cloud to deliver tailored solutions that meet your specific business requirements.",
    benefits: [
      "Reduced IT infrastructure costs",
      "Enhanced scalability and flexibility",
      "Improved disaster recovery capabilities",
      "Access to enterprise-grade security",
      "Faster deployment of applications and services"
    ]
  },
  {
    id: "2",
    title: "Microsoft 365",
    slug: "microsoft-365",
    description: "Microsoft 365 setup and migration. Exchange, SharePoint, OneDrive, and Teams management.",
    image: "/service-microsoft-365.webp",
    features: [
      "Microsoft 365 setup and migration",
      "Exchange, SharePoint, OneDrive, and Teams management",
      "Security and compliance configuration",
      "Ongoing administration and support"
    ],
    detailedDescription: "Our Microsoft 365 services help organizations leverage full power of Microsoft's productivity suite. From initial planning and migration to ongoing management and optimization, we ensure your team can collaborate effectively and securely. We specialize in seamless migrations from on-premises Exchange and legacy systems to Microsoft 365.",
    benefits: [
      "Enhanced team collaboration",
      "Improved productivity with integrated tools",
      "Anywhere, anytime access to files and applications",
      "Enterprise-grade security and compliance",
      "Reduced IT maintenance overhead"
    ]
  },
  {
    id: "3",
    title: "Web Development",
    slug: "web-development",
    description: "Custom website and web application development. Responsive UI UX design and SEO and performance optimization.",
    image: "/service-web-development.webp",
    features: [
      "Custom website and web application development",
      "Responsive UI UX design",
      "SEO and performance optimization",
      "Secure backend integration"
    ],
    detailedDescription: "Our web development team creates stunning, high-performance websites and web applications that drive business results. We use modern frameworks and technologies including React, Next.js, Node.js, and more to build scalable, maintainable solutions. From corporate websites to complex web applications, we deliver excellence.",
    benefits: [
      "Modern, responsive designs that work on all devices",
      "Fast-loading pages for better user experience",
      "SEO-optimized to improve search rankings",
      "Secure and scalable architecture",
      "Custom solutions tailored to your business needs"
    ]
  },
  {
    id: "4",
    title: "DevOps & Automation",
    slug: "devops-automation",
    description: "CI/CD pipeline implementation and Infrastructure as code. Automated deployments and System monitoring and optimization.",
    image: "/service-devops-automation.webp",
    features: [
      "CI/CD pipeline implementation",
      "Infrastructure as code",
      "Automated deployments",
      "System monitoring and optimization"
    ],
    detailedDescription: "Our DevOps and automation services help organizations streamline their software development and deployment processes. We implement industry-standard CI/CD pipelines, containerization with Docker and Kubernetes, and infrastructure-as-code using Terraform and Ansible. This results in faster time-to-market and improved software quality.",
    benefits: [
      "Faster release cycles",
      "Improved software quality",
      "Reduced manual errors",
      "Better collaboration between development and operations",
      "Scalable and repeatable deployments"
    ]
  },
  {
    id: "9",
    title: "Network Solutions",
    slug: "network-solutions",
    description: "Network design and implementation. LAN, WAN, and WiFi solutions.",
    image: "/service-network-solutions.webp",
    features: [
      "Network design and implementation",
      "LAN, WAN, and WiFi solutions",
      "Firewall and network security",
      "Network monitoring and maintenance"
    ],
    detailedDescription: "Our network solutions team designs and implements robust network infrastructures that support your business operations. Whether you need to upgrade your office network, implement WiFi across multiple locations, or connect remote offices through VPN, we have expertise to deliver reliable, secure networks.",
    benefits: [
      "Reliable and high-speed connectivity",
      "Secure network infrastructure",
      "Scalable solutions that grow with your business",
      "Proactive monitoring and maintenance",
      "Reduced network downtime"
    ]
  },
  {
    id: "6",
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Threat detection and prevention. Endpoint and network security and Vulnerability assessments.",
    image: "/service-cyber-security.webp",
    features: [
      "Threat detection and prevention",
      "Endpoint and network security",
      "Vulnerability assessments",
      "Compliance and security audits"
    ],
    detailedDescription: "Cyber security is at core of everything we do. Our comprehensive security services protect your organization from cyber threats, data breaches, and compliance violations. We implement multi-layered security strategies including firewalls, endpoint protection, security awareness training, and incident response planning.",
    benefits: [
      "Protection against cyber threats",
      "Compliance with industry regulations",
      "Reduced risk of data breaches",
      "Quick incident response and recovery",
      "Peace of mind for your business"
    ]
  },
  {
    id: "7",
    title: "IT Support & Maintenance",
    slug: "it-support",
    description: "Proactive system monitoring and Issue resolution and troubleshooting.",
    image: "/service-it-support.webp",
    features: [
      "Proactive system monitoring",
      "Issue resolution and troubleshooting",
      "Patch management and updates",
      "Performance and reliability optimization"
    ],
    detailedDescription: "Our IT support and maintenance services ensure your IT infrastructure runs smoothly 24/7. We provide proactive monitoring, rapid incident response, and preventive maintenance to minimize downtime and maximize productivity. Our help desk is staffed by experienced technicians who can resolve issues quickly.",
    benefits: [
      "Reduced downtime and improved uptime",
      "Fast resolution of IT issues",
      "Proactive problem prevention",
      "Access to expert technical support",
      "Focus on your core business while we handle IT"
    ]
  },
  {
    id: "8",
    title: "IP Telephony",
    slug: "ip-telephony",
    description: "VoIP and IP telephony solutions and Unified communications and Call routing and management.",
    image: "/service-ip-telephony.webp",
    features: [
      "VoIP and IP telephony solutions",
      "Unified communications",
      "Call routing and management",
      "SIP trunking and integration"
    ],
    detailedDescription: "Our IP telephony solutions help businesses modernize their communication infrastructure. We implement VoIP systems that reduce costs while improving call quality and features. From call centers to small businesses, we have solutions that enhance team collaboration and customer experience.",
    benefits: [
      "Significant cost savings on phone bills",
      "Advanced features like voicemail-to-email",
      "Seamless remote work capabilities",
      "Scalable solutions for growing teams",
      "Professional call handling and routing"
    ]
  },
  {
    id: "9",
    title: "IT Consulting",
    slug: "it-consulting",
    description: "IT strategy and roadmap planning and Digital transformation advisory and Infrastructure and system assessment.",
    image: "/service-it-consulting.webp",
    features: [
      "IT strategy and roadmap planning",
      "Digital transformation advisory",
      "Infrastructure and system assessment",
      "Technology optimization"
    ],
    detailedDescription: "Our IT consulting services help organizations align their technology investments with business goals. We provide strategic guidance on digital transformation, technology modernization, and IT governance. Our consultants bring decades of experience across various industries to help you make informed decisions.",
    benefits: [
      "Clear IT strategy aligned with business objectives",
      "Improved decision-making for technology investments",
      "Successful digital transformation",
      "Optimized IT operations",
      "Competitive advantage through technology"
    ]
  },
  {
    id: "10",
    title: "Backup & Disaster Recovery",
    slug: "backup-disaster-recovery",
    description: "Automated data backup solutions and Disaster recovery planning and Business continuity management.",
    image: "/service-backup-disaster-recovery.webp",
    features: [
      "Automated data backup solutions",
      "Disaster recovery planning",
      "Business continuity management",
      "Rapid data restoration"
    ],
    detailedDescription: "Data is one of your most valuable assets. Our backup and disaster recovery services ensure your data is protected and can be quickly restored in case of any incident. We implement automated backups, off-site storage, and comprehensive disaster recovery plans to keep your business running.",
    benefits: [
      "Protection against data loss",
      "Quick recovery from disasters",
      "Business continuity during outages",
      "Compliance with data retention requirements",
      "Peace of mind knowing your data is safe"
    ]
  },
  {
    id: "11",
    title: "Endpoint Management",
    slug: "endpoint-management",
    description: "Device monitoring and control and Security policy enforcement and Software deployment and updates.",
    image: "/service-endpoint-management.webp",
    features: [
      "Device monitoring and control",
      "Security policy enforcement",
      "Software deployment and updates",
      "Remote device management"
    ],
    detailedDescription: "Our endpoint management solutions help organizations secure and manage all devices connected to their network. We implement modern endpoint management platforms that provide visibility, control, and automation for desktops, laptops, mobile devices, and servers. This ensures all endpoints are secure and compliant.",
    benefits: [
      "Centralized device management",
      "Improved security across all endpoints",
      "Automated software patching",
      "Reduced IT workload through automation",
      "Compliance with security policies"
    ]
  },
  {
    id: "12",
    title: "Virtualization Services",
    slug: "virtualization",
    description: "Server and desktop virtualization and Resource optimization and High availability solutions.",
    image: "/service-virtualization.webp",
    features: [
      "Server and desktop virtualization",
      "Resource optimization",
      "High availability solutions",
      "Reduced infrastructure costs"
    ],
    detailedDescription: "Virtualization is key to modern IT infrastructure. Our virtualization services help organizations consolidate servers, reduce hardware costs, and improve resource utilization. We specialize in VMware, Hyper-V, and other leading virtualization platforms to deliver robust, scalable solutions.",
    benefits: [
      "Reduced hardware and energy costs",
      "Improved resource utilization",
      "Faster provisioning of new servers and desktops",
      "Enhanced disaster recovery capabilities",
      "Simplified IT management"
    ]
  },
  {
    id: "13",
    title: "CCTV Configuration & Maintenance",
    slug: "cctv",
    description: "CCTV system design and configuration and Installation and setup of IP cameras and Monitoring and access management.",
    image: "/service-cctv.webp",
    features: [
      "CCTV system design and configuration",
      "Installation and setup of IP cameras",
      "Monitoring and access management",
      "Ongoing maintenance and system support"
    ],
    detailedDescription: "Our CCTV and surveillance solutions help protect your premises, assets, and people. We design and install comprehensive surveillance systems using high-definition IP cameras, network video recorders, and advanced video management software. From small retail shops to large industrial facilities, we have solutions for every need.",
    benefits: [
      "Enhanced security and surveillance",
      "Deterrence of criminal activity",
      "Remote monitoring capabilities",
      "Evidence collection for investigations",
      "Peace of mind for property owners"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
