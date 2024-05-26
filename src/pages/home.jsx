import { useState } from "react";
import Filters from "../components/filters/filters";
import Search from "../components/search";
import StudentCard from "../components/student-card";
import { data } from "../utils/data";

function Home() {
  const [students, setStudents] = useState(data);
  const [search, setSearch] = useState("");

  const searchFilteredData = students.filter((student) => {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex w-3/4 mx-auto gap-4">
      <Filters />
      <div className="w-3/4">
        <Search setSearch={setSearch} />
        <div className="flex flex-col gap-2 mt-4 pb-8">
          {searchFilteredData.map((student) => {
            return <StudentCard key={student.id} student={student} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
