/* eslint-disable react/prop-types */

const StudentBlog = () => {
  // Blog post data
  const blogPosts = [
    {
      title: 'How to Improve Your Study Skills',
      description: 'Discover practical tips to boost your study sessions and excel in your classes.',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Best Online Resources for Students',
      description: 'A comprehensive list of websites that provide valuable learning materials.',
      image: 'https://via.placeholder.com/400',
    },
  ];

  // Header Component
  const Header = () => {
    return (
      <header className="w-full bg-indigo-600 py-6">
        <h1 className="text-4xl font-bold text-center text-white">Student Blog</h1>
      </header>
    );
  };

  // Full-Width Video Component with Dummy Video
  const FullWidthVideo = () => {
    return (
      <div className="w-full h-96">
        <video className="w-full h-full" controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Dummy video source
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

  // Blog Card Component
  const BlogCard = ({ title, description, image }) => {
    return (
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
        <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt="blog post" />
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
          <p className="mt-2 text-gray-700">{description}</p>
          <a href="#" className="inline-flex items-center mt-4 text-indigo-600 hover:underline">
            Read more
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Full-width Header */}
      <Header />

      {/* Full-width Video */}
      <FullWidthVideo />

      {/* Blog Content Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Latest Blog Posts</h2>
        
        {/* Blog Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} title={post.title} description={post.description} image={post.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentBlog;
