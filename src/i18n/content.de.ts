import type { SiteContent } from './types';

export const contentDe: SiteContent = {
  sidebar: {
    name: 'Jibin Sebastian',
    title: 'Data Scientist',
    desktopHeading: 'Hallo, ich bin Jibin Sebastian',
    tabs: [
      { id: 'about', label: 'Start' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projekte' },
      { id: 'certifications', label: 'Zertifikate & Auszeichnungen' },
      { id: 'ai-services', label: 'KI-Services' },
      { id: 'contact', label: 'Kontakt' }
    ],
    language: {
      label: 'Sprache',
      english: 'English',
      german: 'Deutsch'
    },
    social: {
      telegram: 'Telegram',
      email: 'E-Mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      homeAriaLabel: 'Start',
      menuAriaLabel: 'Menü öffnen',
      closeMenuAriaLabel: 'Menü schließen'
    },
    stackItems: [
      { label: 'Datenjournalismus' },
      { label: 'Machine Learning' },
      { label: 'Deep Learning' },
      { label: 'MLOps' },
      { label: 'Predictive Maintenance Modelle' },
      { label: 'Predictive Analytics Modelle' },
      { label: 'Python' },
      { label: 'Azure' }
    ]
  },

  about: {
    hero: {
      headline: 'Menschlich im Design, KI im Handwerk',
      paragraphs: [
        'Ich bin AI Software Engineer und habe eine große Leidenschaft dafür, komplexe reale Herausforderungen mit innovativen und skalierbaren KI-Lösungen zu lösen. Ich halte mich kontinuierlich über die neuesten Entwicklungen in künstlicher Intelligenz, Machine Learning und datengetriebenen Technologien auf dem Laufenden und entwickle Systeme, die sowohl technisch robust als auch geschäftsorientiert sind.',
        'Neben der Umsetzung von Lösungen suche ich aktiv nach spannenden und wirkungsvollen KI-Projekten, in denen Technologie messbaren Mehrwert schafft. Ich arbeite gerne mit Einzelpersonen, Start-ups und Organisationen zusammen, um Ideen in intelligente Produkte zu verwandeln, Prozesse zu optimieren und neue Chancen durch KI zu erschließen.',
        'Ich unterstütze End-to-End – vom Problemverständnis und der Datenstrategie über Modellentwicklung und Deployment bis hin zur Optimierung. So helfe ich Unternehmen, von klassischen Workflows zu KI-gestützter Entscheidungsfindung und Automatisierung zu wechseln. Mein Ziel ist es, Teams dabei zu befähigen, KI verantwortungsvoll und effektiv einzusetzen – praxisnah, skalierbar und klar an den Geschäftsziele ausgerichtet.'
      ],
      buttons: {
        cv: 'Lebenslauf',
        github: 'GitHub',
        aiServices: 'KI-Services',
        cvAriaLabel: 'Lebenslauf herunterladen'
      }
    },
    professionalProfile: {
      title: 'Profil',
      paragraphs: [
        'Data-Science-Enthusiast und Analyst mit Leidenschaft für die Lösung realer Business-Herausforderungen. Ich bleibe stets auf dem neuesten Stand der Data-Science-Trends und möchte in einer fortschrittlichen Organisation arbeiten, die meinen Horizont erweitert und mir ermöglicht, meine Fähigkeiten wirkungsvoll einzusetzen.',
        'Mit Erfahrung in Machine Learning, Deep Learning und MLOps bringe ich einen ganzheitlichen Ansatz zur datengetriebenen Problemlösung mit. Ich arbeite mit modernen Technologien und Frameworks, um wirkungsvolle Lösungen in Predictive Analytics und Predictive Maintenance umzusetzen.'
      ]
    },
    experiences: [
      {
        role: 'AI Software Engineer',
        company: 'SupplyOn AG',
        period: '2023 - Heute',
        description: [
          'Datenanalyse & -aufbereitung mit Python (Pandas, NumPy, Seaborn, Matplotlib)',
          'Mitwirkung bei Konzeption und Umsetzung von Analytics-Lösungen mit Power BI für bessere datenbasierte Entscheidungen',
          'Entwicklung von Ideen und Prototypen zu Kundenanforderungen rund um das Lieferkettensorgfaltspflichtengesetz, CO2-Emissionen sowie Umwelt- und Sozialstandards',
          'Erarbeitung von Konzepten und Anforderungen für Produktfeatures, Dashboards und Big-Data-Anwendungen auf Basis von User Stories',
          'Erstellung von Prozessskizzen und Mockups zur Visualisierung von Lösungen und Workflows',
          'Prototyping mit Power BI, SQL und Python im Microsoft-Azure-Tech-Stack',
          'Zusammenarbeit mit Produktteams, Entwicklung und AI Centre of Competence zur Förderung von Innovationen in Supply-Chain-Nachhaltigkeitslösungen'
        ]
      },
      {
        role: 'Data Scientist',
        company: 'SICK Sensor Intelligence',
        period: '2022 - 2023',
        description: [
          'Datenanalyse & -aufbereitung mit Python (Pandas, NumPy, Seaborn, Matplotlib)',
          'Hyperparameter-Optimierung mit AutoSklearn und Optuna',
          'Modellentwicklung und Evaluation (scikit-learn, TensorFlow, Keras)',
          'Verbesserung der Code-Qualität mit pytest, mypy und Fokus auf Clean Code',
          'Einsatz von MLOps-Tools (DVC, Git, GitLab) und Entwicklung auf Linux',
          'Textanalyse (TF-IDF-Clustering)',
          'Sammlung und Auswertung von Service-Reports in großem Umfang zum Aufbau einer geeigneten Datenbasis',
          'Automatisierung der Datenextraktion aus PDFs mit Python und Bash',
          'Textanalyse mit LLM und NLP zur Identifikation wichtiger Ereignisse in Service-Reports',
          'Datenvorverarbeitung und Data-Cleaning'
        ]
      },
      {
        role: 'Werkstudent Data Management',
        company: 'Creditshelf AG',
        period: '2021 - 2022',
        description: [
          'Datenaufbereitung, Qualitätskontrolle und Auswertung mit Python',
          'Datenanalyse mit PostgreSQL',
          'Dockerisierung von Apps und Deployment in Kubernetes-Clustern',
          'Implementierung von APIs für Datenfluss-Management',
          'Dokumentenklassifikation mit Machine Learning'
        ]
      },
      {
        role: 'Systems Engineer',
        company: 'Infosys Pvt Ltd',
        period: '2017 - 2020',
        description: [
          'Incident- und Change-Management (ITIL)',
          'Applikationsanalyse und Monitoring',
          'Kubernetes für Container-Orchestrierung',
          'Containerisierte Microservices',
          'Monitoring mit Splunk, AppDynamics und Custom Dashboards',
          'Unix- und Windows-Administration'
        ]
      }
    ],
    education: {
      title: 'Ausbildung',
      highlight: 'MSc in Data Science',
      description:
        'Mein Bildungshintergrund umfasst einen MSc in Data Science. Dabei habe ich u. a. an Projekten wie Flugpreisprognosen und Kundensegmentierung mit Machine-Learning-Methoden gearbeitet. Außerdem habe ich an einer Forschungsarbeit zur Klassifikation von Aktivitätsgruppen anhand von Motion-Capture-Daten mitgewirkt.'
    }
  },

  skills: {
    title: 'Skills',
    categories: [
      {
        title: 'Data-Science-Toolkit',
        skills: [
          'Python (Scikit-learn, Pandas, Numpy, Keras)',
          'Visualisierung (Seaborn, Tableau)',
          'Explorative Datenanalyse (EDA)',
          'Extract-Transform-Load Pipelines (ETL)',
          'Feature Engineering',
          'Textanalyse: NLP, LLM (Mistral)'
        ]
      },
      {
        title: 'Machine-Learning-Algorithmen',
        skills: [
          'Scikit-Learn, Random Forest',
          'Naive Bayes, Support Vector Machine',
          'Clustering',
          'Lineare & logistische Regression, XGBOOST (Gradient Boosting)',
          'Neuronale Netze (Tensorflow, CNN, ANN)'
        ]
      },
      {
        title: 'Data-Engineering-Toolkit',
        skills: ['REST API mit Flask', 'FAST API', 'Docker, Kubernetes', 'MLOps', 'PostgreSQL (Basics)']
      },
      {
        title: 'Allgemein',
        skills: [
          'Agile Scrum Methodik',
          'GIT und DVC (Data Version Control)',
          'Visual Studio Code IDE',
          'Windows & Linux, Jupyter Notebooks, Unix',
          'React JS (Grundlagen)'
        ]
      }
    ]
  },

  projects: {
    title: 'PROJEKTE',
    githubButton: 'Zum GitHub-Repo',
    items: [
      {
        title: 'THESIS\nStock Market Performance Analysis',
        description: `Thema: Using Python and Data Science to Analyse the Interplay of Socio-Economic Factors, Index Dependencies and Seasonal Variations on Stock Market Performance

Diese Thesis schließt eine Forschungslücke, indem sie diese drei Dimensionen gleichzeitig mit Python analysiert. Ziele:
(1) Quantifizierung, inwieweit große Indizes (NASDAQ100, S&P500) von einer kleinen Anzahl von Unternehmen abhängen;
(2) Bewertung des Einflusses sozioökonomischer Faktoren auf Aktienmarktrenditen; und
(3) Analyse saisonaler Muster (insbesondere Unterperformance im September und kontrastierende Trends im Oktober).

Methodik & Tools: Datensammlung, Preprocessing, Visualisierung, Modellierung und Analyse mit Pandas, NumPy, Plotly, Statsmodels und Scikit-learn; Zeitreihen- sowie Regressions-/ökonometrische Modelle; ML Feature-Importance-Ranking; sowie ein Generative-AI-/Large-Language-Model zur Unterstützung der Analyse saisonaler Trends.`,
        githubUrl: 'https://github.com/jibin-sebastian/mythesis'
      },
      {
        title: 'RESEARCH CASE STUDY',
        description:
          'Diese Forschungsarbeit widmet sich der automatisierten Klassifikation von Aktivitätsgruppen auf Basis eines kleinen Satzes empirischer Bewegungsdaten aus dem Projekt „SiNuS-Pflege“. Der zugrunde liegende Datensatz umfasst Motion-Capture-Daten sowie eine große Anzahl von Beobachtungen, wobei die Notwendigkeit besteht, Informationen indirekt aus verschiedenen Sensordevices (Smartphones, Fitness-Tracker, Smartwatches) zu extrahieren. Wissensextraktion aus Sensoraufzeichnungen und Transformation wurden in separaten Schritten durchgeführt. Zur Anwendung kamen Dimensionalitätsreduktionstechniken (PCA, ISOMAP, UMAP) sowie Clustering-Algorithmen (hierarchisches agglomeratives Clustering, Gaussian (Bayesian-based) K-Means, DBSCAN, BIRCH), um das Vorhandensein stabiler Cluster unter den Teilnehmenden zu untersuchen.',
        githubUrl: '#'
      },
      {
        title: 'FLIGHT FARE PREDICTION',
        description:
          'In diesem umfassenden Machine-Learning-Projekt habe ich die CRISP-DM-Methodik (Cross-Industry Standard Process for Data Mining) konsequent angewendet. Zunächst erfolgte umfangreiches Preprocessing zum Verständnis der Datenstruktur, zur Mustererkennung und zur Identifikation von Anomalien. Anschließend wurden Daten bereinigt (fehlende Werte, Ausreißer, Inkonsistenzen). Es folgte eine iterative Hyperparameter-Optimierung zur Maximierung der Vorhersageleistung mit robusten Validierungsverfahren. Abschließend wurde das Modell auf AWS bereitgestellt, um es skalierbar und in der Praxis nutzbar zu machen.',
        githubUrl: '#'
      },
      {
        title: 'UNSUPERVISED MACHINE LEARNING FOR CUSTOMER MARKET SEGMENTATION',
        description:
          'Hier habe ich mit Unsupervised-Learning-Algorithmen gearbeitet. Ziel war die Segmentierung von Bankkund:innen mittels Clustering. Nach Preprocessing wurde KMeans angewendet; mit der Elbow-Methode wurde die optimale Clusteranzahl bestimmt. Zusätzlich wurden korrelierte Faktoren identifiziert und PCA zur Dimensionsreduktion genutzt, um den Rechenaufwand zu senken.',
        githubUrl: '#'
      },
      {
        title: 'BREAST CANCER DETECTION USING DIFFERENT ML ALGORITHMS',
        description:
          'In diesem Projekt habe ich verschiedene Machine-Learning-Algorithmen implementiert, um die Wahrscheinlichkeit von Brustkrebs zu klassifizieren. Dazu wurden EDA und Feature-Analysen (u. a. Pearson-Korrelation) durchgeführt und hoch korrelierte Features identifiziert. Modelle wie logistische Regression, SVM, Random Forest und KNN wurden evaluiert. Nach Hyperparameter-Optimierung erreichte die logistische Regression eine Genauigkeit von 98%.',
        githubUrl: '#'
      },
      {
        title: 'AWS SAGEMAKER',
        description:
          'Fokus auf den Aufbau eines End-to-End-Modells für eine Bankanwendung mit SageMaker Notebook (Python). Schritte: (1) Libraries importieren, (2) S3-Bucket erstellen, (3) Train/Test-Daten in S3 ablegen, (4) Model-Pfad in S3 mappen.',
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
    title: 'Zertifikate & Auszeichnungen'
  },

  aiServices: {
    title: 'KI-Services',
    subtitle: 'End-to-End KI- & Automatisierungslösungen',
    introTitle: 'Ganzheitliche KI-Unterstützung',
    intro:
      'Ich unterstütze Unternehmen End-to-End bei KI und Automatisierung – von der Modernisierung von Abläufen über die Integration intelligenter Systeme bis hin zur Beschleunigung datenbasierter Entscheidungen. Meine Services umfassen das Design praxistauglicher KI-Workflows, die Entwicklung leichter Prototypen, die Operationalisierung von Modellen sowie den Aufbau datengetriebener Tools, die auf reale Business-Bedürfnisse zugeschnitten sind.',
    offerTitle: 'Leistungen',
    services: [
      {
        title: 'KI-Workflow-Design',
        description:
          'Entwurf praxistauglicher KI-Workflows, zugeschnitten auf Ihre Geschäftsprozesse – für nahtlose Integration in bestehende Systeme und maximale operative Effizienz.',
        color: '#06b6d4'
      },
      {
        title: 'Leichte Prototypen',
        description:
          'Schnelle, schlanke KI-Prototypen zur zügigen Validierung von Konzepten, zum Testen von Hypothesen und zum Aufzeigen von Mehrwert vor der Full-Scale-Implementierung.',
        color: '#8b5cf6'
      },
      {
        title: 'Model Operationalization',
        description:
          'Operationalisierung von Machine-Learning-Modellen mit MLOps-Best-Practices – zuverlässiges Deployment, Monitoring und kontinuierliche Verbesserung im Betrieb.',
        color: '#3b82f6'
      },
      {
        title: 'Datengetriebene Tools',
        description:
          'Entwicklung maßgeschneiderter Daten-Tools und Dashboards, die Rohdaten in umsetzbare Erkenntnisse verwandeln und Teams bei Entscheidungen unterstützen.',
        color: '#10b981'
      },
      {
        title: 'Automatisierungslösungen',
        description:
          'Implementierung intelligenter Automatisierung, um repetitive Aufgaben zu reduzieren, manuellen Aufwand zu senken und Prozesse zu beschleunigen.',
        color: '#f59e0b'
      },
      {
        title: 'Business-Integration',
        description:
          'Ausrichtung von KI-Lösungen an echten Business-Anforderungen – mit Fokus auf messbare Ergebnisse und praxistaugliche Implementierungsstrategien.',
        color: '#ec4899'
      }
    ],
    ctaTitle: 'Bereit, Ihr Business mit KI zu transformieren?',
    ctaDescription:
      'Lassen Sie uns besprechen, wie KI und Automatisierung Innovation und Effizienz in Ihrer Organisation vorantreiben können. Von der Idee bis zum Deployment begleite ich Sie mit pragmatischen, ergebnisorientierten Lösungen.',
    ctaButton: 'Kontakt aufnehmen'
  },

  contact: {
    title: 'Kontakt',
    infoTitle: 'Kontaktinformationen',
    followTitle: 'Folgen',
    locationValue: 'Stuttgart, Deutschland',
    labels: {
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      yourName: 'Ihr Name',
      yourEmail: 'Ihre E-Mail',
      subject: 'Betreff',
      message: 'Nachricht'
    },
    placeholders: {
      name: 'Max Mustermann',
      email: 'max@example.com',
      subject: 'Projektanfrage',
      message: 'Erzählen Sie mir von Ihrem Projekt...'
    },
    submit: {
      sending: 'Wird gesendet...',
      send: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet! Ich melde mich in Kürze.',
      error:
        'Senden fehlgeschlagen. Bitte prüfen Sie EmailJS Service ID, Template ID, Public Key und die Template-Variablen.'
    }
  }
};

