import type { SiteContent } from './types';

export const contentEn: SiteContent = {
  sidebar: {
    name: 'Jibin Sebastian',
    title: 'Data Scientist',
    desktopHeading: "Hi, I'm Jibin Sebastian",
    tabs: [
      { id: 'about', label: 'Home' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'certifications', label: 'Certifications & Awards' },
      { id: 'ai-services', label: 'AI Services' },
      { id: 'contact', label: 'Contact' }
    ],
    language: {
      label: 'Sprache',
      english: 'English',
      german: 'Deutsch'
    },
    social: {
      telegram: 'Telegram',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      homeAriaLabel: 'Home',
      menuAriaLabel: 'Open menu',
      closeMenuAriaLabel: 'Close menu'
    },
    stackItems: [
      { label: 'Data Journalist' },
      { label: 'Machine Learning' },
      { label: 'Deep Learning' },
      { label: 'MLOps' },
      { label: 'Predictive Maintenance Modeling' },
      { label: 'Predictive Analytics Modeling' },
      { label: 'Python' },
      { label: 'Azure' }
    ]
  },

  about: {
    hero: {
      headline: 'Human by design, AI by craft',
      paragraphs: [
        'I am an AI Software Engineer with a strong passion for solving complex, real-world challenges through innovative and scalable AI-driven solutions. I continuously stay up to date with the latest advancements in artificial intelligence, machine learning, and data-centric technologies, enabling me to design systems that are both technically robust and business-focused.',
        'Beyond building solutions, I am actively seeking interesting and impactful AI projects where technology can create measurable value. I enjoy collaborating with individuals, startups, and organizations to help them turn ideas into intelligent products, optimize processes, and unlock new opportunities using AI.',
        'I provide end-to-end support—from problem understanding and data strategy to model development, deployment, and optimization—helping businesses transition from traditional workflows to AI-driven decision-making and automation. My goal is to empower teams and initiatives to adopt AI responsibly and effectively, ensuring solutions are practical, scalable, and aligned with real business objectives.'
      ],
      buttons: {
        cv: 'My CV',
        github: 'GitHub',
        aiServices: 'AI Services',
        cvAriaLabel: 'Download resume'
      }
    },
    professionalProfile: {
      title: 'Professional Profile',
      paragraphs: [
        'Data Science enthusiast and Analyst with a passion for solving real-world business challenges. Always up to date on the latest data science trends, I seek to work in a progressive organization that can broaden my knowledge and provide opportunities to utilize my skills effectively.',
        'With expertise spanning machine learning, deep learning, and MLOps, I bring a comprehensive approach to data-driven problem solving. My experience includes working with cutting-edge technologies and frameworks to deliver impactful solutions in predictive analytics and maintenance modeling.'
      ]
    },
    experiences: [
      {
        role: 'AI Software Engineer',
        company: 'SupplyOn AG',
        period: '2023 - Present',
        description: [
          'Data analysis & preprocessing using Python libraries (Pandas, NumPy, Seaborn, Matplotlib)',
          'Supported designing and implementing analytics solutions using Power BI to enhance data-driven decision-making',
          'Developed ideas and prototypes to address customer requirements related to the Supply Chain Sustainability Act, CO2 emissions, and environmental & social standards',
          'Designed concepts and requirements for product features, dashboards, and big data applications based on user stories',
          'Created process sketches and mockups to visualize solutions and workflows',
          'Built prototypes using Power BI, SQL, and Python within the Microsoft Azure Cloud tech stack',
          'Collaborated with product teams, development departments, and the AI Centre of Competence to drive innovation in supply chain sustainability solutions'
        ]
      },
      {
        role: 'Data Scientist',
        company: 'SICK Sensor Intelligence',
        period: '2022 - 2023',
        description: [
          'Data analysis & preprocessing using Python libraries (Pandas, NumPy, Seaborn, Matplotlib)',
          'Hyperparameter optimization using AutoSklearn and Optuna frameworks',
          'Model building and evaluation (scikit-learn, TensorFlow, Keras)',
          'Improved code quality using pytest, mypy, and a focus on clean code development',
          'Used MLOps tools: DVC, Git, GitLab; developed on Linux platform',
          'Text analysis (TF-IDF clustering)',
          'Collected and evaluated service reports at scale to build a suitable database',
          'Automated data extraction from PDF files using Python and Bash scripting',
          'Implemented text analysis techniques using LLM and NLP to identify major events listed in service reports',
          'Performed data preprocessing and data cleaning tasks'
        ]
      },
      {
        role: 'Working Student in Data Management',
        company: 'Creditshelf AG',
        period: '2021 - 2022',
        description: [
          'Data preparation, quality control, and evaluation using Python libraries',
          'Data analysis using PostgreSQL',
          'Dockerized apps and deployed them in Kubernetes clusters',
          'Implemented APIs for data flow management',
          'Document classification using machine learning'
        ]
      },
      {
        role: 'Systems Engineer',
        company: 'Infosys Pvt Ltd',
        period: '2017 - 2020',
        description: [
          'Incident and change management (ITIL)',
          'Application analysis and monitoring',
          'Kubernetes for container orchestration',
          'Containerized microservices',
          'Monitoring with Splunk, AppDynamics, and custom dashboards',
          'Unix and Windows administration'
        ]
      }
    ],
    education: {
      title: 'Education',
      highlight: 'MSc in Data Science',
      description:
        "My educational background includes an MSc in Data Science, where I worked on various projects such as flight fare prediction and customer market segmentation using machine learning techniques. Worked on a research paper on activity group classification using motion-capture data."
    }
  },

  skills: {
    title: 'Skills',
    categories: [
      {
        title: 'Data Science Toolkit',
        skills: [
          'Python (Scikit-learn, Pandas, Numpy, Keras)',
          'Visualizations (Seaborn, Tableau)',
          'Exploratory Data Analysis (EDA)',
          'Extract-Transform-Load Pipelines (ETL)',
          'Feature Engineering',
          'Text Analysis: NLP, LLM (Mistral)'
        ]
      },
      {
        title: 'Machine Learning Algorithms',
        skills: [
          'Scikit-Learn, Random Forest',
          'Naive Bayes, Support Vector Machine',
          'Clustering',
          'Linear and Logistic Regression, XGBOOST (Gradient Boosting)',
          'Neural Networks (Tensorflow, CNN, ANN)'
        ]
      },
      {
        title: 'Data Engineering Toolkit',
        skills: ['REST API with Flask', 'FAST API', 'Docker, Kubernetes', 'MLOps', 'PostgreSQL (basic)']
      },
      {
        title: 'General',
        skills: [
          'Agile Scrum Methodology',
          'GIT and DVC (Data Version Control)',
          'Visual Studio Code IDE',
          'Windows & Linux, Jupyter Notebooks, Unix',
          'React JS (Basics)'
        ]
      }
    ]
  },

  projects: {
    title: 'PROJECTS',
    githubButton: 'Go to GitHub Repo',
    items: [
      {
        title: 'THESIS\nStock Market Performance Analysis',
        description: `Topic: Using Python and Data Science to Analyse the Interplay of Socio-Economic Factors, Index Dependencies and Seasonal Variations on Stock Market Performance

This thesis addresses a research gap by analyzing these three dimensions simultaneously using Python. Objectives:
(1) quantify how major indices (NASDAQ100, S&P500) depend on a small set of companies;
(2) assess the impact of socio-economic factors on stock market returns; and
(3) examine seasonal patterns (notably September under-performance and contrasting October trends).

Methodology & tools: data collection, preprocessing, visualization, modeling and analysis using Pandas, NumPy, Plotly, Statsmodels and Scikit-learn; time-series and regression/econometric models; ML feature-importance ranking; and a Generative AI / large language model to support seasonal trend analysis.`,
        githubUrl: 'https://github.com/jibin-sebastian/mythesis'
      },
      {
        title: 'RESEARCH CASE STUDY',
        description:
          'This research paper is dedicated to the attempts of automated classification of activity groups based on a small set of empirical motion data collected in the „SiNuS-Pflege" project. The underlying dataset encompasses motion-capture data as well as a large number of observations relatively small as well as the necessity for indirect extraction of information from various sensor devices including smartphones, fitness trackers, and smartwatches. While dealing with an unconventional dataset, knowledge extraction from sensors records and overall transformation were executed in separate steps. In pursuit of the application of different dimensionality reduction techniques (PCA, ISOMAP, UMAP), several clustering algorithms (hierarchical agglomerative clustering, Gaussian (Bayesian-based)K-Means, DBSCAN, BIRCH were consequently applied and the results were tracked down to reveal the possibility of the presence of sustainable clusters among participants of the experiment.',
        githubUrl: '#'
      },
      {
        title: 'FLIGHT FARE PREDICTION',
        description:
          "In this comprehensive machine learning project, I meticulously followed the CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology, adhering to its structured approach throughout the entire lifecycle. Initially, extensive data preprocessing was conducted to span missing data into the dataset including understanding its structure, identifying potential patterns, and detecting any anomalies. Subsequently, rigorous data cleaning processes were employed to ensure dataset integrity, addressing missing values, handling outliers, and resolving inconsistencies. Moreover, I dedicated significant effort to hyperparameter optimization, fine-tuning the parameters to maximize predictive performance. This iterative process involved systematically adjusting the hyperparameters and evaluating the model's performance using robust validation techniques to ensure generalizability and reliability. Finally, I deployed it on AWS (Amazon Web Services), leveraging cloud infrastructure to make the predictive model accessible and scalable for real-world applications.",
        githubUrl: '#'
      },
      {
        title: 'UNSUPERVISED MACHINE LEARNING FOR CUSTOMER MARKET SEGMENTATION',
        description:
          'Here, I dealt with unsupervised machine learning algorithms. In this project, I have worked on clustering techniques that are used to find the various categories of banking customers. Performed data preprocessing before applying KMeans clustering. By using the Elbow method, identified the optimal number of clusters. Find the factors which have a high correlation in order to make clustering easier. Performed dimensionality reduction such as Principal Component Analysis to reduce the computational expense.',
        githubUrl: '#'
      },
      {
        title: 'BREAST CANCER DETECTION USING DIFFERENT ML ALGORITHMS',
        description:
          'In this project, I have implemented different machine learning algorithms to detect if the new data indicates the chances of cancer cells in the breast or not. Carried out Exploratory data analysis like data processing, univariate data analysis, bivariate data analysis, Pearson Correlation to find the highly correlated features in the data set. Performed machine learning algorithms such as logistic regression, SVM, Random forest and KNN. Among these algorithms, logistic regression has a high accuracy of 98% after the hyperparameter optimization.',
        githubUrl: '#'
      },
      {
        title: 'AWS SAGEMAKER',
        description:
          'We will be focusing on building an end-to-end bank application model by using SageMaker console notebook in python. Here we are learning how to use AWS Sagemaker to implement the machine learning algorithm on banking data.\n\nStep 1-Importing necessary Libraries\nStep 2-Creating S3 Bucket\nStep 3-Mapping Train and Test Data in S3\nStep 4-Mapping the path of the Models in S3',
        githubUrl: '#'
      },
      {
        title: 'Whats Next ???\nDL4 Newbies : Deep Learning project for beginners',
        description: 'Learn - Build\n\nExperience',
        githubUrl: '#'
      }
    ]
  },

  certifications: {
    title: 'Certifications & Awards'
  },

  aiServices: {
    title: 'AI Services',
    subtitle: 'End-to-End AI & Automation Solutions',
    introTitle: 'Comprehensive AI Support',
    intro:
      'I provide end-to-end AI and automation support for businesses looking to modernize operations, integrate intelligent systems, and accelerate decision-making. My services focus on designing practical AI workflows, developing lightweight prototypes, operationalizing models, and building data-driven tools tailored to real business needs.',
    offerTitle: 'What I Offer',
    services: [
      {
        title: 'AI Workflow Design',
        description:
          'Design practical AI workflows tailored to your business processes, ensuring seamless integration with existing systems and maximum operational efficiency.',
        color: '#06b6d4'
      },
      {
        title: 'Lightweight Prototypes',
        description:
          'Develop rapid, lightweight AI prototypes to validate concepts quickly, test hypotheses, and demonstrate value before full-scale implementation.',
        color: '#8b5cf6'
      },
      {
        title: 'Model Operationalization',
        description:
          'Operationalize machine learning models with MLOps best practices, ensuring reliable deployment, monitoring, and continuous improvement in production.',
        color: '#3b82f6'
      },
      {
        title: 'Data-Driven Tools',
        description:
          'Build custom data-driven tools and dashboards that transform raw data into actionable insights, empowering teams to make informed decisions.',
        color: '#10b981'
      },
      {
        title: 'Automation Solutions',
        description:
          'Implement intelligent automation systems that streamline repetitive tasks, reduce manual effort, and accelerate business operations.',
        color: '#f59e0b'
      },
      {
        title: 'Business Integration',
        description:
          'Ensure AI solutions align with real business needs, focusing on measurable outcomes and practical implementation strategies.',
        color: '#ec4899'
      }
    ],
    ctaTitle: 'Ready to Transform Your Business with AI?',
    ctaDescription:
      "Let's discuss how AI and automation can drive innovation and efficiency in your organization. From concept to deployment, I'll help you navigate the AI landscape with practical, results-driven solutions.",
    ctaButton: 'Get in Touch'
  },

  contact: {
    title: 'Get In Touch',
    infoTitle: 'Contact Information',
    followTitle: 'Follow Me',
    locationValue: 'Stuttgart, Germany',
    labels: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Message'
    },
    placeholders: {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Project Inquiry',
      message: 'Tell me about your project...'
    },
    submit: {
      sending: 'Sending...',
      send: 'Send Message',
      success: "Message sent successfully! I'll get back to you soon.",
      error: 'Failed to send message. Please verify EmailJS Service ID, Template ID, Public Key, and template variables.'
    }
  }
};

