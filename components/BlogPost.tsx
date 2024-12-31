export function BlogPost() {
  return (
    <div className="flex w-fit">
      <a
        href="https://sheninth.medium.com/the-easiest-and-most-effective-way-to-integrate-any-database-postgresql-and-mongodb-into-your-e0a474ddd257"
        className=""
      >
        <div className="bg-white/5 border border-white/10  p-2 w-fit flex flex-col space-y-2 rounded-2xl">
          <img
            src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*dAgiPxEEwiN-y-5ZXaqBCg.jpeg"
            className="h-40 rounded-2xl object-cover"
          />
          <div className="w-72 font-metrophobic">
            The easiest and most effective way to integrate any database
            (Postgresql and MongoDB) into your Node.js project with Prisma
          </div>
          <div className="flex items-center space-x-2 font-metrophobic">
            <div>
              <img
                src="/pic.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-lg">Sheninth Jr</div>
              <div className="text-neutral-300 text-sm">
                <span>6 min read</span>
                <span> - </span>
                <span>Oct 18, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
