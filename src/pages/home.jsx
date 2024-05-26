import { useState } from "react";
import Filters from "../components/filters/filters";
import Search from "../components/search";
import StudentCard from "../components/student-card";
import { data } from "../utils/data";

function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("A-Z");

  const searchFilteredData = data.filter((student) => {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  const sortedData = searchFilteredData.sort((a, b) => {
    if (sort === "A-Z") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="flex w-3/4 mx-auto gap-4">
      <Filters setSort={setSort} />
      <div className="w-3/4">
        <Search setSearch={setSearch} />
        <div className="flex flex-col gap-2 mt-4 pb-8">
          {sortedData.map((student) => {
            return <StudentCard key={student.id} student={student} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
