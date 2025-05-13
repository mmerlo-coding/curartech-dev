const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5">
        {/* First set of squares */}
        <div className="absolute left-0 top-0 h-2 w-2 animate-square1 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-20 h-2 w-2 animate-square2 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-40 h-2 w-2 animate-square3 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-60 h-2 w-2 animate-square4 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-80 h-2 w-2 animate-square5 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-[400px] h-2 w-2 animate-square6 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-[500px] h-2 w-2 animate-square7 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-[600px] h-2 w-2 animate-square8 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-[700px] h-2 w-2 animate-square9 rounded-sm bg-primary/20"></div>
        <div className="absolute left-0 top-[800px] h-2 w-2 animate-square10 rounded-sm bg-primary/20"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground; 