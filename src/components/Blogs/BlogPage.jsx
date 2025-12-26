// import React, { useState } from 'react';
// import BlogGrid from './BlogGrid';
// import BlogDetailPage from './BlogDetailPage';

// const BlogPage = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [selectedArticle, setSelectedArticle] = useState(null);

//   const blogPosts = [
//     {
//       id: 1,
//       category: 'AI AUTOMATION',
//       title: 'The Future is Automated: Why Now Is the Time to Embrace AI',
//       description: 'Discover how AI automation is reshaping industries — and why early adopters are winning big.',
//       image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop',
//       author: 'Sarah Chen',
//       date: 'Dec 20, 2025'
//     },
//     {
//       id: 2,
//       category: 'TIPS',
//       title: 'AI vs. Human: Finding the Perfect Workflow Balance',
//       description: 'Learn when to automate, when to delegate, and how to get the best of both worlds.',
//       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
//       author: 'Mike Rodriguez',
//       date: 'Dec 18, 2025'
//     },
//     {
//       id: 3,
//       category: 'AI AUTOMATION',
//       title: 'From Chaos to Clarity: How AI Streamlines Your Operations',
//       description: 'Explore real-world examples of businesses transforming messy workflows into seamless systems.',
//       image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
//       author: 'Emma Watson',
//       date: 'Dec 15, 2025'
//     },
//     {
//       id: 4,
//       category: 'STRATEGY',
//       title: 'Building Your AI Stack: Essential Tools for Modern Teams',
//       description: 'A comprehensive guide to selecting and implementing AI tools that actually work together.',
//       image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
//       author: 'James Park',
//       date: 'Dec 12, 2025'
//     },
//     {
//       id: 5,
//       category: 'CASE STUDY',
//       title: 'How One Company Saved 40 Hours Per Week With AI',
//       description: 'Real metrics, real results. See how automation transformed this growing startup.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
//       author: 'Lisa Kumar',
//       date: 'Dec 10, 2025'
//     },
//     {
//       id: 6,
//       category: 'FUTURE TECH',
//       title: "What's Next: AI Trends That Will Define 2025",
//       description: 'Stay ahead of the curve with insights into emerging AI capabilities and opportunities.',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
//       author: 'David Kim',
//       date: 'Dec 8, 2025'
//     }
//   ];

//   // Get related articles (exclude current article)
//   const getRelatedArticles = (currentArticle) => {
//     return blogPosts
//       .filter(post => post.id !== currentArticle.id)
//       .slice(0, 3)
//       .map(post => ({
//         ...post,
//         onClick: (article) => {
//           setSelectedArticle(article);
//           window.scrollTo(0, 0);
//         }
//       }));
//   };

//   // If article is selected, show detail page
//   if (selectedArticle) {
//     return (
//       <BlogDetailPage 
//         article={selectedArticle}
//         onBack={() => setSelectedArticle(null)}
//         relatedArticles={getRelatedArticles(selectedArticle)}
//       />
//     );
//   }

//   // Otherwise show grid
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <div className="max-w-7xl mx-auto px-8 py-16">
//         <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
//           Latest Insights & Articles
//         </h1>
//         <p className="text-slate-400 text-lg mb-16">
//           Explore our collection of articles on AI automation, business strategy, and digital transformation.
//         </p>

//         <BlogGrid 
//           posts={blogPosts}
//           showAll={showAll}
//           onToggleShowAll={() => setShowAll(!showAll)}
//           onCardClick={(post) => {
//             setSelectedArticle(post);
//             window.scrollTo(0, 0);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import BlogGrid from "./BlogGrid";

const BlogPage = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  return (
    <main className="bg-[#0000] text-slate-100 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* header text like screenshot */}
       

       
      

        {/* bottom grid like screenshot */}
        <BlogGrid
          posts={blogPosts}
          showAll={showAll}
          onToggleShowAll={() => setShowAll((v) => !v)}
          onCardClick={(post) => navigate(`/blog/${post.id}`)}
        />
      </div>
    </main>
  );
};

export default BlogPage;
