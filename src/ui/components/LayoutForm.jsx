export const LayoutForm = ({
  handleSubmit,
  children,
  textButton = "Aceptar",
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {children}
      {
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            {textButton}
          </button>
        </div>
      }
    </form>
  );
};
