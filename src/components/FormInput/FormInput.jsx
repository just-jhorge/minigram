import { useField } from "formik";

export const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div>
			<label className="text-sm font-semibold" htmlFor={props.id || props.name}>
				{label}
			</label>
			<input className="form-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<p className="text-xs text-red-500">{meta.error}</p>
			) : null}
		</div>
	);
};

export const TextArea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea className="form-input" {...field} {...props}></textarea>
			{meta.touched && meta.error ? (
				<p className="text-xs text-red-500">{meta.error}</p>
			) : null}
		</div>
	);
};
