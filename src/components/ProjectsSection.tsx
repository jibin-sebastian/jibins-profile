import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  delay: number;
  githubUrl?: string;
}
function ProjectCard({
  title,
  description,
  delay,
  githubUrl
}: ProjectCardProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay
  }} whileHover={{
    y: -5
  }} className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-300" />

      <div className="relative">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {githubUrl && <motion.a href={githubUrl} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
            <GithubIcon size={18} />
            Go to GitHub Repo
          </motion.a>}
      </div>
    </motion.div>;
}
export function ProjectsSection() {
  const projects = [{
    title: 'RESEARCH CASE STUDY',
    description: 'This research paper is dedicated to the attempts of automated classification of activity groups based on a small set of empirical motion data collected in the „SiNuS-Pflege" project. The underlying dataset encompasses motion-capture data as well as a large number of observations relatively small as well as the necessity for indirect extraction of information from various sensor devices including smartphones, fitness trackers, and smartwatches. While dealing with an unconventional dataset, knowledge extraction from sensors records and overall transformation were executed in separate steps. In pursuit of the application of different dimensionality reduction techniques (PCA, ISOMAP, UMAP), several clustering algorithms (hierarchical agglomerative clustering, Gaussian (Bayesian-based)K-Means, DBSCAN, BIRCH were consequently applied and the results were tracked down to reveal the possibility of the presence of sustainable clusters among participants of the experiment.',
    githubUrl: '#'
  }, {
    title: 'FLIGHT FARE PREDICTION',
    description: "In this comprehensive machine learning project, I meticulously followed the CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology, adhering to its structured approach throughout the entire lifecycle. Initially, extensive data preprocessing was conducted to span missing data into the dataset including understanding its structure, identifying potential patterns, and detecting any anomalies. Subsequently, rigorous data cleaning processes were employed to ensure dataset integrity, addressing missing values, handling outliers, and resolving inconsistencies. Moreover, I dedicated significant effort to hyperparameter optimization, fine-tuning the parameters to maximize predictive performance. This iterative process involved systematically adjusting the hyperparameters and evaluating the model's performance using robust validation techniques to ensure generalizability and reliability. Finally, I deployed it on AWS (Amazon Web Services), leveraging cloud infrastructure to make the predictive model accessible and scalable for real-world applications.",
    githubUrl: '#'
  }, {
    title: 'UNSUPERVISED MACHINE LEARNING FOR CUSTOMER MARKET SEGMENTATION',
    description: 'Here, I dealt with unsupervised machine learning algorithms. In this project, I have worked on clustering techniques that are used to find the various categories of banking customers. Performed data preprocessing before applying KMeans clustering. By using the Elbow method, identified the optimal number of clusters. Find the factors which have a high correlation in order to make clustering easier. Performed dimensionality reduction such as Principal Component Analysis to reduce the computational expense.',
    githubUrl: '#'
  }, {
    title: 'BREAST CANCER DETECTION USING DIFFERENT ML ALGORITHMS',
    description: 'In this project, I have implemented different machine learning algorithms to detect if the new data indicates the chances of cancer cells in the breast or not. Carried out Exploratory data analysis like data processing, univariate data analysis, bivariate data analysis, Pearson Correlation to find the highly correlated features in the data set. Performed machine learning algorithms such as logistic regression, SVM, Random forest and KNN. Among these algorithms, logistic regression has a high accuracy of 98% after the hyperparameter optimization.',
    githubUrl: '#'
  }, {
    title: 'AWS SAGEMAKER',
    description: 'We will be focusing on building an end-to-end bank application model by using SageMaker console notebook in python. Here we are learning how to use AWS Sagemaker to implement the machine learning algorithm on banking data.\n\nStep 1-Importing necessary Libraries\nStep 2-Creating S3 Bucket\nStep 3-Mapping Train and Test Data in S3\nStep 4-Mapping the path of the Models in S3',
    githubUrl: '#'
  }, {
    title: 'Whats Next ???\nDL4 Newbies : Deep Learning project for beginners',
    description: 'Learn - Build\n\nExperience',
    githubUrl: '#'
  }];
  return <div>
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">PROJECTS</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => <ProjectCard key={project.title} title={project.title} description={project.description} delay={0.1 + index * 0.1} githubUrl={project.githubUrl} />)}
      </div>
    </div>;
}