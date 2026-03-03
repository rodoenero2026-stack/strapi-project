import Link from 'next/link';

async function getPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?populate=*`, { 
      cache: 'no-store' 
    });
    
    if (!res.ok) return null;
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function BlogPage() {
  const response = await getPosts();
  
  // EL TRUCO: Si response o data no existen, forzamos un array vacío []
  // Así el .map nunca leerá "undefined" y la página no se rompe.
  const posts = response?.data || [];

  return (
    <div className="max-w-7xl mx-auto p-6 md:px-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4 tracking-tight italic">
          GlossDior <span className="text-gray-800 font-light">Blog</span>
        </h1>
        <p className="text-gray-500 text-lg italic">Tips de belleza y tendencias</p>
      </header>
      
      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-xl text-gray-400 font-medium">Aún no hay artículos publicados.</p>
          <p className="text-sm text-gray-400 mt-2 italic">Asegúrate de darle a "Publish" en Strapi y que los permisos sean Públicos.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <article key={post.id} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              
              {/* Imagen (Estructura v5 directa) */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img 
                    src={post.image?.url 
                      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.image.url}`
                      : "https://via.placeholder.com/400x300?text=Sin+Imagen"} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pink-600 uppercase">
                    Beauty
                  </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.description}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-pink-600 font-bold hover:gap-2 transition-all"
                >
                  Leer más <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}