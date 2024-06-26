import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { grades, sports } from "../../utils/data";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

const tabs = [
  { id: 1, name: "A-Z" },
  { id: 2, name: "Z-A" },
];

function FilterTabs({ setSort }) {
  const handleTabClick = (e) => {
    setSort(e.target.innerText);
  };
  return (
    <div>
      <Tabs defaultValue={tabs[0].name} className="w-full">
        <TabsList className="w-full">
          {tabs.map((tab) => (
            <TabsTrigger
              className="w-1/2"
              key={tab.id}
              value={tab.name}
              onClick={handleTabClick}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

function FilterSports({ setSports }) {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.dataset.state === "checked";

    if (isChecked) {
      setSports((prev) => prev.filter((sport) => sport !== e.target.id));
    } else {
      setSports((prev) => [...prev, e.target.id]);
    }
  };
  return (
    <div className="flex flex-col gap-1.5 mt-4">
      <h3 className="text-lg"> Sports Filter</h3>
      {sports.map((sport) => (
        <div key={sport.id} className="flex items-center space-x-2">
          <Checkbox id={sport.id} onClick={handleCheckboxChange} />
          <Label htmlFor={sport.id}>{sport.name}</Label>
        </div>
      ))}
    </div>
  );
}

function FilterGrades({ setGrade }) {
  const handleGradeChange = (e) => {
    setGrade(Number(e.target.value));
  };
  return (
    <div className="flex flex-col gap-1.5 mt-4">
      <h3 className="text-lg"> Grades Filter</h3>
      <RadioGroup defaultValue="comfortable">
        {grades.map((grade) => (
          <div key={grade.id} className="flex items-center space-x-2">
            <RadioGroupItem
              value={grade.name}
              id={grade.id}
              onClick={handleGradeChange}
            />
            <Label htmlFor={grade.id}>{grade.name} Grade</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

function FilterPercentage({ percentage, setPercentage }) {
  const handleSliderChange = (value) => {
    setPercentage(value[0]);
  };
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h3 className="text-lg mb-2">Percentage Filter</h3>
        <span>{percentage}%</span>
      </div>
      <Slider
        defaultValue={[50]}
        value={[percentage]}
        max={100}
        step={1}
        className={"w-full"}
        onValueChange={handleSliderChange}
      />
    </div>
  );
}

function Filters({ setSort, percentage, setPercentage, setGrade, setSports }) {
  const handleClearFilters = () => {
    setSort("A-Z");
    setPercentage(50);
    setGrade(null);
    setSports([]);
  };

  return (
    <div className="w-1/4 mx-auto sticky top-20">
      <div className="w-full p-3 border rounded-md border-zinc-800 mt-6">
        <FilterTabs setSort={setSort} />
        <FilterPercentage
          percentage={percentage}
          setPercentage={setPercentage}
        />
        <FilterGrades setGrade={setGrade} />
        <FilterSports setSports={setSports} />
        <Button className="w-full mt-4" onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
}

export default Filters;
