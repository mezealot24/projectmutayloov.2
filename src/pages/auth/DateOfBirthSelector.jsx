import React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

const DateOfBirthSelector = ({
	day,
	month,
	year,
	setDay,
	setMonth,
	setYear,
}) => (
	<div className="grid grid-cols-3 w-full gap-8">
		<div>
			<Label htmlFor="day">Day</Label>
			<Select onValueChange={setDay} value={day}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a day" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Select a day</SelectLabel>
						{days.map((d) => (
							<SelectItem key={d} value={d.toString()}>
								{d}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>

		<div>
			<Label htmlFor="month">Month</Label>
			<Select onValueChange={setMonth} value={month}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a month" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Select a month</SelectLabel>
						{months.map((m) => (
							<SelectItem key={m} value={m.toString()}>
								{m}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>

		<div>
			<Label htmlFor="year">Year</Label>
			<Select onValueChange={setYear} value={year}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select a year" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Select a year</SelectLabel>
						{years.map((y) => (
							<SelectItem key={y} value={y.toString()}>
								{y}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	</div>
);

export default DateOfBirthSelector;
