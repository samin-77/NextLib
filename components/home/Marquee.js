const Marquee = () => {
  const announcements = [
    "New Arrivals: The Great Adventure by John Smith",
    "Special Discount on Premium Memberships - 20% OFF",
    "This Week's Featured: JavaScript Mastery",
    "Limited Time: Free Trial for New Members",
    "New Science Collection Available Now",
    "Story Books Weekend - Double Points Available",
  ];

  return (
    <div className="bg-secondary text-secondary-content py-2 overflow-hidden">
      <div className="marquee whitespace-nowrap">
        {announcements.map((announcement, index) => (
          <span key={index} className="mx-8">
            {announcement} |
          </span>
        ))}
        {announcements.map((announcement, index) => (
          <span key={`duplicate-${index}`} className="mx-8">
            {announcement} |
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
