import GPS from "../assets/png/GPS.png";
import Jakroo from "../assets/png/Jakroo.png";
import Alloy from "../assets/png/Alloy.png";
import delivery from "../assets/png/delivery.png";
import eLearning from "../assets/png/eLearning.png";
import humble from "../assets/png/humble.png";

export const projectsData = [
  {
    id: 1,
    projectName: "GPS tracking",
    projectDesc:
      "This platform allows users to track their cars using devices that are installed on the cars.",
    tags: ["React", "Node.js", "AWS", "Rest API"],
    demo: "https://www.moovetrax.com",
    image: GPS,
  },
  {
    id: 2,
    projectName: "Jakroo",
    projectDesc:
      "This project is a Jewelry shop, Customer can be buy product and manage them and make payment.",
    tags: ["React", "Express", "Material Ui", "Three.js"],
    demo: "https://jakroo.com/",
    image: Jakroo,
  },
  {
    id: 3,
    projectName: "eLearning",
    projectDesc: "This project about travel agency management.",
    tags: ["TypeScript", "Postgres", "Socket.io"],
    demo: "https://escuela.pro/eng/",
    image: eLearning,
  },
  {
    id: 4,
    projectName: "delivery service",
    projectDesc: "This project about travel agency management.",
    tags: ["Angular", "Nest.js", "GraphQL"],
    demo: "",
    image: delivery,
  },
  {
    id: 5,
    projectName: "Alloy",
    projectDesc: "This project about travel agency management.",
    tags: ["React", "Node", "JavaScript"],
    demo: "",
    image: Alloy,
  },
  {
    id: 6,
    projectName: "Humble",
    projectDesc: "This project about travel agency management.",
    tags: ["React", "CSS", "HTML"],
    demo: "",
    image: humble,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
