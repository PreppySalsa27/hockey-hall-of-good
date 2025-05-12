import { CareerTimelineItem } from "@/data/players";

interface CareerTimelineProps {
  timelineItems: CareerTimelineItem[];
}

const CareerTimeline = ({ timelineItems }: CareerTimelineProps) => {
  return (
    <div className="bg-white rounded-[12px] shadow-lg p-6 md:p-8 mb-8">
      <h3 className="text-2xl font-bold mb-6">Career Timeline</h3>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 sm:left-1/2 ml-4 sm:ml-0 top-0 bottom-0 w-0.5 bg-primary/20"></div>
        
        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineItems.map((item) => (
            <div key={item.id} className="relative flex flex-col sm:flex-row items-start">
              {item.id % 2 === 1 ? (
                <>
                  <div className="sm:w-1/2 pr-8 sm:text-right mb-4 sm:mb-0 order-2 sm:order-1">
                    <h4 className="font-semibold text-lg text-primary">{item.team}</h4>
                    <p className="text-gray-600">{item.years}</p>
                    <p className="mt-2 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="sm:w-1/2 flex justify-center sm:justify-start items-center order-1 sm:order-2 pl-0 sm:pl-8">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">{item.id}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="sm:w-1/2 pr-0 sm:pr-8 order-2 mb-4 sm:mb-0">
                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">{item.id}</div>
                  </div>
                  
                  <div className="sm:w-1/2 pl-8 order-1">
                    <h4 className="font-semibold text-lg text-primary">{item.team}</h4>
                    <p className="text-gray-600">{item.years}</p>
                    <p className="mt-2 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;
