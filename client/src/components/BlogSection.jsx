import React from 'react';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

const BlogSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
      {/* Main Card Section */}
      <div className="lg:col-span-2 space-y-8">
        <BlogCard />
        {/* You can render more <BlogCard />s here later */}
      </div>

      {/* Sidebar */}
      <div>
        <BlogSidebar />
      </div>
    </section>
  );
};

export default BlogSection;
