export const portfolioData = {
  about: {
    name: 'Azhar As Rahmatulloh',
    title: 'Web Developer',
    description: 'I am a passionate Web Developer with 3+ years of experience in crafting robust, performant, and user-friendly web applications. I specialize in PHP (Laravel) and modern JavaScript ecosystems (Next.js, React, Vue.js, Tailwind CSS). I love turning complex logic into clean, elegant, and maintainable code, while delivering smooth and satisfying user experiences.',
    stats: [
      { value: '3+', label: 'Years Experience' },
      { value: '10+', label: 'Projects Done' },
      { value: '10+', label: 'Happy Clients' }
    ],
    skills: {
      frontend: [
        'Vue.js (Vue 3)', 
        'TypeScript', 
        'JavaScript (ES6+)', 
        'Tailwind CSS', 
        'Naive UI', 
        'Pinia', 
        'Next.js', 
        'React', 
        'Framer Motion'
      ],
      backend: [
        'Go (Golang)', 
        'go-chi', 
        'Laravel', 
        'PHP', 
        'Node.js', 
        'RESTful APIs', 
        'JWT Auth & RBAC', 
        'pgx (PostgreSQL Driver)'
      ],
      tools: [
        'PostgreSQL', 
        'MySQL', 
        'MinIO / S3 Storage', 
        'Git & GitLab', 
        'GitHub', 
        'Postman', 
        'Vite', 
        'Vercel', 
        'Jira & Trello'
      ]
    },
   milestones: [
    {
      year: '2026 - Present',
      role: 'System Analyst and AI Prompt Engineer',
      company: 'PT. Indocyber Global Teknologi',
      desc: 'Architecting scalable enterprise system workflows, designing granular business logic, and engineering advanced AI prompt-driven automation to accelerate software delivery and optimize business solutions.'
    },
    {
      year: '2024 - 2026',
      role: 'Full Stack Developer',
      company: 'Hospitality (Brawijaya Hospital Healthcare)',
      desc: 'Developed and maintained core Hospital Information Management Systems (SIMRS), patient management modules, and integrated medical records using robust backend APIs and responsive Vue.js frontend interfaces.'
    },
    {
      year: '2024',
      role: 'Computer Science Graduate (S.Kom)',
      company: 'Trunojoyo University',
      desc: 'Graduated with a solid foundation in software engineering, database architecture, algorithms, and full-stack web application development methodologies.'
    }
  ]
  },
  projects: [
    {
      id: 1,
      title: 'Hospital Information Management System (SIMRS Enterprise)',
      description: 'An integrated hospital management ecosystem featuring electronic medical records (EMR/RME), outpatient & inpatient bed management, pharmacy inventory, and automated integration with national healthcare insurance standards (BPJS VClaim / SatuSehat API).',
      tech_stack: 'Go (Golang), gRPC, Vue 3, TypeScript, PostgreSQL, Redis, Docker, RabbitMQ, MinIO',
      category: 'Healthcare Enterprise',
      image: '',
      demo_url: 'https://demo-simrs.example.com',
      code_url: 'https://github.com/azhar/simrs-enterprise-backend'
    },
    {
      id: 2,
      title: 'Enterprise Resource Planning (ERP) Multi-Entity Suite',
      description: 'A comprehensive multi-company ERP solution covering end-to-end supply chain, dynamic double-entry general ledger, procurement automation, live stock tracking across multi-warehouse locations, and executive real-time reporting.',
      tech_stack: 'Laravel 11, Inertia.js, Vue 3, PostgreSQL, Apache Kafka, Elasticsearch, Tailwind CSS, MinIO',
      category: 'Enterprise Solution',
      image: '',
      demo_url: 'https://demo-erp.example.com',
      code_url: 'https://github.com/azhar/enterprise-erp-core'
    },
    {
      id: 3,
      title: 'Smart E-Clinic & Teleconsultation Platform',
      description: 'A cloud-based primary clinic system with real-time patient queue calling, doctor schedule management, ICD-10 medical charting, digital prescription dispatch, and integrated WebRTC-powered teleconsultation video rooms.',
      tech_stack: 'Next.js 15, TypeScript, Node.js, WebRTC, Socket.io, Tailwind CSS, Prisma, PostgreSQL',
      category: 'Healthtech Platform',
      image: '',
      demo_url: 'https://demo-eclinic.example.com',
      code_url: 'https://github.com/azhar/eclinic-telehealth'
    },
    {
      id: 4,
      title: 'Modular Monolith HRIS & Indonesian Tax (PPh 21 TER) Engine',
      description: 'A full-cycle HR platform featuring 8-tab detailed employee lifecycle, anti-spoofing geotagged attendance, 4-tier matrix workflow engine, and full automated PPh 21 TER (PP 58/2023) payroll with capped BPJS calculations.',
      tech_stack: 'Go (Golang), go-chi, Vue 3, TypeScript, Naive UI, Tailwind CSS, PostgreSQL (pgx), Redis',
      category: 'HR Tech & FinTech',
      image: '',
      demo_url: 'https://demo-hris.example.com',
      code_url: 'https://github.com/azhar/lumina-hris-backend'
    },
    {
      id: 5,
      title: 'Collaborative Project & Resource Management Hub',
      description: 'An agile project governance tool equipped with dynamic interactive Gantt charts, real-time Kanban boards, time-tracking timesheets, role-based workload heatmaps, and webhook integrations for CI/CD notification pipelines.',
      tech_stack: 'React 19, TypeScript, Next.js, GraphQL, Golang Worker, Apache Pulsar, Tailwind CSS, Docker',
      category: 'Productivity & SaaS',
      image: '',
      demo_url: 'https://demo-projman.example.com',
      code_url: 'https://github.com/azhar/agile-pm-engine'
    }
  ]
}

