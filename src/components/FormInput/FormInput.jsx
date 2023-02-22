import { useField } from "formik";

export const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div>
			<input className="form-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<p className="text-xs text-red-500">{meta.error}</p>
			) : null}
		</div>
	);
};
