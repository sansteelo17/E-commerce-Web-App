const ErrorLayout = () => {
  return (
    <div className="flex bg-black h-screen w-screen justify-center items-center text-white font-bold text-2xl">
      <div>
        <span className="border-r pr-2">Oops!</span>
        <span className="pl-2">Something went wrong...</span>
      </div>
    </div>
  );
};

export default ErrorLayout;
