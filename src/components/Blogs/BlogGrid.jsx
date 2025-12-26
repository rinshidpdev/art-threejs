// import React from 'react';
// import { ArrowRight } from 'lucide-react';
// import BlogCard from './BlogCard';

// const BlogGrid = ({ posts, showAll, onToggleShowAll, onCardClick }) => {
//   const visiblePosts = showAll ? posts : posts.slice(0, 3);

//   return (
//     <div className="w-full">
//       <div className="flex justify-between items-center mb-10">
//         <h2 className="text-4xl font-bold text-white">More Insights</h2>
//         <button 
//           onClick={onToggleShowAll}
//           className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-semibold"
//         >
//           {showAll ? 'Show Less' : 'See All'} <ArrowRight size={20} />
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {visiblePosts.map((post) => (
//           <BlogCard 
//             key={post.id}
//             category={post.category}
//             title={post.title}
//             description={post.description}
//             image={post.image}
//             onClick={() => onCardClick(post)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;
import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid = ({ posts = [], showAll, onToggleShowAll, onCardClick }) => {
  // safety: if no posts, render nothing
  if (!Array.isArray(posts) || posts.length === 0) return null;

  const visible = showAll ? posts : posts.slice(0, 3);

  return (
    <section className="mt-16">
      {/* header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[15px] font-semibold text-slate-50">
          More Insights
        </h2>
        <button
          type="button"
          onClick={onToggleShowAll}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-300 hover:text-indigo-100 transition-colors"
        >
          {showAll ? "Show Less" : "See All"}
          <span className="text-sm">→</span>
        </button>
      </div>

      {/* cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {visible.map((post) => (
          <div key={post.id} className="flex justify-center">
            <BlogCard
              category={post.category}
              title={post.title}
              description={post.description}
              image={post.image}
              onClick={() => onCardClick(post)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
