function Home() {
  return (
    <section id="home" className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg max-w-2xl mx-auto">
          I'm Alex Carter, a passionate graphic designer with a knack for creating visually stunning designs. With over 5 years of experience, I specialize in branding, UI/UX, and digital illustrations. Explore my projects to see my work, and feel free to reach out for collaboration opportunities.
        </p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">View Projects</a>
      </div>
    </section>
  );
}

export default Home;