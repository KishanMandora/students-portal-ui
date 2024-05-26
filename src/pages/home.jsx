import Filters from "../components/filters/filters";
import Search from "../components/search";
import StudentCard from "../components/student-card";
import { data } from "../utils/data";

function Home() {
  return (
    <div className="flex w-3/4 mx-auto gap-4">
      <Filters />
      <div className="w-3/4">
        <Search />
        <div className="flex flex-col gap-2 mt-4 pb-8">
          {data.map((student) => {
            return <StudentCard key={student.id} student={student} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
