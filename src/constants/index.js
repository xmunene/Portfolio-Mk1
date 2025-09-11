const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
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
  
  const counterItems = [
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 95, suffix: "%", label: "Client Retention Rate" },
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
      name: "Object Oriented Programmer",
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
      modelPath: "/models/wordpress.glb",
      scale: 0.15,
      rotation: [1.5, 0, 0],
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
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      url: "https://www.instagram.com/",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      url: "https://www.facebook.com/",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      url: "https://www.x.com/",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };