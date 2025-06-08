import { Link } from 'react-router-dom';
import { useRecentPosts } from '../hooks/useRecentPosts';
import { PostCard } from '../components/post/PostCard';
import { Spinner } from '../components/ui/Spinner';

export function LandingPage() {
  const { posts, loading } = useRecentPosts(3);

  return (
    <div>
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-white font-serif tracking-wider">TRADEY</h1>
        <p className="text-gray-400 mt-4 text-lg">Your old jacket is someone's new style. Trade, don't waste.</p>
        <div className="mt-8">
          <Link to="/signup" className="bg-[#a61f1e] text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
            Join the Movement
          </Link>
        </div>
      </div>
      
      <hr className="border-gray-800 my-8" />

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Freshly Added</h2>
        {loading ? (
          <div className="flex justify-center"><Spinner /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
        {/* TODO: Add a "See More" button that links to a full gallery page */}
      </div>
    </div>
  );
} 