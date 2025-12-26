// import React from 'react';

// const BlogCard = ({ category, title, description, image, onClick }) => (
//   <div 
//     onClick={onClick}
//     className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50"
//   >
//     <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
//       <img 
//         src={image} 
//         alt={title}
//         className="w-full h-full object-cover"
//       />
//     </div>
//     <div className="p-6">
//       <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
//         [ {category} ]
//       </span>
//       <h3 className="text-xl font-bold text-white mt-3 mb-3 leading-tight">
//         {title}
//       </h3>
//       <p className="text-slate-400 text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );

// export default BlogCard;


import React from "react";

const BlogCard = ({ category, title, description, image, onClick }) => (
  <div
    onClick={onClick}
    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-slate-700/50"
  >
    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
        [ {category} ]
      </span>
      <h3 className="text-xl font-bold text-white mt-3 mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default BlogCard;
