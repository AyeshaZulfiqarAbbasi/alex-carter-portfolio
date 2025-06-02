import brandIdentity from '../assets/brandIdentity.jpg';
import websiteUI from '../assets/WebUi.jpg';
import digitalIllustration from '../assets/DigIllust.jpg';
import appInterface from '../assets/AppImg.jpg';
import posterDesign from '../assets/PosterDesign.jpg';


function Projects() {
  const projects = [
    { id: 1, title: "Brand Identity", description: "Complete branding for a startup.", img: brandIdentity },
    { id: 2, title: "Website UI", description: "Modern UI design for an e-commerce site.", img: websiteUI },
    { id: 3, title: "Digital Illustration", description: "Custom illustrations for a children's book.", img: digitalIllustration  },
    { id: 4, title: "App Interface", description: "Mobile app UI/UX design.", img: appInterface },
    { id: 5, title: "Poster Design", description: "Event poster for a music festival.", img: posterDesign  },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;