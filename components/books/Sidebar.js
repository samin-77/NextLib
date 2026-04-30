'use client';

const Sidebar = ({ onCategoryFilter, selectedCategory }) => {
  const categories = ['All', 'Story', 'Tech', 'Science'];

  return (
    <div className="w-full lg:w-64">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title text-primary mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryFilter(category)}
                className={`btn w-full justify-start ${
                  selectedCategory === category
                    ? 'btn-primary'
                    : 'btn-outline'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
