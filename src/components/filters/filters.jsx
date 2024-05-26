import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { grades, sports } from "../../utils/data";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";

const tabs = [
  { id: 1, name: "A-Z" },
  { id: 2, name: "Z-A" },
];

function FilterTabs() {
  return (
    <div>
      <Tabs defaultValue={tabs[0].name} className="w-full">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger className="w-1/2" key={tab.id} value={tab.name}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

function FilterSports() {
  return (
    <div className="flex flex-col gap-1.5 mt-4">
      <h3 className="text-lg"> Sports Filter</h3>
      {sports.map((sport) => (
        <div key={sport.id} className="flex items-center space-x-2">
          <Checkbox id={sport.id} />
          <Label htmlFor={sport.id}>{sport.name}</Label>
        </div>
      ))}
    </div>
  );
}

function FilterGrades() {
  console.log("grades", grades);
  return (
    <div className="flex flex-col gap-1.5 mt-4">
      <h3 className="text-lg"> Grades Filter</h3>
      <RadioGroup defaultValue="comfortable">
        {grades.map((grade) => (
          <div key={grade.id} className="flex items-center space-x-2">
            <RadioGroupItem value={grade.name} id={grade.id} />
            <Label htmlFor={grade.id}>{grade.name} Grade</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

function FilterPercentage() {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h3 className="text-lg mb-2">Percentage Filter</h3>
        <span>50%</span>
      </div>
      <Slider defaultValue={[50]} max={100} step={1} className={"w-full"} />
    </div>
  );
}

function Filters() {
  return (
    <div className="w-1/4 mx-auto">
      <div className="w-full p-3 border rounded-md border-zinc-800 sticky top-20">
        <FilterTabs />
        <FilterPercentage />
        <FilterGrades />
        <FilterSports />
      </div>
    </div>
  );
}

export default Filters;
