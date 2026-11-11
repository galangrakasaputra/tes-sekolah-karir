type Role = {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  tags: string[];
};

const roles: Role[] = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    description:
      "Build intuitive, responsive, and accessible user interfaces that make a difference.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    description:
      "Design reliable APIs and scalable systems to power our digital products.",
    tags: ["Node.js", "PostgreSQL", "REST API"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Product & Design",
    type: "Full-time",
    location: "Remote",
    description:
      "Turn complex problems into simple, thoughtful, and delightful user experiences.",
    tags: ["Figma", "UI Design", "Prototyping"],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product & Strategy",
    type: "Full-time",
    location: "Hybrid",
    description:
      "Connect business goals, user needs, and engineering to build meaningful products.",
    tags: ["Product Strategy", "Agile", "Roadmapping"],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[#111411] px-4 py-5 text-[#F4F4EF] sm:px-8 sm:py-8 lg:px-12">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-[#303730] bg-[#171C17]">
        <header className="flex items-center justify-between border-b border-[#303730] px-6 py-5 sm:px-10">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-[#F4F4EF]"
          >
            Job Portal
          </a>

          <p className="hidden text-sm text-[#A0A69C] sm:block">
            We're currently hiring
          </p>

          <a
            href="#open-roles"
            className="rounded-full border border-[#414B40] px-5 py-2.5 text-sm font-medium text-[#F4F4EF] transition-colors duration-300 hover:bg-[#303A30]"
          >
            Explore roles
          </a>
        </header>

        <div className="px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-[#F4F4EF] sm:text-5xl md:text-6xl lg:text-7xl">
              Do meaningful work.
              <br />
              <span className="font-serif italic font-normal text-[#829578]">
                Grow beyond limits.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#A0A69C] sm:text-base">
              Great things happen when passionate people work together. Find
              your place, bring your ideas, and build something that matters
              with us.
            </p>
          </div>

          <div id="open-roles" className="mt-20 scroll-mt-10 sm:mt-24">
            <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#829578]">
                  Opportunities
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#F4F4EF] sm:text-3xl">
                  Find your role
                </h2>
              </div>

              <p className="text-sm text-[#A0A69C]">
                Explore opportunities to make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {roles.map((role) => (
                <article
                  key={role.id}
                  className="group rounded-2xl border border-[#303730] bg-[#1C211C] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#829578] hover:bg-[#222922] sm:p-7"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-[#F4F4EF] sm:text-2xl">
                    {role.title}
                  </h3>

                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#A0A69C]">
                    {role.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[#3A4239] px-2.5 py-1.5 text-xs text-[#A0A69C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#303730] pt-5">
                    <div className="flex gap-3 text-xs text-[#92998F]">
                      <span>{role.type}</span>
                      <span>·</span>
                      <span>{role.location}</span>
                    </div>

                    <a
                      href="#apply"
                      className="text-sm font-semibold text-[#AFC0A5] transition-colors duration-300 group-hover:text-[#D0DDC8]"
                    >
                      View position
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            id="apply"
            className="mt-16 flex flex-col items-start justify-between gap-7 rounded-2xl border border-[#3A4838] bg-[#222B21] p-7 sm:mt-20 sm:flex-row sm:items-center sm:p-10 lg:p-12"
          >
            <div className="max-w-lg">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#AFC0A5]">
                Let's work together
              </p>

              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-[#F4F4EF] sm:text-3xl">
                Don't see your role?
                <br />
                We'd still love to meet you.
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#A0A69C]">
                Tell us what you can bring to the team. Your next opportunity
                might be one conversation away.
              </p>
            </div>

            <a
              href="#open-roles"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#829578] px-6 py-3.5 text-sm font-semibold !text-[#111411] transition-colors duration-300 hover:bg-[#A0B397]"
            >
              Explore open positions
            </a>
          </div>
        </div>

        <footer className="flex items-center justify-center border-t border-[#303730] px-6 py-5 text-xs text-[#777F74]">
          <span className="text-center">
            © 2026 Job Portal All rights reserved.
          </span>
        </footer>
      </section>
    </main>
  );
}

export default App;
