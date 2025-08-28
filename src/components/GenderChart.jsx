import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { gender: "male", total: 150, fill: "var(--color-primary-a30)" },
  { gender: "female", total: 80, fill: "var(--color-surface-a50)" },
];

const chartConfig = {
  total: { label: "Total" },
  male: { label: "Male" },
  female: { label: "Female" },
};

export function GenderChart() {
  return (
    <Card className="border border-surface-a10 dark:border-surface-dark-a30">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-dark-a0 dark:text-light-a0">Gender Statistics</CardTitle>
        <CardDescription>Student Enrollment by Gender</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="total" nameKey="gender" />
            <ChartLegend
              content={<ChartLegendContent nameKey="gender" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default GenderChart;
