import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";

function StudentCard({ student }) {
  const { name, grade, percentage, sports, imgUrl } = student;
  return (
    <div>
      <Card className="p-0">
        <CardHeader className="flex flex-row px-4 py-3 gap-2 items-center">
          <Avatar>
            <AvatarImage src={imgUrl} />
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-1">
              {sports.map((sport) => (
                <span key={sport} className="mr-2.5">
                  #{sport}
                </span>
              ))}
            </CardDescription>
          </div>
          <div className="ml-auto">
            <p className="text-xs text-zinc-300">Grade {grade}</p>
            <p className="text-sm text-end"> {percentage}%</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}

export default StudentCard;
