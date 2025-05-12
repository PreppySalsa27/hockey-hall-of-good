interface PlayerGalleryProps {
  playerName: string;
}

const PlayerGallery = ({ playerName }: PlayerGalleryProps) => {
  return (
    <div className="bg-white rounded-[12px] shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Career Highlights Gallery</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* A hockey player celebrating a goal */}
        <img 
          src="https://images.unsplash.com/photo-1475274110913-480c45d0e873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
          alt={`${playerName} celebrating goal`} 
          className="rounded-[12px] shadow-md w-full h-60 object-cover" 
        />
        
        {/* A hockey player skating at high speed */}
        <img 
          src="https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
          alt={`${playerName} skating`} 
          className="rounded-[12px] shadow-md w-full h-60 object-cover" 
        />
        
        {/* A hockey player holding up a trophy */}
        <img 
          src="https://pixabay.com/get/gfcc7c245a0ea2f18e94153fab42b1f41a85b543f319bf8324730f9903408abab46d0e74028703e9163ea9d1ba269126448877e9ca4b2d9aa1066f6b1afe3c890_1280.jpg" 
          alt={`${playerName} with trophy`} 
          className="rounded-[12px] shadow-md w-full h-60 object-cover" 
        />
      </div>
    </div>
  );
};

export default PlayerGallery;
