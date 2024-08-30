const Benefits = () => {
  return (
    <div className="benefit-cover min-h-[60vh] relative flex items-center justify-center">
      <div className="w-[70%] md:h-[auto] bg-[#F7F5FF] border-[2px] rounded-xl border-[#3f48d1] py-10">
        <h3 className="uppercase font-black text-2xl md:text-7xl text-center w-full mb-4">
          EVERYTHING YOU NEED TO <span className="text-[#3f48d1]">SUCCEED</span>{" "}
          AVAILABLE IN A SINGLE PLATFORM
        </h3>
        <p className="text-xl md:text-2xl text-center">
          Add in your own website. No complex integrations.
        </p>
      </div>
    </div>
  );
};

export default Benefits;