"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { course: "BICT1101", average: 40 },
  { course: "BICT1102", average: 66 },
  { course: "BICT1103", average: 55 },
  { course: "BICT1104", average: 73 },
  { course: "COMM1101", average: 87 },
];

const chartConfig = {
  average: {
    label: "Avg Score",
    color: "var(--color-primary-a30)",
  },
};

export function CourseChart() {
  return (
    <Card className="border border-surface-a10 dark:border-surface-dark-a30">
      <CardHeader>
        <CardTitle>Course Statistics</CardTitle>
        <CardDescription>Top perfoming courses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="aspect-square mx-auto w-full max-h-[400px]"
          config={chartConfig}
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            barCategoryGap={20}
            barGap={20}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="course"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="average" fill="var(--color-primary-a30)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default CourseChart;
