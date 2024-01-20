export const Input = ({ label, type, register, errors }) => {
  return (
    <div className="w-full max-w-md ">
      <label htmlFor="name" className="block">
        {label}
      </label>
      <input type={type} id="name" className="" {...register} />
      {errors.password && (
        <span className="text-xs text-red-500">{errors.label.message}</span>
      )}
    </div>
  );
};
