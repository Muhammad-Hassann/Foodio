import React, { useState } from 'react';
import Sidebar from './Sidebar';

function DynamicComponent({ components }) {
  const [activeComponent, setActiveComponent] = useState(components[0]);

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar
        components={components}
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />

      <div className="lg:w-3/4 w-full p-4">
        {activeComponent.component({
          imageSrc: activeComponent.imageSrc,
          mainTitle: activeComponent.mainTitle,
          items: activeComponent.items,
        })}
      </div>
    </div>
  );
}

export default DynamicComponent;
