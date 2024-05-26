import { Search as SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

function Search() {
  return (
    <div className="sticky top-[53px] bg-zinc-950 z-10">
      <div className="pt-[27px] relative">
        <SearchIcon className="absolute left-2 top-9 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-8" />
      </div>
    </div>
  );
}
export default Search;
