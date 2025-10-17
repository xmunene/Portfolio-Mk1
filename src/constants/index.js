const navLinks = [
    {
      name: 'About',
      link: '#about',
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Journey",
      link: "#journey",
    },
    {
      name: "Skills",
      link: "#skills",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];

  const aboutItems = [
    {
      icon: "🎯",
      title: "Mission",
      description: "Transforming innovative ideas into digital solutions that solve real-world problems and create meaningful impact."
    },
    {
      icon: "🚀",
      title: "Passion",
      description: "Full-stack development with a focus on modern web technologies, 3D experiences, and user-centered design."
    },
    {
      icon: "🌍",
      title: "Location",
      description: "Based in Nairobi, Kenya, serving clients globally with a deep understanding of both local and international markets."
    },
    {
      icon: "💡",
      title: "Approach",
      description: "Collaborative, detail-oriented, and committed to delivering high-quality solutions that exceed expectations."
    }
  ];
    
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
    {
      name: "Mobile Developer",
      modelPath: "/models/Flutter.glb",
      scale: 30,
      rotation: [0, 0, 0],
    },
    {
      name: "OO-Programmer",
      modelPath: "/models/c++.glb",
      scale: 0.08,
      rotation: [0, 0, 0],
    },
    {
      name: "Web Designer",
      modelPath: "/models/figma.glb",
      scale: 1.4,
      rotation: [-4.5, 0, 0],
    },
    {
      name: "CMS Developer",
      modelPath: "/models/wordpress-v1.glb",
      scale: 0.15,
      rotation: [1.5, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/docker_whale-v1.glb",
      scale: 1.3,
      rotation: [0, 0, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Modern web standards for structure and styling, enabling responsive and accessible interfaces with advanced layout techniques and animations.",
      imgPath: "/images/htmllogo.png",
      imgPath2: "/images/csslogo.png",
      imgPath3: "/images/figmalogo.png",
      imgPath4: "/images/jslogolong.png",
      logoPath: "/images/jslogo.png",
      title: "Foundation Phase",
      date: "January 2023 - August 2023",
      responsibilities: [
        "Semantic markup, FlexBox, Grid, responsive design, CSS animations.",
        "Arrow functions, destructuring, async/await, modules, DOM manipulation.",
        "Components, JSX, state management, hooks, event handling, component lifecycle.",
      ],
    },
    {
      review:
        "State management solutions for complex React applications, providing predictable state containers for JavaScript applications.",
      imgPath: "/images/reactlogo.png",
      imgPath2: "/images/gitlogo.png",
      imgPath3: "/images/nodejslogo.png",
      imgPath4: "/images/typescriptlogo.png",
      logoPath: "/images/reacticon.png",
      title: "Growth Phase",
      date: "September 2023 - June 2024",
      responsibilities: [
        "Version control, branching, merging, collaboration workflows, CI/CD basics.",
        "NoSQL concepts, document modeling, aggregation pipeline, indexing.",
        "Static typing, interfaces, generics, type guards, compile-time error checking.",
      ],
    },
    {
      review:
        "Production-ready applications with enhanced performance, SEO capabilities, and full-stack development features.",
      imgPath: "/images/flutterlogo1.png",
      imgPath2: "/images/convexlogo.png",
      imgPath3: "/images/pythonlogo.png",
      imgPath4: "/images/next.js-logo.jpg",
      logoPath: "/images/convexlogo.png",
      title: "Specialization Phase",
      date: "July 2025 - Present",
      responsibilities: [
        "Scikit-learn, data preprocessing, model training, evaluation metrics.",
        "Custom hooks, compound components, render props, search engine optimization.",
        "Server-side rendering, mobile development, static site generation, API routes, image optimization.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/munene.jpeg/",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/victormunene.munene.7/",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://x.com/xmunene_",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/victor-munene-mulwa/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    expCards,
    expLogos,
    socialImgs,
    aboutItems,
    techStackIcons,
    techStackImgs,
    navLinks,
  };