// import React from 'react';
// import BlogCard from './BlogCard';

// const BlogDetailPage = ({ article, onBack, relatedArticles = [] }) => {
//   if (!article) return null;

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       {/* Main Article Content */}
//       <div className="px-8 pt-8 pb-16">
//         <button 
//           onClick={onBack}
//           className="mb-8 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-lg"
//         >
//           ← Back to Articles
//         </button>
        
//         <article className="max-w-4xl mx-auto">
//           <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4 inline-block">
//             [ {article.category} ]
//           </span>
          
//           <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent leading-tight">
//             {article.title}
//           </h1>
          
//           <p className="text-slate-400 mb-6 text-lg leading-relaxed">
//             {article.description}
//           </p>
          
//           <div className="flex items-center gap-4 mb-12 text-sm text-slate-500">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
//               <span>{article.author || 'Ink Reverie'}</span>
//             </div>
//             <span>•</span>
//             <span>{article.date || 'Apr 21, 2025'}</span>
//           </div>

//           {/* Featured Image - Same as card */}
//           <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-blue-500/10">
//             <img 
//               src={article.image} 
//               alt={article.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Article Body */}
//           <div className="space-y-8">
//             <p className="text-slate-300 leading-relaxed text-lg">
//               When you think of business automation, your mind might jump to chatbots or scheduled social posts. But with the rise of AI agencies, there's a whole world of small, everyday tasks you can now automate — saving you time, money, and brainpower.
//             </p>
            
//             <p className="text-slate-300 leading-relaxed text-lg">
//               Here are 5 common tasks your <span className="text-blue-400 font-semibold">AI agency</span> can help to automate:
//             </p>

//             {/* Section 1 */}
//             <section className="mt-10">
//               <h2 className="text-3xl font-bold text-white mb-4">1. Inbox Triage</h2>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 Overwhelmed by email? An AI agency can set up smart inbox filters or integrate tools like Superhuman to prioritize, label, and even auto-respond based on your habits.
//               </p>
//             </section>

//             {/* Section 2 */}
//             <section className="mt-10">
//               <h2 className="text-3xl font-bold text-white mb-4">2. Proposal & Quote Generation</h2>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 No more writing proposals from scratch. Your AI agency can build a system that automatically creates custom proposals when leads fill out a form — pulling in pricing, timelines, and service details from your CRM.
//               </p>
//             </section>

//             {/* Section 3 */}
//             <section className="mt-10">
//               <h2 className="text-3xl font-bold text-white mb-4">3. Data Entry & Syncing</h2>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 Manual data entry is a thing of the past. With tools like Zapier or Make, your <span className="text-blue-400 font-semibold">AI agency</span> can connect your apps so customer info, invoices, and project updates are always synced.
//               </p>
//             </section>

//             {/* Section 4 */}
//             <section className="mt-10">
//               <h2 className="text-3xl font-bold text-white mb-4">4. Onboarding Workflows</h2>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 Whether you're welcoming new clients or team members, an AI agency can help you create a fully automated onboarding process — complete with welcome emails, calendar invites, and step-by-step guides.
//               </p>
//             </section>

//             {/* Section 5 */}
//             <section className="mt-10">
//               <h2 className="text-3xl font-bold text-white mb-4">5. Daily Reports & Dashboards</h2>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 Need regular updates on sales, traffic, or performance? Your AI agency can build live dashboards and reports that update in real-time — no more chasing spreadsheets.
//               </p>
//             </section>

//             {/* Why It Matters Section */}
//             <div className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50">
//               <h3 className="text-2xl font-bold text-white mb-4">Why It Matters</h3>
//               <p className="text-slate-300 leading-relaxed text-lg mb-4">
//                 Working with an AI agency means you don't just save time — you scale smarter. From marketing to operations, the right AI automations can give you back hours every week and help you grow without burning out.
//               </p>
//               <p className="text-slate-300 leading-relaxed text-lg">
//                 <span className="font-semibold text-white">Want to see what your AI agency could automate today?</span><br />
//                 Let's find the hidden tasks eating up your time — and let AI handle the rest.
//               </p>
//             </div>
//           </div>
//         </article>
//       </div>

//       {/* Related Articles Section - At Bottom */}
//       {relatedArticles && relatedArticles.length > 0 && (
//         <div className="border-t border-slate-800 bg-slate-950 px-8 py-16">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-4xl font-bold text-white mb-10">More Insights</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {relatedArticles.slice(0, 3).map((post) => (
//                 <BlogCard 
//                   key={post.id}
//                   category={post.category}
//                   title={post.title}
//                   description={post.description}
//                   image={post.image}
//                   onClick={() => {
//                     window.scrollTo(0, 0);
//                     if (post.onClick) post.onClick(post);
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetailPage;
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPosts";
import BlogCard from "./BlogCard";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const article = blogPosts.find((p) => String(p.id) === id);
  const related = blogPosts.filter((p) => p.id !== Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-950 text-white px-8 py-16">
        <p>Article not found.</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 inline-flex text-blue-400 hover:text-blue-300"
        >
          ← Back to Articles
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="px-8 pt-8 pb-16">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-blue-400 hover:text-blue-300 flex items-center gap-2 text-lg"
        >
          ← Back to Articles
        </button>

        <article className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4 inline-block">
            [ {article.category} ]
          </span>

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-400 mb-6 text-lg leading-relaxed">
            {article.description}
          </p>

          

          <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-blue-500/10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Styled HTML content from blogPosts */}
          <div
            className="space-y-6 text-slate-300
                       [&>p]:text-lg [&>p]:leading-relaxed
                       [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-3"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why It Matters
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-4">
              Working with an AI agency means you don't just save time —
              you scale smarter. From marketing to operations, the right
              AI automations can give you back hours every week and help
              you grow without burning out.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              <span className="font-semibold text-white">
                Want to see what your AI agency could automate today?
              </span>
              <br />
              Let's find the hidden tasks eating up your time — and let
              AI handle the rest.
            </p>
          </div>
        </article>
      </div>

      {/* related "More Insights" same header layout */}
      {related.length > 0 && (
        <div className="border-t border-slate-800 bg-slate-950 px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[15px] font-semibold text-slate-50">
                More Insights
              </h2>
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-300 hover:text-indigo-100 transition-colors"
              >
                See All <span className="text-sm">→</span>
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {related.slice(0, 3).map((post) => (
                <div key={post.id} className="flex justify-center">
                  <BlogCard
                    category={post.category}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    onClick={() => navigate(`/blog/${post.id}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetailPage;
