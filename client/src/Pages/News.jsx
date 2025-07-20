import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FooterCard from '../components/FooterCard';
import BlogSidebar from '../components/BlogSidebar';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';

const News = () => {
  return (
    <Layout>
      <PageHeader
        title="Blog Posts"
        subtitle="Updates, Health Tips & Announcements"
        description="Stay informed with MEDDICAL’s latest news, events, and medical insights curated just for you."
        breadcrumb="Home / News"
        bgImage="/images/news-hero.jpg"
      />

      <section className="py-16 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>

          {/* 📎 Sidebar Area (1/3 width) */}
          <div>
            <BlogSidebar />
          </div>
        </section>
        <Pagination />

        {/* 🧭 Bottom CTA or Subscription Card */}
        <FooterCard />
      </section>
    </Layout>
  );
};

export default News;
