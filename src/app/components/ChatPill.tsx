import React from 'react';

const ChatPill = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="relative bg-white rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-4 min-h-[120px] flex flex-col justify-between">
        
        {/* Top row - placeholder for the mention/tag area (empty as requested) */}
        <div className="h-6 flex items-center gap-2">
          {/* Empty space where "@ Onboarding call..." was */}
        </div>

        {/* Middle area - input placeholder (empty as requested) */}
        <div className="flex-1 py-3">
          {/* Empty space where "create a summary web page" text input was */}
        </div>

        {/* Bottom row - just the generate button */}
        <div className="flex items-center justify-end pt-2">
          <button 
            className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 shadow-sm"
            onClick={() => console.log('Generate clicked')}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPill;