import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordInput = ({ id, label, value, onChange }) => {
	return (
		<div className="grid w-full gap-2">
			<Label htmlFor={id}>{label}</Label>
			<Input
				type="password"
				id={id}
				placeholder={label}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default PasswordInput;
