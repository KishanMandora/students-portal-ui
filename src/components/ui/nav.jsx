const links = [
  { id: 1, name: "Home", path: "#" },
  { id: 2, name: "About", path: "#" },
  { id: 3, name: "Contact", path: "#" },
];

function Nav() {
  return (
    <nav className="flex justify-between w-3/4 mx-auto py-2 items-center border-b border-b-zinc-700 sticky top-0 bg-zinc-950 z-10">
      <h2 className="text-3xl font-semibold"> Students Portal</h2>
      <div className="flex gap-4">
        {links.map((link) => (
          <a
            className={link.name === "Home" ? "border px-2 rounded-md" : ""}
            key={link.id}
            href={link.path}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
